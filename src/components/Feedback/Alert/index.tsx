/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { Button, Col, Row, Text } from "@/components";

import { getActionColor, getDefaultIcon } from "@/utils/helpers/Alert";
import { AlertProps } from "@/utils/types";

import "./Alert.css";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            children,
            color = "warning",
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
        const defaultIcon = getDefaultIcon({ color, variant });
        const alertIcon = icon || defaultIcon;

        return (
            <Row
                ref={ref}
                role="alert"
                align="center"
                className={`${baseClass}`}
                spacing="sm"
                {...restProps}
            >
                <Col span={2}>
                    {alertIcon && (
                        <span className="SpotlyUI-alert__icon">{alertIcon}</span>
                    )}
                </Col>
                <Col span={action ? 18 : 22}>
                    <Text as="span" weight="medium" className="SpotlyUI-alert__text">
                        {children}
                    </Text>
                </Col>
                {action && (
                    <Col span={4}>
                        <Button
                            variant="ghost"
                            size="small"
                            className="SpotlyUI-alert__action"
                            onClick={onClose}
                        >
                            <Text
                                color={getActionColor({ color, variant })}
                                weight="medium"
                            >
                                {action}
                            </Text>
                        </Button>
                    </Col>
                )}
            </Row>
        );
    }
);
