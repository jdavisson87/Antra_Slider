import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyButton from '../MyButton';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MyButton/colors',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args}>SUBMIT</MyButton>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args


export const Primary = Template.bind({});
Primary.args = {
  color:'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  color:'secondary'
};
export const Default = Template.bind({});
Default.args = {
  color:'default'
};