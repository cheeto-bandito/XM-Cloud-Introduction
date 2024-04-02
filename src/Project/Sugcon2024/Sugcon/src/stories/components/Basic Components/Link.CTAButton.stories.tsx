import { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from '../../../components/Basic Components/Link';
import { Default as DefaultLink } from './Link.Default.stories';

const meta = {
  title: 'Basic Components/Link',
  component: CTAButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CTAButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CTAButtonStory: Story = {
  name: 'CTA Button',
  args: DefaultLink.args,
};
