import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputField } from "./InputField";

const meta = {
  title: "Design System/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Workspace name",
    placeholder: "Acme Design",
    helperText: "Use the name your team recognizes.",
    disabled: false,
  },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "search"] },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "Workspace name is required.",
    helperText: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Locked workspace",
  },
};
