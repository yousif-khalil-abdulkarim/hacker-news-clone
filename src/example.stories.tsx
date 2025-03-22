import type { Meta, StoryObj } from "@storybook/react";

function Example() {
    return <>Example</>;
}

const meta: Meta<typeof Example> = {
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {};
