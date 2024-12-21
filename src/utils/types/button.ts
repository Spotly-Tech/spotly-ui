/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonHTMLAttributes } from "react";

import { MotionProps } from "framer-motion";

export type MotionButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonBaseProps extends MotionButtonProps {
    variant?: "ghost" | "solid" | "outlined";
    size?: "small" | "medium" | "large" | "fullwidth";
    color?: "default" | "primary" | "secondary" | "danger";
    shape?: "square" | "circle";
    isLoading?: boolean;
    loadingText?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    animated?: boolean;
    animation?: MotionProps;
}

export interface IButtonDefaultProps extends IButtonBaseProps {
    btnType?: "button";
    icon?: never;
    iconPosition?: never;
}

export interface IIconButtonProps extends IButtonBaseProps {
    btnType: "icon";
    icon: React.ReactNode;
    children?: never;
    iconPosition?: never;
}

export interface IWithIconButtonProps extends IButtonBaseProps {
    btnType: "with-icon";
    icon: React.ReactNode;
    iconPosition: "start" | "end";
    children: React.ReactNode;
}

export type ButtonProps = IButtonDefaultProps | IIconButtonProps | IWithIconButtonProps;
