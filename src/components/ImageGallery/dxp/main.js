/**
 * ImageGallery DXP Component Service - Server-Side Renderer
 *
 * Source modes:
 *  - singleImages: select individual images using multi-asset picker
 *  - folder: select one folder and render its image children
 */

const VALID_SOURCE_TYPES = new Set(["singleImages", "folder"]);
const VALID_BACKGROUNDS = new Set(["default", "shade", "shade-alt"]);

const EMPTY_STATE_MESSAGES = {
	singleImages: "No images selected.",
	folder: "No images found in the selected folder.",
};

function esc(value) {
	return String(value ?? "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function extractAssetId(value) {
	if (typeof value === "number") return String(value);
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (!trimmed) return "";

		const matrixUriMatch = trimmed.match(/matrix-asset:\/\/[^/]+\/(\d+)$/);
		if (matrixUriMatch) return matrixUriMatch[1];

		const numericMatch = trimmed.match(/^(\d+)$/);
		if (numericMatch) return numericMatch[1];

		return "";
	}

	if (value && typeof value === "object") {
		const candidate =
			value.assetId ??
			value.assetID ??
			value.asset_assetid ??
			value.id;
		return candidate ? extractAssetId(candidate) : "";
	}

	return "";
}

function getSelectedAssetIds(singleFileSelection) {
	if (!Array.isArray(singleFileSelection)) return [];

	return singleFileSelection
		.map((item) => extractAssetId(item))
		.filter(Boolean);
}

function hasFolderSelection(folderSelection) {
	return Boolean(extractAssetId(folderSelection));
}

function getSourceAssets(sourceType, singleFileSelection, folderSelection) {
	if (sourceType === "singleImages") {
		return Array.isArray(singleFileSelection)
			? singleFileSelection.filter((item) => item && typeof item === "object")
			: [];
	}

	if (sourceType === "folder") {
		if (Array.isArray(folderSelection)) return folderSelection;

		if (folderSelection && typeof folderSelection === "object") {
			const children =
				folderSelection.asset_children ?? folderSelection.assetChildren ?? [];
			return Array.isArray(children) ? children : [];
		}

		return [];
	}

	return [];
}

function normalizeImage(image, index) {
	const src =
		String(image?.image_v_small_url ?? "").trim() ||
		String(image?.asset_url ?? "").trim() ||
		String(image?.url ?? "").trim() ||
		String(image?.imageVariations?.v_small?.url ?? "").trim() ||
		String(image?.imageVariations?.small?.url ?? "").trim() ||
		String(image?.imageVariations?.original?.url ?? "").trim();
	if (!src) return null;

	const shortName =
		String(image?.asset_short_name ?? "").trim() || String(image?.name ?? "").trim();
	const alt =
		String(image?.asset_attribute_alt ?? "").trim() ||
		String(image?.alt ?? "").trim() ||
		shortName ||
		"Image";
	const caption =
		String(image?.asset_attribute_caption ?? "").trim() ||
		String(image?.caption ?? "").trim();
	const keyBase = String(
		image?.asset_assetid ?? image?.assetId ?? image?.id ?? shortName ?? index
	);

	return {
		key: `${keyBase}-${index}`,
		src,
		alt,
		caption: caption || "",
	};
}

function renderImageCard(image, showCaptions) {
	const captionHtml =
		showCaptions && image.caption
			? `\n                <figcaption class="figure-caption image-gallery__caption">${esc(image.caption)}</figcaption>`
			: "";

	return `
					<div class="col-12 col-sm-6 col-lg-3">
						<figure class="figure image-gallery__figure">
							<img
								src="${esc(image.src)}"
								alt="${esc(image.alt)}"
								class="figure-img img-fluid image-gallery__image"
								loading="lazy"
								decoding="async"
							/>${captionHtml}
						</figure>
					</div>`;
}

export default {
	async main(input) {
		const {
			sourceType = "singleImages",
			sectionTitle = "",
			backgroundColour = "default",
			singleFileSelection = [],
			folderSelection = "",
			showCaptions = true,
			singleImagesEmptyMessage = EMPTY_STATE_MESSAGES.singleImages,
			folderEmptyMessage = EMPTY_STATE_MESSAGES.folder,
		} = input || {};

		const safeSourceType = VALID_SOURCE_TYPES.has(sourceType)
			? sourceType
			: "singleImages";

		const safeBackground = VALID_BACKGROUNDS.has(backgroundColour)
			? backgroundColour
			: "default";

		const selectedSingleIds = getSelectedAssetIds(singleFileSelection);
		const folderIsSelected = hasFolderSelection(folderSelection);

		let sourceassets = [];
		if (
			(safeSourceType === "singleImages" && selectedSingleIds.length > 0) ||
			(safeSourceType === "folder" && folderIsSelected)
		) {
			sourceassets = getSourceAssets(
				safeSourceType,
				singleFileSelection,
				folderSelection
			);
		}

		const normalizedImages = sourceassets
			.map((image, index) => normalizeImage(image, index))
			.filter(Boolean);

		const titleHtml = sectionTitle
			? `\n  <h2 class="image-gallery__title">${esc(sectionTitle)}</h2>`
			: "";

		let contentHtml = "";

		if (normalizedImages.length === 0) {
			const emptyMessage =
				safeSourceType === "singleImages"
					? singleImagesEmptyMessage
					: folderEmptyMessage;

			contentHtml = `
	<p class="image-gallery__empty" role="status" aria-live="polite">${esc(emptyMessage)}</p>`;
		} else {
			const cardsHtml = normalizedImages
				.map((image) => renderImageCard(image, Boolean(showCaptions)))
				.join("");

			contentHtml = `
	<div class="row g-4 image-gallery__grid">${cardsHtml}
	</div>`;
		}

		const ariaLabel = String(sectionTitle || "Image gallery");

		return `
<section
	class="image-gallery image-gallery--background-${esc(safeBackground)}"
	data-source-type="${esc(safeSourceType)}"
	aria-label="${esc(ariaLabel)}"
>${titleHtml}${contentHtml}
</section>`;
	},
};
