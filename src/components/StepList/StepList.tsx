import React from "react";
import "./StepList.css";

export interface StepListItemContent {
  /** Description text for the step */
  description?: string;
}

export interface StepListItem {
  /** Step number */
  stepNumber: number;
  /** Title of the step */
  title: string;
  /** Optional description content for the step */
  content?: StepListItemContent;
}

export interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of step items to display */
  steps: StepListItem[];
}

/**
 * StepList component for displaying sequential processes or multi-step workflows.
 *
 * Presents content in a progression of steps where a process or application requires
 * a sequential, multi-step approach. Each step includes:
 * - Step number in a circle
 * - Step title
 * - Optional description
 */
export const StepList = ({ steps, className, ...props }: StepListProps) => {
  const stepListClass = `step-list${className ? ` ${className}` : ""}`;

  return (
    <div className={stepListClass} {...props}>
      {steps.map((step, index) => {
        return (
          <div key={index} className="step-list__item">
            {/* Step number circle */}
            <div className="step-list__step-number-section">
              <div className="step-list__step-circle">
                <span className="step-list__step-number">
                  {step.stepNumber}
                </span>
              </div>
            </div>

            {/* Step content */}
            <div className="step-list__content">
              {/* Step title */}
              <div className="step-list__title-wrapper">
                <span className="step-list__step-label">
                  Step {step.stepNumber}.
                </span>
                <span className="step-list__title">{step.title}</span>
              </div>

              {/* Optional description */}
              {step.content?.description && (
                <div className="step-list__description">
                  {step.content.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
