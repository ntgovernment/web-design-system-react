import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, children, dismissible, onDismiss, icon, }: import('./Alert').AlertProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Success: Story;
export declare const Danger: Story;
export declare const Dismissible: Story;
export declare const AllVariants: Story;
export declare const WithIcon: Story;
export declare const ContextualIcons: Story;
export declare const DismissibleWithIcon: Story;
