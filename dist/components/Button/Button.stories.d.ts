import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, size, disabled, children, onClick, type, icon, iconPosition, ...props }: import('./Button').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: (string | undefined)[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
export declare const AllVariants: Story;
export declare const WithIconLeft: Story;
export declare const WithIconRight: Story;
export declare const IconOnly: Story;
export declare const IconButtons: Story;
export declare const IconOnlyButtons: Story;
