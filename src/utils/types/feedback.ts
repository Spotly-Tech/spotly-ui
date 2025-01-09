import React, { ComponentProps } from "react";

export type SpinnerProps = ComponentProps<"div"> & {
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info";
    label?: string | string[] | number;
    variant: "specified" | "unspecified";
    value?: number;
    thickness?: "thin" | "medium" | "thick";
    speed?: "slow" | "medium" | "fast";
};
