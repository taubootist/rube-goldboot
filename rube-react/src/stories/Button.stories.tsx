import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TauButton } from "./Button";

export default {
  title: "Example/Button",
  component: TauButton,
} as ComponentMeta<typeof TauButton>;

const Template: ComponentStory<typeof TauButton> = (args) => (
  <TauButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Button",
};

export const Success = Template.bind({});
Success.args = {
  variant: "contained",
  color: "success",
  label: "Button",
};

export const Error = Template.bind({});
Error.args = {
  variant: "contained",
  color: "error",
  label: "Button",
};

export const Info = Template.bind({});
Info.args = {
  variant: "contained",
  color: "info",
  label: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "contained",
  color: "warning",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "contained",
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  size: "small",
  label: "Button",
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Button",
};
