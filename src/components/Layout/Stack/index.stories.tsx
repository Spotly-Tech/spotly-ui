import type { Meta, StoryObj } from "@storybook/react";

import { Box, Stack } from "@/components/Layout";

const meta: Meta<typeof Stack> = {
    title: "Layout/Stack",
    component: Stack,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        align: {
            options: ["start", "center", "end", "stretch", "baseline"],
            control: { type: "inline-radio" },
            description: "Defines the alignment of the children inside the stack.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
        direction: {
            options: ["row", "row-reverse", "column", "column-reverse"],
            control: { type: "inline-radio" },
            description: "Defines the direction of the children inside the stack.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "column" },
            },
        },
        justify: {
            options: ["start", "center", "end", "between", "around", "evenly"],
            control: { type: "inline-radio" },
            description: "Defines the justification of the children inside the stack.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
    render: (args) => (
        <div style={{ width: "500px", height: "500px" }}>
            <Stack {...args} style={{ backgroundColor: "lightgray" }}>
                <Box
                    style={{
                        width: "50px",
                        backgroundColor: "red",
                        lineHeight: "60px",
                        textAlign: "center",
                    }}
                >
                    Item 1
                </Box>
                <Box
                    style={{
                        width: "50px",
                        backgroundColor: "green",
                        lineHeight: "70px",
                        textAlign: "center",
                    }}
                >
                    Item 2
                </Box>
                <Box
                    style={{
                        width: "50px",
                        backgroundColor: "blue",
                        lineHeight: "80px",
                        textAlign: "center",
                    }}
                >
                    Item 3
                </Box>
            </Stack>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Default Stack component showcase.",
            },
            source: {
                code: `
<Stack>
	<Box>Item 1</Box>
	<Box>Item 2</Box>
	<Box>Item 3</Box>
</Stack>
				`,
            },
        },
    },
};
