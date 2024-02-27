import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   render: (...args) => (
//     <Button kind="danger" {...args}>
//       Button
//     </Button>
//   ),
// };

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'button',
  },
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
  },
};
