import { Divider, Stack, Text } from "@/components";
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
            table: {
                type: { summary: "ReactNode" },
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
                type: { summary: "thin | thick" },
                defaultValue: { summary: "thin" },
            },
        },
        textAlign: {
            options: ["start", "center", "end"],
            control: { type: "inline-radio" },
            description:
                "Defines the alignment of the text inside the divider. Only works when `children` prop is provided.",
            table: {
                type: { summary: "start | center | end" },
                defaultValue: { summary: "center" },
            },
        },
        withSteps: {
            control: { type: "boolean" },
            description:
                "Whether to align the content inside the divider with steps. For the `vertical` divider, it will align the content with steps from top to bottom. For the `horizontal` divider, it will align the content with steps from left to right. If `true`, `alignSteps` prop should be provided.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        alignSteps: {
            control: { type: "number" },
            description:
                "The number of steps to align the content inside the divider. Steps are in percentage, so `alignSteps={25}` will align the content 25% from the left if the divider is horizontal and 25% from the top if the divider is vertical and so on. Only works when `withSteps` is true.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "1" },
            },
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "inline-radio" },
            description: "Defines the orientation of the divider.",
            table: {
                type: { summary: "horizontal | vertical" },
                defaultValue: { summary: "horizontal" },
            },
        },
        variant: {
            options: ["full", "inset", "middle"],
            control: { type: "inline-radio" },
            description:
                "The variant of the divider. If `full` is selected, the divider will span the full width (if horizontal) or full height (if vertical) of the parent container. If `inset` is selected, the divider will be inset from the left and right edges of the parent container. If `middle` is selected, the divider will be in the middle of the parent container.",
            table: {
                type: { summary: "full | inset | middle" },
                defaultValue: { summary: "full" },
            },
        },
        m: {
            control: { type: "text" },
            description:
                "The margin around the divider. It is a string with a valid CSS unit. For horizontal divider, it will be applied as top and bottom margin and as left and right margin for vertical.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "0.75rem" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => (
        <Stack
            align="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider orientation="horizontal" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the horizontal divider with default props.",
            },
            source: {
                code: `
<Stack
    align="center"
    style={{
        backgroundColor: "#161316",
        width: "350px",
        height: "75px",
        textAlign: "center",
    }}
>
        <Text size="base" color="default" weight="semibold">
            This is text above the divider
        </Text>
        <Divider orientation="horizontal" />
        <Text size="base" color="default" weight="semibold">
            This is text below the divider
        </Text>
</Stack>
                `,
            },
        },
    },
};
export const Vertical: Story = {
    render: () => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider orientation="vertical" />
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: "Showcases the vertical divider with default props.",
            },
            source: {
                code: `
<Stack
    align="center"
    justify="center"
    direction="row"
    style={{
        backgroundColor: "#161316",
        width: "350px",
        height: "75px",
        textAlign: "center",
    }}
>
        <Text size="base" color="default" weight="semibold">
            This is text above the divider
        </Text>
        <Divider orientation="vertical" />
        <Text size="base" color="default" weight="semibold">
            This is text below the divider
        </Text>
</Stack>
                `,
            },
        },
    },
};
export const Inset: Story = {
    render: () => (
        <Stack>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider variant="inset" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const Middle: Story = {
    render: () => (
        <Stack
            align="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider variant="middle" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const HorizontalThick: Story = {
    render: () => (
        <Stack
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider thickness="thick" />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const VerticalThick: Story = {
    render: () => (
        <Stack
            align="center"
            justify="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider thickness="thick" orientation="vertical" />
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const Flex: Story = {
    render: () => (
        <Stack>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider flex />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const HorizontalStart: Story = {
    render: () => (
        <Stack
            justify="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider orientation="horizontal" textAlign="start">
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
    <Divider textAlign="left">
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
export const HorizontalCenter: Story = {
    render: () => (
        <Stack
            justify="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider orientation="horizontal" textAlign="center">
                <Text size="base">Hello</Text>
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
    <Divider textAlign="center">
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
export const HorizontalEnd: Story = {
    render: () => (
        <Stack
            justify="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider orientation="horizontal" textAlign="end">
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
    <Divider textAlign="right">
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
export const VerticalStart: Story = {
    render: () => (
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
            <Divider orientation="vertical" textAlign="start">
                <Text size="base" color="default">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const VerticalCenter: Story = {
    render: () => (
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
            <Divider orientation="vertical" textAlign="center">
                <Text size="base" color="default">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};

export const VerticalEnd: Story = {
    render: () => (
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
            <Divider orientation="vertical" textAlign="end">
                <Text size="base" color="default">
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
    render: () => (
        <Stack justify="center" style={{ backgroundColor: "#161316", width: "950px" }}>
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider orientation="horizontal" withSteps alignSteps={80}>
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
    <Divider alignSteps={21.5}>
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
    render: () => (
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
            <Divider withSteps orientation="vertical" alignSteps={60}>
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
export const InteractiveHorizontal: Story = {
    render: (args) => (
        <Stack
            align="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} />
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const InteractiveVertical: Story = {
    render: (args) => (
        <Stack
            align="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} />
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
export const InteractiveHorizontalWithChildren: Story = {
    render: (args) => (
        <Stack
            align="center"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text above the divider
            </Text>
            <Divider {...args} orientation="horizontal">
                <Text size="base" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text below the divider
            </Text>
        </Stack>
    ),
};
export const InteractiveVerticalWithChildren: Story = {
    render: (args) => (
        <Stack
            align="center"
            direction="row"
            style={{
                backgroundColor: "#161316",
                width: "350px",
                height: "75px",
                textAlign: "center",
            }}
        >
            <Text size="base" color="default" weight="semibold">
                This is text before the divider
            </Text>
            <Divider {...args} orientation="vertical">
                <Text size="base" color="default" weight="semibold">
                    Hello
                </Text>
            </Divider>
            <Text size="base" color="default" weight="semibold">
                This is text after the divider
            </Text>
        </Stack>
    ),
};
