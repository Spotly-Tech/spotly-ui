/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from "@storybook/react";

import { Col, Row, Stack } from "@/components/Layout";
import { Text } from "@/components/Typography/Text";

const meta: Meta<typeof Col> = {
    title: "Layout/Col",
    component: Col,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "The children to render inside the Col.",
            table: {
                type: { summary: "ReactNode" },
            },
        },
        span: {
            control: { type: "number" },
            description: "The number of Cols the Col should span.",
            table: {
                type: { summary: "number | auto" },
                defaultValue: { summary: "24" },
            },
        },
        offset: {
            control: { type: "number" },
            description: "The number of Cols the Col should be offset by.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0" },
            },
        },
        order: {
            control: { type: "number" },
            description: "The order of the Col.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0" },
            },
        },
        align: {
            options: ["start", "center", "end", "stretch", "baseline"],
            control: { type: "inline-radio" },
            description:
                "Defines the alignment of the children inside the column (Col) component.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
        justify: {
            options: ["start", "center", "end", "between", "around", "evenly"],
            control: { type: "inline-radio" },
            description:
                "Defines the justification of the children inside the column (Col) component.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "start" },
            },
        },
        spacing: {
            options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            control: { type: "inline-radio" },
            description:
                "Defines the spacing between the children inside the column (Col) component.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "none" },
            },
        },
        xs: {
            control: { type: "number" },
            description: "The number of Cols the Col should span on extra small screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
        sm: {
            control: { type: "number" },
            description: "The number of Cols the Col should span on small screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
        md: {
            control: { type: "number" },
            description: "The number of Cols the Col should span on medium screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
        lg: {
            control: { type: "number" },
            description: "The number of Cols the Col should span on large screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
        xl: {
            control: { type: "number" },
            description: "The number of Cols the Col should span on extra large screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
        xxl: {
            control: { type: "number" },
            description:
                "The number of Cols the Col should span on extra extra large screens.",
            table: {
                type: { summary: "number | object" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Col>;

export const Default: Story = {
    render: () => (
        <Stack spacing="xs" style={{ width: "968px", backgroundColor: "#DADEF5" }}>
            <Row>
                <Col span={24} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=24</Text>
                </Col>
            </Row>
            <Row spacing="xs">
                <Col span={12} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=12</Text>
                </Col>
                <Col span={12} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=12</Text>
                </Col>
            </Row>
            <Row spacing="xs">
                <Col span={8} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=8</Text>
                </Col>
                <Col span={8} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=8</Text>
                </Col>
                <Col span={8} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=8</Text>
                </Col>
            </Row>
            <Row spacing="xs">
                <Col span={6} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=6</Text>
                </Col>
                <Col span={6} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=6</Text>
                </Col>
                <Col span={6} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text align="center">span=6</Text>
                </Col>
                <Col span={6} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=6</Text>
                </Col>
            </Row>
        </Stack>
    ),
};

export const Offset: Story = {
    render: () => (
        <Stack spacing="xs" style={{ width: "967px", backgroundColor: "#DADEF5" }}>
            <Row spacing="xs">
                <Col span={8} justify="center" style={{ backgroundColor: "#1553AA" }}>
                    <Text>span=8</Text>
                </Col>
                <Col
                    span={8}
                    offset={8}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>span=8 offset=8</Text>
                </Col>
            </Row>
            <Row spacing="xs">
                <Col
                    span={6}
                    offset={6}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>span=6 offset=6</Text>
                </Col>
                <Col
                    span={6}
                    offset={6}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>span=6</Text>
                </Col>
            </Row>
            <Row spacing="xs">
                <Col
                    span={12}
                    offset={6}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>span=12 offset=6</Text>
                </Col>
            </Row>
        </Stack>
    ),
};

export const Order: Story = {
    render: () => (
        <Stack spacing="xs" style={{ width: "967px", backgroundColor: "#DADEF5" }}>
            <Row spacing="xs">
                <Col
                    span={8}
                    order={3}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>1st in row order=3</Text>
                </Col>
                <Col
                    span={8}
                    order={2}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>2nd in row order=2</Text>
                </Col>
                <Col
                    span={8}
                    order={1}
                    justify="center"
                    style={{ backgroundColor: "#1553AA" }}
                >
                    <Text>3rd in row order=1</Text>
                </Col>
            </Row>
        </Stack>
    ),
};
export const Responsive: Story = {
    render: () => (
        <Stack spacing="xs">
            <Row spacing="xs">
                <Col
                    span={12}
                    xs={{ span: 24 }}
                    sm={{ span: 18 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                    justify="center"
                >
                    <Text>Responsive Col</Text>
                </Col>
            </Row>
        </Stack>
    ),
};
export const ResponsivePropObject: StoryObj<typeof Col> = {
    render: () => (
        <Stack>
            <Row>
                <Col
                    span={12}
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 18, order: 3 }}
                    md={{ span: 23, order: 2 }}
                    lg={{ span: 8, order: 9 }}
                    xl={{ span: 6, order: 12 }}
                    xxl={{ span: 4, order: 15 }}
                    justify="center"
                >
                    <Text>Responsive Col 1</Text>
                </Col>
                <Col
                    span={12}
                    xs={{ span: 24, order: 2 }}
                    sm={{ span: 18, order: 2 }}
                    md={{ span: 1, order: 1 }}
                    lg={{ span: 8, order: 8 }}
                    xl={{ span: 6, order: 11 }}
                    xxl={{ span: 4, order: 14 }}
                    justify="center"
                >
                    <Text>Responsive Col 2</Text>
                </Col>
            </Row>
        </Stack>
    ),
};
