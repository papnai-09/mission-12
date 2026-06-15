import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCard } from "./ProductCard";

const meta = {
  title: "Commerce/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Studio Headphones",
    category: "Audio",
    price: "$129",
    imageUrl: "/window.svg",
    rating: 4.8,
    stockStatus: "In stock",
    highlighted: false,
  },
  argTypes: {
    stockStatus: { control: "radio", options: ["In stock", "Low stock", "Sold out"] },
    rating: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    highlighted: true,
  },
};

export const SoldOut: Story = {
  args: {
    stockStatus: "Sold out",
  },
};
