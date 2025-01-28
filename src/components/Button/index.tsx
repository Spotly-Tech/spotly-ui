/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { motion, MotionProps } from "motion/react";

import { ButtonProps } from "@/utils/types/button";

import "./Button.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "solid",
            size = "medium",
            color = "default",
            btnType = "button",
            shape = "square",
            icon,
            iconPosition = "start",
            isLoading = false,
            indicator = "Loading...",
            children,
            disabled = false,
            animated = false,
            animation,
            className,
            ...props
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-btn SpotlyUI-btn--${variant} SpotlyUI-btn--${size} SpotlyUI-btn--${color} SpotlyUI-btn--${shape}`;
        const disabledClass = disabled ? "SpotlyUI-btn--disabled" : "";
        const loadingClass = isLoading ? "SpotlyUI-btn--loading" : "";

        const isIconButton = btnType === "icon";
        const isWithIconButton = btnType === "with-icon";

        const defaultAnimations: MotionProps = {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
        };

        const animationProps = animated ? { ...defaultAnimations, ...animation } : {};
        return (
            <motion.button
                ref={ref}
                className={`${baseClass} ${disabledClass} ${loadingClass} ${
                    isIconButton ? "SpotlyUI-btn--icon" : ""
                } ${className}`}
                disabled={disabled || isLoading}
                aria-disabled={disabled || isLoading}
                aria-busy={isLoading ? "true" : undefined}
                aria-live="polite"
                {...animationProps}
                {...props}
            >
                {isLoading ? (
                    indicator
                ) : (
                    <>
                        {isWithIconButton && icon && iconPosition === "start" && (
                            <span className="SpotlyUI-icon SpotlyUI-btn__startIcon">
                                {icon}
                            </span>
                        )}
                        {!isIconButton && children}
                        {isWithIconButton && icon && iconPosition === "end" && (
                            <span className="SpotlyUI-icon SpotlyUI-btn__endIcon">
                                {icon}
                            </span>
                        )}
                        {isIconButton && icon && (
                            <span className="SpotlyUI-icon">{icon}</span>
                        )}
                    </>
                )}
            </motion.button>
        );
    }
);
