/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./index";

const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        as: {
            control: { type: "text" },
            description:
                "Specifies the HTML tag or React component to use for rendering.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "span" },
            },
        },
        color: {
            options: [
                "default",
                "default-gradient",
                "primary",
                "secondary",
                "danger",
                "warning",
                "info",
                "success",
            ],
            control: { type: "inline-radio" },
            description: "Defines the text color.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" },
            },
        },
        size: {
            options: ["2xs", "xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
            control: { type: "inline-radio" },
            description: "Specifies the size of the text.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "base" },
            },
        },
        weight: {
            options: ["thin", "normal", "medium", "semibold", "bold", "black"],
            control: { type: "inline-radio" },
            description: "Defines the font weight.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "normal" },
            },
        },
        align: {
            options: ["left", "center", "right"],
            control: { type: "inline-radio" },
            description: "Sets the text alignment.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "left" },
            },
        },
        italic: {
            control: { type: "boolean" },
            description: "Applies italic styling to the text.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        underline: {
            control: { type: "boolean" },
            description: "Adds an underline to the text.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        emphasis: {
            options: ["default", "high", "medium", "low", "low-bold"],
            control: { type: "inline-radio" },
            description: "Defines the emphasis level for the text.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "default" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

// Stories for each argument
export const Default: Story = {
    render: () => <Text>Hello</Text>,
    args: {
        placeholder: "Enter text",
    },
    parameters: {
        docs: {
            description: {
                story: "Default Input.",
            },
        },
    },
};
export const As: Story = {
    render: () => (
        <Text as="label">
            This is rendered as an {"<"}label{">"} tag
        </Text>
    ),
    parameters: {
        docs: {
            description: {
                story: "Specifies the HTML tag or React component to use for rendering. Default is `span`.",
            },
        },
    },
};

export const Colors: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}
        >
            <Text color="default">Default Color</Text>
            <Text color="default-gradient">Default Gradient</Text>
            <Text color="primary">Primary Color</Text>
            <Text color="secondary">Secondary Color</Text>
            <Text color="danger">Danger Color</Text>
            <Text color="warning">Warning Color</Text>
            <Text color="info">Info Color</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstrates different text colors: default, default-gradient, primary, secondary, danger, warning, and info.",
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Text size="2xs">2XS Text</Text>
            <Text size="xs">XS Text</Text>
            <Text size="sm">Small Text</Text>
            <Text size="base">Base Text</Text>
            <Text size="lg">Large Text</Text>
            <Text size="xl">Extra Large Text</Text>
            <Text size="2xl">2XL Text</Text>
            <Text size="3xl">3XL Text</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstrates different text sizes: 2xs, xs, sm, base, lg, xl, 2xl, and 3xl.",
            },
        },
    },
};

export const Weights: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Text weight="thin">Thin Weight</Text>
            <Text weight="normal">Normal Weight</Text>
            <Text weight="medium">Medium Weight</Text>
            <Text weight="semibold">Semibold Weight</Text>
            <Text weight="bold">Bold Weight</Text>
            <Text weight="black">Black Weight</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstrates different font weights: thin, normal, medium, semibold, bold, and black.",
            },
        },
    },
};
export const Alignments: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
            }}
        >
            <div style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
                <Text align="left">Left-aligned Text</Text>
            </div>
            <div
                style={{
                    border: "1px dashed gray",
                    padding: "0.5rem",
                    width: "300px",
                    textAlign: "center",
                }}
            >
                <Text align="center">Center-aligned Text</Text>
            </div>
            <div
                style={{
                    border: "1px dashed gray",
                    padding: "0.5rem",
                    width: "300px",
                    textAlign: "right",
                }}
            >
                <Text align="right">Right-aligned Text</Text>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstrates different text alignments: left, center, and right. Each alignment is showcased in a box for clarity.",
            },
        },
    },
};

export const Italic: Story = {
    render: () => <Text italic>This text is italicized.</Text>,
    parameters: {
        docs: {
            description: {
                story: "Applies italic styling to the text.",
            },
        },
    },
};

export const Underline: Story = {
    render: () => <Text underline>This text has an underline.</Text>,
    parameters: {
        docs: {
            description: {
                story: "Adds an underline to the text.",
            },
        },
    },
};

export const Emphasis: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Text emphasis="default">Default Emphasis</Text>
            <Text emphasis="low">Low Emphasis</Text>
            <Text emphasis="low-bold">Low Bold Emphasis</Text>
            <Text emphasis="medium">Medium Emphasis</Text>
            <Text emphasis="high">High Emphasis</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstrates emphasis levels: default, low, low-bold, medium, and high.",
            },
        },
    },
};
