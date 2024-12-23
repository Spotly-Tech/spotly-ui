/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { InputProps } from "@/utils/types/input";

import "./Input.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            isWithIcon = false,
            icon,
            iconPosition = "start",
            inputSize = "md",
            color = "default",
            fullWidth = false,
            type = "text",
            disabled = false,
            ...restProps
        },
        ref
    ) => {
        const disabledClass = disabled ? "SpotlyUI-input--disabled" : "";
        const fullWidthClass = fullWidth ? "SpotlyUI-input--full-width" : "";
        const baseClass = `SpotlyUI-input SpotlyUI-input--size-${inputSize} SpotlyUI-input--color-${color} SpotlyUI-input--type-${type}`;

        return (
            <div
                className={`SpotlyUI-input-wrapper ${isWithIcon ? `SpotlyUI-input-wrapper--with-icon SpotlyUI-input-wrapper--icon-${iconPosition}` : ""}`}
            >
                {isWithIcon && icon && iconPosition === "start" && (
                    <span className={`SpotlyUI-input__icon SpotlyUI-input__icon--color-${color}`}>
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    className={`${baseClass} ${fullWidthClass} ${disabledClass}`}
                    type={type}
                    {...restProps}
                />
                {isWithIcon && icon && iconPosition === "end" && (
                    <span  className={`SpotlyUI-input__icon SpotlyUI-input__icon--color-${color}`}>
                        {icon}
                    </span>
                )}
            </div>
        );
    }
);
