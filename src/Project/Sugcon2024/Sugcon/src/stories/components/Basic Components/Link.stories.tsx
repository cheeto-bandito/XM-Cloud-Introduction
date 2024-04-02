import { Meta, StoryObj } from '@storybook/react';
import { Default as LinkComponent } from '../../../components/Basic Components/Link';
const meta = {
  title: 'Basic Components/Link',
  component: LinkComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LinkComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default',
  args: {
    params: {
      styles: '',
    },
    fields: {
      Link: {
        value: {
          text: 'Register',
          linktype: 'external',
          style: '',
          href: 'https://www.sugcon.events',
          title: 'Book Your Ticket',
          target: '_blank'
        },
      },
    },
  },
};
