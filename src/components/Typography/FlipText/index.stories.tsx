/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from "@storybook/react";

import { FlipText } from "./index";

const meta: Meta<typeof FlipText> = {
    title: "Typography/FlipText",
    component: FlipText,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: { type: "text" },
            description:
                "Specifies the text that will be displayed in the FlipText component.",
            table: {
                type: { summary: "string" },
            },
        },
        duration: {
            control: { type: "number" },
            description: "Specifies the duration of the flip animation in seconds.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0.25" },
            },
        },
        delay: {
            control: { type: "number" },
            description:
                "Specifies the delay before the flip animation starts in seconds. Also being used to stagger animations.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0.25" },
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
            description: "Specifies the color scheme for the FlipText component.",
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
    },
};

export default meta;

type Story = StoryObj<typeof FlipText>;

// Default story
export const Default: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <FlipText>Spotly UI</FlipText>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the FlipText component with the default settings.",
            },
            source: {
                code: `
    <FlipText>Spotly UI</FlipText>
                `,
            },
        },
    },
};

// Custom duration and delay
export const CustomDurationAndDelay: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <FlipText duration={0.5}>Custom duration</FlipText>
            <FlipText delay={0.5}>Custom delay</FlipText>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the FlipText component with custom duration and delay settings.",
            },
            source: {
                code: `
<FlipText duration={0.5}>Custom duration</FlipText>
<FlipText delay={0.5}>Custom delay</FlipText>
                `,
            },
        },
    },
};

// Colors
export const Colors: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}
        >
            <FlipText color="default">Default</FlipText>
            <FlipText color="primary">Primary</FlipText>
            <FlipText color="secondary">Secondary</FlipText>
            <FlipText color="danger">Danger</FlipText>
            <FlipText color="warning">Warning</FlipText>
            <FlipText color="info">Info</FlipText>
            <FlipText color="success">Success</FlipText>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all available FlipText colors: default, primary, secondary, danger, warning, info, and success.",
            },
            source: {
                code: `
<FlipText color="default">Default</FlipText>
<FlipText color="primary">Primary</FlipText>
<FlipText color="secondary">Secondary</FlipText>
<FlipText color="danger">Danger</FlipText>
<FlipText color="warning">Warning</FlipText>
<FlipText color="info">Info</FlipText>
<FlipText color="success">Success</FlipText>
            `,
            },
        },
    },
};

// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <FlipText size="2xs">2xs</FlipText>
            <FlipText size="xs">xs</FlipText>
            <FlipText size="sm">sm</FlipText>
            <FlipText size="base">base</FlipText>
            <FlipText size="lg">lg</FlipText>
            <FlipText size="xl">xl</FlipText>
            <FlipText size="2xl">2xl</FlipText>
            <FlipText size="3xl">3xl</FlipText>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all available text sizes: 2xs, xs, sm, base, lg, xl, 2xl, and 3xl.",
            },
            source: {
                code: `
<FlipText size="2xs">2xs</FlipText>
<FlipText size="xs">xs</FlipText>
<FlipText size="sm">sm</FlipText>
<FlipText size="base">base</FlipText>
<FlipText size="lg">lg</FlipText>
<FlipText size="xl">xl</FlipText>
<FlipText size="2xl">2xl</FlipText>
<FlipText size="3xl">3xl</FlipText>
            `,
            },
        },
    },
};

// Weights
export const Weights: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <FlipText weight="thin">Thin</FlipText>
            <FlipText weight="normal">Normal</FlipText>
            <FlipText weight="medium">Medium</FlipText>
            <FlipText weight="semibold">Semibold</FlipText>
            <FlipText weight="bold">Bold</FlipText>
            <FlipText weight="black">Black</FlipText>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all available font weights: thin, normal, medium, semibold, bold, and black.",
            },
            source: {
                code: `
<FlipText weight="thin">Thin</FlipText>
<FlipText weight="normal">Normal</FlipText>
<FlipText weight="medium">Medium</FlipText>
<FlipText weight="semibold">Semibold</FlipText>
<FlipText weight="bold">Bold</FlipText>
<FlipText weight="black">Black</FlipText>
            `,
            },
        },
    },
};
