/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,

    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["ghost", "solid", "outlined"],
            control: { type: "inline-radio" },
            description:
                "Specifies the button's visual style: `ghost` for text-only buttons, `filled` for solid buttons, `outlined` for bordered buttons.",
        },
        size: {
            options: ["small", "medium", "large", "fullwidth"],
            control: { type: "inline-radio" },
            description:
                "Defines the button's size. `fullwidth` makes the button span the full width of its container.	",
        },
        color: {
            options: ["default", "primary", "secondary", "danger"],
            control: { type: "inline-radio" },
            description: "Specifies the color scheme for the button.",
        },
        btnType: {
            options: ["button", "icon", "with-icon"],
            control: { type: "inline-radio" },
            description:
                "Specifies the button type: `button` for standard buttons, `icon` for icon-only buttons, `with-icon` for buttons with text and an icon.",
        },
        shape: {
            options: ["square", "circle"],
            control: { type: "inline-radio" },
            description:
                "Sets the button's shape. `circle` is only applicable when btnType is `icon`.",
        },
        iconPosition: {
            options: ["start", "end"],
            control: { type: "inline-radio" },
            description:
                "Determines the position of the icon relative to the text. Only applies if btnType is `with-icon`.",
        },
        isLoading: {
            control: { type: "boolean" },
            description:
                "Indicates if the button is in a loading state. Displays `loadingText` instead of `children` when `true`",
        },
        loadingText: {
            control: { type: "text" },
            description:
                "Text to display when the button is in a loading state.",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Disables the button when set to `true`.",
        },
        children: {
            control: { type: "text" },
            description:
                "Defines the button's content. Used for all button types except when btnType is set to `icon`.",
            table: {
                type: { summary: "ReactNode" },
            },
        },
        icon: {
            control: { type: "object" },
            description:
                "Defines the icon to display. Applicable only when btnType is `icon` or `with-icon`.",
        },
        animated: {
            options: [true, false],
            control: { type: "inline-radio" },
            description:
                "Enables or disables animation on the button. When set to `true`, default hover and tap animations are applied.",
        },
        animation: {
            control: { type: "object" },
            description:
                "Custom animation configuration using Framer Motion props. Overrides the default animations if `animated` is set to `true`.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Group by Variants
export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all button variants: solid, ghost, and outlined.",
            },

            source: {
                code: `
<div>
    <Button variant="solid">Solid</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="outlined">Outlined</Button>
</div>
                `,
            },
        },
    },
};

// Group by Sizes
export const Sizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "10px",
                alignItems: "baseline",
                width: "100%",
            }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button size="fullwidth">Full Width</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all button sizes: small, medium, large, and full width.",
            },
            source: {
                code: `
<div>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
</div>
                `,
            },
        },
    },
};
export const Colors: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="danger">Danger</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases all available button colors: default, primary, secondary, and danger.",
            },
            source: {
                code: `
<div>
    <Button color="default">Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="danger">Danger</Button>
</div>
                `.trim(),
            },
        },
    },
};

// Group by Animations
export const Animations: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button animated>Default Animation</Button>
            <Button
                animated
                animation={{
                    whileHover: { scale: 1.1, rotate: 5 },
                    whileTap: { scale: 0.95, rotate: -5 },
                }}>
                Custom Animation
            </Button>
            <Button animated={false}>No Animation</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Compares default animations, custom animations, and no animations.",
            },
            source: {
                code: `
<div>
    <Button animated>Default Animation</Button>
    <Button
        animated
        animation={{
            whileHover: { scale: 1.1, rotate: 5 },
            whileTap: { scale: 0.95, rotate: -5 },
        }}>
        Custom Animation
    </Button>
    <Button animated={false}>No Animation</Button>
</div>
                `,
            },
        },
    },
};

// Group by States
export const States: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button>Normal</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases different button states: normal, loading, disabled.",
            },
            source: {
                code: `
<div>
    <Button>Normal</Button>
    <Button isLoading>Loading</Button>
    <Button disabled>Disabled</Button>
</div>
                `,
            },
        },
    },
};


