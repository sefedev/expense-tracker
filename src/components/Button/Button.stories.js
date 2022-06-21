import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  buttonType: 'primary',
  children: 'Primary button',
};

export const Cancel = Template.bind({});
Cancel.args = {
  primary: true,
  label: 'Button',
  buttonType: 'cancel',
  children: 'Cancel',
};
