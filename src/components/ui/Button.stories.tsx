import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Create playlist",
    variant: "primary",
    size: "md",
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "ghost"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
