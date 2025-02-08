/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from "react";

import { Alert, Button, Stack } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
    title: "Feedback/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: {
                type: "text",
            },
            description: "The content of the alert.",
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "danger", "warning", "info"],
            },
            description: "The color of the alert.",
        },
        variant: {
            control: {
                type: "select",
                options: ["solid", "outlined"],
            },
            description: "The variant of the alert.",
        },
        action: {
            control: {
                type: "text",
            },
            description: "The action to be displayed in the alert.",
        },
        icon: {
            control: {
                type: "text",
            },
            description: "The icon to be displayed in the alert.",
        },
        onClose: {
            action: "onClose",
            description: "The function to be called when action button is clicked.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: () => (
        <Stack direction="column" spacing="sm">
            <Alert fullWidth rounded color="success">
                This is a success alert.
            </Alert>
            <Alert fullWidth rounded color="danger">
                This is a danger alert.
            </Alert>
            <Alert fullWidth rounded color="warning">
                This is a warning alert.
            </Alert>
            <Alert fullWidth rounded color="info">
                This is an info alert.
            </Alert>
        </Stack>
    ),
};
export const Outlined: Story = {
    render: () => (
        <Stack direction="column" spacing="sm">
            <Alert fullWidth rounded color="success" variant="outlined">
                This is a success alert.
            </Alert>
            <Alert fullWidth rounded color="danger" variant="outlined">
                This is a danger alert.
            </Alert>
            <Alert fullWidth rounded color="warning" variant="outlined">
                This is a warning alert.
            </Alert>
            <Alert fullWidth rounded color="info" variant="outlined">
                This is an info alert.
            </Alert>
        </Stack>
    ),
};

export const WithAction: Story = {
    render: () => {
        const [alerts, setAlerts] = useState({
            success: true,
            danger: true,
            warning: true,
            info: true,
        });

        const handleUndo = (type: keyof typeof alerts) => {
            setAlerts((prev) => ({ ...prev, [type]: false }));
        };

        const showAllAlerts = () => {
            setAlerts({
                success: true,
                danger: true,
                warning: true,
                info: true,
            });
        };

        useEffect(() => {
            const timers = Object.keys(alerts).map((type) =>
                setTimeout(() => {
                    setAlerts((prev) => ({ ...prev, [type]: false }));
                }, 5000)
            );

            return () => {
                timers.forEach(clearTimeout);
            };
        }, []);

        return (
            <div>
                <Stack direction="column" spacing="sm">
                    {alerts.success && (
                        <Alert
                            fullWidth
                            rounded
                            color="success"
                            action="Undo"
                            onClose={() => handleUndo("success")}
                        >
                            This is a success alert.
                        </Alert>
                    )}
                    {alerts.danger && (
                        <Alert
                            fullWidth
                            rounded
                            color="danger"
                            action="Undo"
                            onClose={() => handleUndo("danger")}
                        >
                            This is a danger alert.
                        </Alert>
                    )}
                    {alerts.warning && (
                        <Alert
                            fullWidth
                            rounded
                            color="warning"
                            action="Undo"
                            onClose={() => handleUndo("warning")}
                        >
                            This is a warning alert.
                        </Alert>
                    )}
                    {alerts.info && (
                        <Alert
                            fullWidth
                            rounded
                            color="info"
                            action="Undo"
                            onClose={() => handleUndo("info")}
                        >
                            This is an info alert.
                        </Alert>
                    )}
                    <Button onClick={showAllAlerts}>Show All Alerts</Button>
                </Stack>
            </div>
        );
    },
};
export const OutlinedWithAction: Story = {
    render: () => {
        const [alerts, setAlerts] = useState({
            success: true,
            danger: true,
            warning: true,
            info: true,
        });

        const handleUndo = (type: keyof typeof alerts) => {
            setAlerts((prev) => ({ ...prev, [type]: false }));
        };

        const showAllAlerts = () => {
            setAlerts({
                success: true,
                danger: true,
                warning: true,
                info: true,
            });
        };

        useEffect(() => {
            const timers = Object.keys(alerts).map((type) =>
                setTimeout(() => {
                    setAlerts((prev) => ({ ...prev, [type]: false }));
                }, 5000)
            );

            return () => {
                timers.forEach(clearTimeout);
            };
        }, []);

        return (
            <div>
                <Stack direction="column" spacing="sm">
                    {alerts.success && (
                        <Alert
                            fullWidth
                            rounded
                            color="success"
                            variant="outlined"
                            action="Undo"
                            onClose={() => handleUndo("success")}
                        >
                            This is a success alert.
                        </Alert>
                    )}
                    {alerts.danger && (
                        <Alert
                            fullWidth
                            rounded
                            color="danger"
                            variant="outlined"
                            action="Undo"
                            onClose={() => handleUndo("danger")}
                        >
                            This is a danger alert.
                        </Alert>
                    )}
                    {alerts.warning && (
                        <Alert
                            fullWidth
                            rounded
                            color="warning"
                            variant="outlined"
                            action="Undo"
                            onClose={() => handleUndo("warning")}
                        >
                            This is a warning alert.
                        </Alert>
                    )}
                    {alerts.info && (
                        <Alert
                            fullWidth
                            rounded
                            color="info"
                            variant="outlined"
                            action="Undo"
                            onClose={() => handleUndo("info")}
                        >
                            This is an info alert.
                        </Alert>
                    )}
                    <Button onClick={showAllAlerts}>Show All Alerts</Button>
                </Stack>
            </div>
        );
    },
};
