import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ icon, color, size, className, ariaHidden, ariaLabel, onClick, style, }: import('./Icon').IconProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            control: "color";
        };
        size: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithColor: Story;
export declare const WithSize: Story;
export declare const WithSpacing: Story;
export declare const AllLightIcons: Story;
export declare const ColoredIcons: Story;
export declare const Sizes: Story;
export declare const RegularIcons: Story;
export declare const StatusIcons: Story;
