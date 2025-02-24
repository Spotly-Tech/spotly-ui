/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentProps } from "react";

/* Spinner */
type SpinnerBaseProps = ComponentProps<"div"> & {
    size?: "sm" | "md" | "lg";
    color?:
        | "default"
        | "dark"
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info";

    thickness?: "thin" | "medium" | "thick";
    speed?: "slow" | "medium" | "fast";
};

type SpinnerUnspecifiedProps = SpinnerBaseProps & {
    variant: "unspecified";
    withLabel?: never;
    value?: never;
};
type SpinnerSpecifiedProps = SpinnerBaseProps & {
    variant: "specified";
    withLabel?: boolean;
    value: number;
};

export type SpinnerProps = SpinnerUnspecifiedProps | SpinnerSpecifiedProps;

/* Alert */
export type AlertProps = ComponentProps<"div"> & {
    children: React.ReactNode;
    color?: "success" | "danger" | "warning" | "info";
    variant?: "solid" | "outlined";
    action?: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    rounded?: boolean;
    onClose?: () => void;
};

/* ======== RIPPLE ======== */
export type RippleProps = ComponentProps<"div"> & {
    color?: string;
    duration?: number;
    size?: string;
    scaleTo?: number;
    className?: string;
    children: React.ReactNode;
};
