/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { CheckCircle } from "@/assets/icons/CheckCircle";
import { ErrorCircle } from "@/assets/icons/ErrorCircle";
import { InfoCircle } from "@/assets/icons/InfoCircle";
import { WarningCircle } from "@/assets/icons/WarningCircle";
import { Button, Stack, Text } from "@/components";

import { AlertProps } from "@/utils/types";

import "./Alert.css";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            children,
            color = "success",
            variant = "solid",
            action,
            icon,
            fullWidth,
            rounded,
            className,
            onClose,
            ...restProps
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-alert SpotlyUI-alert--color-${color} SpotlyUI-alert--variant-${variant} ${fullWidth ? "SpotlyUI-alert--full-width" : ""} ${rounded ? "SpotlyUI-alert--rounded" : ""} ${className}`;
        const defaultIcon = (() => {
            switch (color) {
                case "success":
                    return (
                        <CheckCircle
                            stroke={variant === "solid" ? "#2D3B08" : "#c3e956"}
                        />
                    );
                case "danger":
                    return (
                        <ErrorCircle
                            stroke={variant === "solid" ? "#850200" : "#ff302c"}
                            fill={variant === "solid" ? "#850200" : "#ff302c"}
                        />
                    );
                case "info":
                    return (
                        <InfoCircle
                            stroke={variant === "solid" ? "#1a449d" : "#7c9fe9"}
                            fill={variant === "solid" ? "#1a449d" : "#7c9fe9"}
                        />
                    );
                case "warning":
                default:
                    return (
                        <WarningCircle
                            stroke={variant === "solid" ? "#614700" : "#ffd255"}
                            fill={variant === "solid" ? "#614700" : "#ffd255"}
                        />
                    );
            }
        })();
        const alertIcon = icon || defaultIcon;

        return (
            <Stack
                ref={ref}
                role="alert"
                direction="row"
                justify="between"
                align="center"
                spacing="xs"
                className={`${baseClass}`}
                {...restProps}
            >
                {alertIcon && <span className="SpotlyUI-alert__icon">{alertIcon}</span>}
                <Text as="span" weight="medium" className="SpotlyUI-alert__text">
                    {children}
                </Text>
                {action && (
                    <Button
                        variant="ghost"
                        size="small"
                        className="SpotlyUI-alert__action"
                        onClick={onClose}
                    >
                        <Text color="dark" weight="medium">
                            {action}
                        </Text>
                    </Button>
                )}
            </Stack>
        );
    }
);
