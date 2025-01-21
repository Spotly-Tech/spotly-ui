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
            type = "text",
            disabled = false,
            ...restProps
        },
        ref
    ) => {
        const disabledClass = disabled ? "SpotlyUI-input--disabled" : "";
        const baseClass = `SpotlyUI-input SpotlyUI-input--size-${inputSize} SpotlyUI-input--color-${color} SpotlyUI-input--type-${type}`;

        return (
            <div
                className={`SpotlyUI-input-wrapper ${isWithIcon ? `SpotlyUI-input-wrapper--with-icon SpotlyUI-input-wrapper--icon-${iconPosition}` : ""}`}
            >
                {isWithIcon && icon && iconPosition === "start" && (
                    <span
                        className={`SpotlyUI-input__icon SpotlyUI-input__icon--color-${color}`}
                    >
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    className={`${baseClass} ${disabledClass}`}
                    type={type}
                    disabled={disabled}
                    aria-disabled={disabled}
                    aria-label={restProps.placeholder}
                    aria-required={restProps.required}
                    {...restProps}
                />
                {isWithIcon && icon && iconPosition === "end" && (
                    <span
                        className={`SpotlyUI-input__icon SpotlyUI-input__icon--color-${color}`}
                    >
                        {icon}
                    </span>
                )}
            </div>
        );
    }
);
