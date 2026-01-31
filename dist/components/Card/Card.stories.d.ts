import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ title, children, footer, variant, }: import('./Card').CardProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithFooter: Story;
export declare const PrimaryVariant: Story;
export declare const AllVariants: Story;
