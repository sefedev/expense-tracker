import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    description:
      'This is a basic button component used in the expense tracker app',
    buttonType: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  description: 'This is the base button style used for adding and editing.',
  buttonType: 'primary',
  children: 'Primary button',
};

export const Cancel = Template.bind({});
Cancel.args = {
  primary: true,
  label: 'Button',
  description: 'This is used for cancelling out of an action.',
  buttonType: 'cancel',
  children: 'Cancel',
};

export const Delete = Template.bind({});
Delete.args = {
  primary: true,
  label: 'Button',
  description: 'This is used to delete a transaction and confirm deletion.',
  buttonType: 'delete',
  children: 'Delete',
};
