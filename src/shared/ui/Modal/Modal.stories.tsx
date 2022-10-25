import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem hic consectetur pariatur',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem hic consectetur pariatur',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
