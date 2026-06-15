import { ProductCard } from './ProductCard';

const meta = {
  title: 'Commerce/Product Card',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Weekend Trail Backpack',
    category: 'Outdoor gear',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: 4.8,
    stockStatus: 'In stock',
    featured: false,
  },
  argTypes: {
    stockStatus: {
      control: 'radio',
      options: ['In stock', 'Low stock', 'Sold out'],
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
    onAddToCart: { action: 'add to cart' },
  },
};

export default meta;

export const Default = {};

export const Featured = {
  args: {
    featured: true,
  },
};

export const LowStock = {
  args: {
    stockStatus: 'Low stock',
  },
};

export const SoldOut = {
  args: {
    stockStatus: 'Sold out',
  },
};
