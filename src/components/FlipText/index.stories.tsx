import { FlipTextProps } from "@/utils/types/text";
import { Meta, StoryFn } from "@storybook/react";

import { FlipText } from "./index";

export default {
    title: "Components/FlipText",
    component: FlipText,
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["default",  "primary", "secondary", "danger"],
        },
        size: {
            control: { type: "select" },
            options: ["2xs", "xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
        },
        weight: {
            control: { type: "select" },
            options: ["thin", "normal", "medium", "semibold", "bold", "black"],
        },
        duration: {
            control: { type: "number" },
        },
        delay: {
            control: { type: "number" },
        },
        isLooped: {
            control: { type: "boolean" },
        },
    },
} as Meta<FlipTextProps>;

const Template: StoryFn<FlipTextProps> = (args) => <FlipText {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Hover me!",
    color: "default",
    size: "base",
    weight: "normal",
    duration: 0.25,
    delay: 0.25,
    isLooped: false,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
    children: "Spotly UI",
    color: "primary",
    size: "lg",
    weight: "bold",
    duration: 0.4,
    delay: 0.1,
};

export const DangerColorLooped = Template.bind({});
DangerColorLooped.args = {
    children: "Error!",
    color: "danger",
    size: "xl",
    weight: "black",
    duration: 0.3,
    delay: 0.15,
    isLooped: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    children: "Small Text",
    color: "secondary",
    size: "sm",
    weight: "medium",
    duration: 0.2,
    delay: 0.05,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    children: "BIG TEXT",
    color: "primary",
    size: "3xl",
    weight: "bold",
    duration: 0.5,
    delay: 0.2,
};

export const FastAnimation = Template.bind({});
FastAnimation.args = {
    children: "Speedy!",
    color: "default",
    size: "base",
    weight: "normal",
    duration: 0.1,
    delay: 0.05,
};

export const CustomText = Template.bind({});
CustomText.args = {
    children: "Customize me",
    color: "default",
    size: "lg",
    weight: "semibold",
    duration: 0.3,
    delay: 0.2,
};
