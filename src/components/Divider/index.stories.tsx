import { Box, Divider, Stack, Text } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
    title: "Components/Divider",
    component: Divider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "The text to render inside the divider.",
            control: { type: "text" },
            table: {
                type: { summary: "ReactNode | string" },
            },
        },
        flex: {
            control: { type: "boolean" },
            description:
                "Whether the divider should grow to fill the available space, also should be used when inside flex parent component.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        thickness: {
            options: ["thin", "thick"],
            control: { type: "inline-radio" },
            description: "Defines the thickness of the divider.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "thin" },
            },
        },
        textAlign: {
            options: ["left", "center", "right", "top", "middle", "bottom"],
            control: { type: "inline-radio" },
            description: "The alignment of the content inside the divider.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "center" },
            },
        },
        withSteps: {
            control: { type: "boolean" },
            description: "Whether to align the content inside the divider with steps.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        alignSteps: {
            control: { type: "number" },
            description:
                "The number of steps to align the content inside the divider. Steps are in percentage, so alignSteps=25 will align the content 25% from the left and so on.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "1" },
            },
        },
        color: {
            options: ["default", "lowEmphasis"],
            control: { type: "inline-radio" },
            description: "The color of the divider.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" },
            },
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "inline-radio" },
            description: "The orientation of the divider.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "horizontal" },
            },
        },
        variant: {
            options: ["fullWidth", "inset", "middle"],
            control: { type: "inline-radio" },
            description: "The variant of the divider.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "fullWidth" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    render: (args) => (
        <Box style={{ width: "150px", height: "150px" }}>
            <Stack>
                <Text size="base" color="default" weight="semibold">
                    This is text above the divider
                </Text>
                <Divider {...args} />
                <Text size="base" color="default" weight="semibold">
                    This is text below the divider
                </Text>
            </Stack>
        </Box>
    ),
};
export const Vertical: Story = {
    render: (args) => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{ width: "350px", height: "50px", textAlign: "center" }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} orientation="vertical" />
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const Inset: Story = {
    render: (args) => (
        <Stack>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} variant="inset" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const Middle: Story = {
    render: (args) => (
        <Stack style={{ backgroundColor: "#161316" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} variant="middle" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const Thick: Story = {
    render: (args) => (
        <Stack>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} thickness="thick" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const Flex: Story = {
    render: (args) => (
        <Stack>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} flex />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const Left: Story = {
    render: (args) => (
        <Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} orientation="horizontal" textAlign="left">
                <Text>Hello</Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the left alignment of the text in divider.",
            },
            source: {
                code: `
<Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
    <Text size="base" color="default" weight="semibold">
        This is text above the divider
    </Text>
    <Divider {...args} textAlign="left">
        <Text size="lg">Hello</Text>
    </Divider>
    <Text size="base" color="default" weight="semibold">
        This is text below the divider
    </Text>
</Stack>
                `,
            },
        },
    },
};
export const Center: Story = {
    render: (args) => (
        <Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} orientation="horizontal" textAlign="center">
                <Text size="lg">Hello</Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the center alignment of the text in divider.",
            },
            source: {
                code: `
<Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
    <Text size="base" color="default" weight="semibold">
        This is text above the divider
    </Text>
    <Divider {...args} textAlign="center">
        <Text size="lg">Hello</Text>
    </Divider>
    <Text size="base" color="default" weight="semibold">
        This is text below the divider
    </Text>
</Stack>
                `,
            },
        },
    },
};
export const Right: Story = {
    render: (args) => (
        <Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} orientation="horizontal" textAlign="right">
                <Text>Hello</Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the right alignment of the text in divider.",
            },
            source: {
                code: `
<Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
    <Text size="base" color="default" weight="semibold">
        This is text above the divider
    </Text>
    <Divider {...args} textAlign="right">
        <Text size="lg">Hello</Text>
    </Divider>
    <Text size="base" color="default" weight="semibold">
        This is text below the divider
    </Text>
</Stack>
                `,
            },
        },
    },
};
export const TopVertical: Story = {
    render: (args) => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{ width: "350px", height: "50px", textAlign: "center" }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} orientation="vertical" textAlign="top">
                <Text size="xs" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const MiddleVertical: Story = {
    render: (args) => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{ width: "350px", height: "50px", textAlign: "center" }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} orientation="vertical" textAlign="middle">
                <Text size="xs" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};

export const BottomVertical: Story = {
    render: (args) => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "50px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} orientation="vertical" textAlign="bottom">
                <Text size="xs" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const HorizontalAlignSteps: Story = {
    render: (args) => (
        <Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} alignSteps={25}>
                <Text>Hello</Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the center alignment of the divider.",
            },
            source: {
                code: `
<Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
    <Text size="base" color="default" weight="semibold">
        This is text above the divider
    </Text>
    <Divider {...args} alignSteps={21.5}>
        <Text>Hello</Text>
    </Divider>
    <Text size="base" color="default" weight="semibold">
        This is text below the divider
    </Text>
</Stack>
                `,
            },
        },
    },
};
export const VerticalAlignSteps: Story = {
    render: (args) => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "50px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} withSteps orientation="vertical" alignSteps={50}>
                <Text size="xs" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};