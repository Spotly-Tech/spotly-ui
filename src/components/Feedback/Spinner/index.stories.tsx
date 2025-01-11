import React from "react";

import { Spinner } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

// import React from 'react'

const meta: Meta<typeof Spinner> = {
    title: "Feedback/Spinner",
    component: Spinner,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "inline-radio" },
            description: "Defines the size of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "md" },
            },
        },
        color: {
            options: [
                "default",
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
            ],
            control: { type: "inline-radio" },
            description: "Defines the color of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" },
            },
        },
        variant: {
            options: ["specified", "unspecified"],
            control: { type: "inline-radio" },
            description: "Defines the variant of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "unspecified" },
            },
        },
        value: {
            control: { type: "number" },
            description: "Defines the value of the spinner.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0" },
            },
        },
        thickness: {
            options: ["thin", "medium", "thick"],
            control: { type: "inline-radio" },
            description: "Defines the thickness of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "thin" },
            },
        },
        speed: {
            options: ["slow", "medium", "fast"],
            control: { type: "inline-radio" },
            description: "Defines the speed of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "medium" },
            },
        },
        label: {
            control: { type: "text" },
            description: "Defines the label of the spinner.",
            table: {
                type: { summary: "string | string[] | number" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    render: (args) => <Spinner {...args} />,
    args: {
        size: "md",
        color: "default",
        variant: "unspecified",
        value: 0,
        thickness: "thin",
        speed: "medium",
    },
};
export const SpecifiedExample: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress >= 100 ? 0 : prevProgress + 10
                );
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }, []);

        return <Spinner variant="specified" value={progress} />;
    },
};
