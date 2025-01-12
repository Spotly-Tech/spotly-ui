import React from "react";

import { Box, Spinner, Stack } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

// import React from 'react'

const meta: Meta<typeof Spinner> = {
    title: "Feedback/Spinner",
    component: Spinner,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "inline-radio" },
            description: "Defines the size of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "md" },
            },
        },
        color: {
            options: [
                "default",
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
            ],
            control: { type: "inline-radio" },
            description: "Defines the color of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" },
            },
        },
        variant: {
            options: ["specified", "unspecified"],
            control: { type: "inline-radio" },
            description: "Defines the variant of the spinner to be displayed as.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "unspecified" },
            },
        },
        value: {
            control: { type: "number" },
            description:
                "Defines the value of the spinner when the variant is specified and also shows the value as a label.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0" },
            },
        },
        thickness: {
            options: ["thin", "medium", "thick"],
            control: { type: "inline-radio" },
            description: "Defines the thickness of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "thin" },
            },
        },
        speed: {
            options: ["slow", "medium", "fast"],
            control: { type: "inline-radio" },
            description: "Defines the speed of the spinner.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "medium" },
            },
        },
        withLabel: {
            control: { type: "boolean" },
            description: "Defines if the spinner should have a label.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const UnspecifiedVariant: Story = {
    render: () => <Spinner variant="unspecified" />,
    parameters: {
        docs: {
            description: {
                story: "Displays an unspecified spinner.",
            },
            source: {
                code: `
<Spinner variant="unspecified" />
                `,
            },
        },
    },
};
export const SpecifiedVariant: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress >= 100 ? 0 : prevProgress + 10
                );
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }, []);
        return (
            <div style={{ width: "350px", height: "50px" }}>
                <Stack direction="row" justify="between" align="center">
                    <Spinner variant="specified" value={10} />
                    <Spinner variant="specified" value={30} />
                    <Spinner variant="specified" value={50} />
                    <Spinner variant="specified" value={80} />
                    <Spinner variant="specified" value={100} />
                    <Spinner variant="specified" value={progress} />
                </Stack>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "Displays a specified spinner.",
            },
            source: {
                code: `
import React from "react";

export const SpecifiedVariant = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack direction="row" justify="between" align="center">
            <Spinner variant="specified" value={10} />
            <Spinner variant="specified" value={30} />
            <Spinner variant="specified" value={50} />
            <Spinner variant="specified" value={80} />
            <Spinner variant="specified" value={100} />
            <Spinner variant="specified" value={progress} />
        </Stack>
    );
}
                `,
            },
        },
    },
};
export const SpecifiedWithLabel: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress >= 100 ? 0 : prevProgress + 10
                );
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }, []);
        return (
            <div style={{ width: "350px", height: "50px" }}>
                <Stack direction="row" justify="between" align="center">
                    <Spinner variant="specified" withLabel value={10} />
                    <Spinner variant="specified" withLabel value={30} />
                    <Spinner variant="specified" withLabel value={50} />
                    <Spinner variant="specified" withLabel value={80} />
                    <Spinner variant="specified" withLabel value={100} />
                    <Spinner variant="specified" withLabel value={progress} />
                </Stack>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "Displays a specified spinner.",
            },
            source: {
                code: `
import React from "react";

export const SpecifiedVariant = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack direction="row" justify="between" align="center">
            <Spinner variant="specified" withLabel value={10} />
            <Spinner variant="specified" withLabel value={30} />
            <Spinner variant="specified" withLabel value={50} />
            <Spinner variant="specified" withLabel value={80} />
            <Spinner variant="specified" withLabel value={100} />
            <Spinner variant="specified" withLabel value={progress} />
        </Stack>
    );
}
                `,
            },
        },
    },
};
export const SpinnerSizes: Story = {
    render: () => (
        <Box style={{ width: "200px" }}>
            <Stack direction="row" justify="between" align="center">
                <Spinner variant="unspecified" size="sm" />
                <Spinner variant="unspecified" size="md" />
                <Spinner variant="unspecified" size="lg" />
            </Stack>
        </Box>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the different sizes of the spinner.",
            },
            source: {
                code: `
<Box style={{ width: "200px" }}>
    <Stack direction="row" justify="between" align="center">
        <Spinner variant="unspecified" size="sm" />
        <Spinner variant="unspecified" size="md" />
        <Spinner variant="unspecified" size="lg" />
    </Stack>
</Box>
                `,
            },
        },
    },
};
export const SpinnerColors: Story = {
    render: () => (
        <Box style={{ width: "450px" }}>
            <Stack direction="row" justify="between" align="center">
                <Spinner variant="unspecified" color="default" />
                <Spinner variant="unspecified" color="primary" />
                <Spinner variant="unspecified" color="secondary" />
                <Spinner variant="unspecified" color="success" />
                <Spinner variant="unspecified" color="danger" />
                <Spinner variant="unspecified" color="warning" />
                <Spinner variant="unspecified" color="info" />
            </Stack>
        </Box>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the different colors of the spinner.",
            },
            source: {
                code: `
<Box style={{ width: "450px" }}>
    <Stack direction="row" justify="between" align="center">
        <Spinner variant="unspecified" color="default" />
        <Spinner variant="unspecified" color="primary" />
        <Spinner variant="unspecified" color="secondary" />
        <Spinner variant="unspecified" color="success" />
        <Spinner variant="unspecified" color="danger" />
        <Spinner variant="unspecified" color="warning" />
        <Spinner variant="unspecified" color="info" />
    </Stack>
</Box>
                `,
            },
        },
    },
};
export const SpinnerThickness: Story = {
    render: () => (
        <Box style={{ width: "200px" }}>
            <Stack direction="row" justify="between" align="center">
                <Spinner variant="unspecified" thickness="thin" />
                <Spinner variant="unspecified" thickness="medium" />
                <Spinner variant="unspecified" thickness="thick" />
            </Stack>
        </Box>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the different thicknesses of the spinner.",
            },
            source: {
                code: `
<Box style={{ width: "200px" }}>
    <Stack direction="row" justify="between" align="center">
        <Spinner variant="unspecified" thickness="thin" />
        <Spinner variant="unspecified" thickness="medium" />
        <Spinner variant="unspecified" thickness="thick" />
    </Stack>
</Box>
                `,
            },
        },
    },
};
export const SpinnerSpeed: Story = {
    render: () => (
        <Box style={{ width: "200px" }}>
            <Stack direction="row" justify="between" align="center">
                <Spinner variant="unspecified" speed="slow" />
                <Spinner variant="unspecified" speed="medium" />
                <Spinner variant="unspecified" speed="fast" />
            </Stack>
        </Box>
    ),
    parameters: {
        docs: {
            description: {
                story: "Displays the different speeds of the spinner.",
            },
            source: {
                code: `
<Box style={{ width: "200px" }}>
    <Stack direction="row" justify="between" align="center">
        <Spinner variant="unspecified" speed="slow" />
        <Spinner variant="unspecified" speed="medium" />
        <Spinner variant="unspecified" speed="fast" />
    </Stack>
</Box>
                `,
            },
        },
    },
};
export const InteractiveUnspecifiedPlayground: Story = {
    render: (args) => <Spinner {...args} />,
    parameters: {
        docs: {
            description: {
                story: "Interactive playground for the unspecified spinner.",
            },
        },
    },
};
export const InteractiveSpecifiedPlayground: Story = {
    render: (args) => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress >= 100 ? 0 : prevProgress + 10
                );
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }, []);
        return <Spinner {...args} variant="specified" withLabel value={progress} />;
    },
    parameters: {
        docs: {
            description: {
                story: "Interactive playground for the specified spinner.",
            },
        },
    },
};
