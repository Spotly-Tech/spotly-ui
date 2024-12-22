import React, { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
    isWithIcon?: boolean;
	iconPosition?: "start" | "end";
    icon?: React.ReactNode;
    inputSize?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "danger";
    fullWidth?: boolean;
}
