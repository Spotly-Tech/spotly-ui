/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from "@storybook/react";

import { Box, Row, Stack } from "@/components/Layout";

const meta: Meta<typeof Row> = {
    title: "Layout/Row",
    component: Row,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "The children to render inside the row.",
            table: {
                type: { summary: "ReactNode" },
            },
        },
        as: {
            control: { type: "text" },
            description: "The element type to render as.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "div" },
            },
        },
        align: {
            options: ["start", "center", "end", "stretch", "baseline"],
            control: { type: "inline-radio" },
            description: "Defines the alignment of the children inside the row.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
        justify: {
            options: ["start", "center", "end", "between", "around", "evenly"],
            control: { type: "inline-radio" },
            description: "Defines the justification of the children inside the row.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
        spacing: {
            options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            control: { type: "inline-radio" },
            description: "Defines the spacing between the children inside the row.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "none" },
            },
        },
        wrap: {
            control: { type: "boolean" },
            description: "Defines if the children inside the row should wrap.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Default: Story = {
    render: () => (
        <Row>
            <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
            <div style={{ width: "100px", height: "100px", backgroundColor: "blue" }} />
            <div style={{ width: "100px", height: "100px", backgroundColor: "green" }} />
        </Row>
    ),
};
export const Alignments: Story = {
    render: (args) => (
        <Stack style={{ width: "900px", height: "300px", backgroundColor: "#DADEF5" }}>
            <Row style={{ height: "100%" }} {...args}>
                <Box style={{ width: "100px", height: "80px", backgroundColor: "red" }} />
                <Box
                    style={{ width: "100px", height: "120px", backgroundColor: "blue" }}
                />
                <Box
                    style={{ width: "100px", height: "100px", backgroundColor: "green" }}
                />
            </Row>
        </Stack>
    ),
};
