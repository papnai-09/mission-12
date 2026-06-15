import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Add to cart',
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const Primary = {};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
