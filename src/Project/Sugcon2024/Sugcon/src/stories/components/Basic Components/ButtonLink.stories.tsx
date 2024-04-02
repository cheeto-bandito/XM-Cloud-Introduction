import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '../../../components/Basic Components/ButtonLink';
import { Default as DefaultLink } from './Link.stories';

const meta = {
  title: 'Basic Components/Link',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CTAButtonStory: Story = {
  name: 'ButtonLink',
  args: {
    field: DefaultLink.args.fields.Link
  }
};
