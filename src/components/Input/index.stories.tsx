import { Input } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FaSearch } from "react-icons/fa";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
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
        fullWidth: {
            control: { type: "boolean" },
            description: "Makes the input field span the full width of its container.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        isWithIcon: {
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
                "Icon to be displayed in the input field. Applicable only if `isWithIcon` is `true`.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "" },
            },
        },
        iconPosition: {
            options: ["start", "end"],
            control: { type: "inline-radio" },
            description:
                "Position of the icon in the input field. Applicable only if `isWithIcon` is `true`.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: (args) => <Input {...args} />,
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

export const Disabled: Story = {
    render: (args) => <Input {...args} />,
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: "Disabled Input.",
            },
        },
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <Input
            isWithIcon
            icon={<FaSearch />}
            iconPosition="start"
            placeholder="Search..."
            inputSize="md"
            color="primary"
            fullWidth
            {...args}
        />
    ),
    args: {
        placeholder: "Search...",
    },
    parameters: {
        docs: {
            description: {
                story: "Input with a search icon.",
            },
        },
    },
};
