import { InputField } from './InputField';

const meta = {
  title: 'Design System/Input Field',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Email address',
    placeholder: 'customer@example.com',
    helperText: 'We will use this for order updates.',
    value: '',
    type: 'email',
    disabled: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
    },
  },
};

export default meta;

export const Default = {};

export const WithValue = {
  args: {
    value: 'customer@example.com',
  },
};

export const Error = {
  args: {
    helperText: '',
    error: 'Enter a valid email address.',
  },
};

export const Disabled = {
  args: {
    value: 'archived@example.com',
    disabled: true,
  },
};
