/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";
import { Box, Stack } from "@/components/Layout";
import { ShinyText } from "@/components/Typography/ShinyText";

const meta: Meta = {
    title: "Typography/ShinyText",
    component: ShinyText,
    parameters: {
        layout: "centered",
        controls: {
            exclude: ["as"],
        },
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
            control: { type: "color" },
            description: "Sets the text base color.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "#b5b5b5a4" },
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
        speed: {
            control: { type: "number" },
            description: "Defines the animation speed in seconds.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "5" },
            },
        },
        disabled: {
            control: { type: "boolean" },
            description: "Disables the shiny animation.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ShinyText>;

export const Default: Story = {
    render: () => <ShinyText>Hello, Shiny World!</ShinyText>,
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with default settings.",
            },
            source: {
                code: `
<ShinyText>Hello, Shiny World!</ShinyText>
                `,
            },
        },
    },
};

export const Italic: Story = {
    render: () => <ShinyText italic>Hello, Italic Shiny World!</ShinyText>,
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with italic styling.",
            },
            source: {
                code: `
<ShinyText italic>Hello, Italic Shiny World!</ShinyText>
                `,
            },
        },
    },
};

export const Underline: Story = {
    render: () => <ShinyText underline>Hello, Underlined Shiny World!</ShinyText>,
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with an underline.",
            },
            source: {
                code: `
<ShinyText underline>Hello, Underlined Shiny World!</ShinyText>
                `,
            },
        },
    },
};

export const Disabled: Story = {
    render: () => <ShinyText disabled>Hello, No Shine Here!</ShinyText>,
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with the shiny animation disabled.",
            },
            source: {
                code: `
<ShinyText disabled>Hello, No Shine Here!</ShinyText>
                `,
            },
        },
    },
};

export const DifferentSpeeds: Story = {
    render: () => (
        <Stack>
            <ShinyText speed={2}>Fast Shine</ShinyText>
            <ShinyText speed={5}>Normal Shine</ShinyText>
            <ShinyText speed={10}>Slow Shine</ShinyText>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with different animation speeds.",
            },
            source: {
                code: `
<ShinyText speed={2}>Fast Shine</ShinyText>
<ShinyText speed={5}>Normal Shine</ShinyText>
<ShinyText speed={10}>Slow Shine</ShinyText>
                `,
            },
        },
    },
};

export const Alignments: Story = {
    render: () => (
        <Stack spacing="md" style={{ width: "100%" }}>
            <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
                <ShinyText align="left">Left Aligned</ShinyText>
            </Box>
            <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
                <ShinyText align="center">Center Aligned</ShinyText>
            </Box>
            <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
                <ShinyText align="right">Right Aligned</ShinyText>
            </Box>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with different text alignments.",
            },
            source: {
                code: `
<Stack spacing="md" style={{ width: "100%" }}>
    <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
        <ShinyText align="left">Left Aligned</ShinyText>
    </Box>
    <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
        <ShinyText align="center">Center Aligned</ShinyText>
    </Box>
    <Box style={{ border: "1px dashed gray", padding: "0.5rem", width: "300px" }}>
        <ShinyText align="right">Right Aligned</ShinyText>
    </Box>
</Stack>
                `,
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing="md">
            <ShinyText size="2xs">2xs</ShinyText>
            <ShinyText size="xs">xs</ShinyText>
            <ShinyText size="sm">sm</ShinyText>
            <ShinyText size="base">base</ShinyText>
            <ShinyText size="lg">lg</ShinyText>
            <ShinyText size="xl">xl</ShinyText>
            <ShinyText size="2xl">2xl</ShinyText>
            <ShinyText size="3xl">3xl</ShinyText>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with different sizes.",
            },
            source: {
                code: `
<ShinyText size="2xs">2xs</ShinyText>
<ShinyText size="xs">xs</ShinyText>
<ShinyText size="sm">sm</ShinyText>
<ShinyText size="base">base</ShinyText>
<ShinyText size="lg">lg</ShinyText>
<ShinyText size="xl">xl</ShinyText>
<ShinyText size="2xl">2xl</ShinyText>
<ShinyText size="3xl">3xl</ShinyText>
                `,
            },
        },
    },
};
export const Weights: Story = {
    render: () => (
        <Stack spacing="md">
            <ShinyText size="lg" weight="thin">
                Thin
            </ShinyText>
            <ShinyText size="lg" weight="normal">
                Normal
            </ShinyText>
            <ShinyText size="lg" weight="medium">
                Medium
            </ShinyText>
            <ShinyText size="lg" weight="semibold">
                Semibold
            </ShinyText>
            <ShinyText size="lg" weight="bold">
                Bold
            </ShinyText>
            <ShinyText size="lg" weight="black">
                Black
            </ShinyText>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the ShinyText component with different font weights.",
            },
            source: {
                code: `
<ShinyText weight="thin">Thin</ShinyText>
<ShinyText weight="normal">Normal</ShinyText>
<ShinyText weight="medium">Medium</ShinyText>
<ShinyText weight="semibold">Semibold</ShinyText>
<ShinyText weight="bold">Bold</ShinyText>
<ShinyText weight="black">Black</ShinyText>
                `,
            },
        },
    },
};
export const ButtonWithShinyText: Story = {
    render: () => (
        <Button variant="outlined" rounded animated>
            <ShinyText size="lg" weight="normal">
                Click Me
            </ShinyText>
        </Button>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays a button with the ShinyText component inside, showing how it can be used in a real-world scenario.",
            },
            source: {
                code: `
<Button variant="outlined" rounded animated>
    <ShinyText size="lg" weight="normal">
        Click Me
    </ShinyText>
</Button>
                `,
            },
        },
    },
};
