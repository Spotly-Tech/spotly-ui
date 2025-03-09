/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextInput } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FaSearch } from "react-icons/fa";

const meta: Meta<typeof TextInput> = {
    title: "Data Entry/TextInput",
    component: TextInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: { type: "text" },
            description: "Placeholder text for the input field.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        disabled: {
            control: { type: "boolean" },
            description: "Disables the input field.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        inputSize: {
            options: ["sm", "md", "lg"],
            control: { type: "inline-radio" },
            description: "Sets the size of the input field.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "md" },
            },
        },
        color: {
            options: ["default", "primary", "secondary", "danger", "success"],
            control: { type: "inline-radio" },
            description: "Sets the color of the input field.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" },
            },
        },
        withIcon: {
            control: { type: "boolean" },
            description:
                "Adds an icon to the input field. If `true`, `icon` and `iconPosition` props are required.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        icon: {
            control: { type: "text" },
            description:
                "Icon to be displayed in the input field. Applicable only if `withIcon` is `true`.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "" },
            },
        },
        iconPosition: {
            options: ["start", "end"],
            control: { type: "inline-radio" },
            description:
                "Position of the icon in the input field. Applicable only if `withIcon` is `true`.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    render: (args) => <TextInput {...args} />,
    args: {
        placeholder: "Enter text",
    },
    parameters: {
        docs: {
            description: {
                story: "Default TextInput.",
            },
        },
    },
};

export const Disabled: Story = {
    render: (args) => <TextInput {...args} />,
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: "Disabled TextInput.",
            },
        },
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <TextInput
            withIcon
            icon={<FaSearch />}
            iconPosition="start"
            placeholder="Search..."
            inputSize="md"
            color="primary"
            {...args}
        />
    ),
    args: {
        placeholder: "Search...",
    },
    parameters: {
        docs: {
            description: {
                story: "TextInput with a search icon.",
            },
        },
    },
};
