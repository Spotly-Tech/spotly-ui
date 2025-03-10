/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { InputProps } from "@/utils/types/input";

import "./TextInput.css";

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            withIcon = false,
            icon,
            iconPosition = "start",
            inputSize = "md",
            color = "default",
            disabled = false,
            className = "",
            ...restProps
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-input SpotlyUI-input--size-${inputSize} SpotlyUI-input--color-${color}`;
        const disabledClass = disabled ? "SpotlyUI-input--disabled" : "";

        return (
            <div
                className={`SpotlyUI-input-wrapper ${withIcon ? `SpotlyUI-input-wrapper--with-icon SpotlyUI-input-wrapper--icon-${iconPosition}` : ""} `}
            >
                {withIcon && icon && iconPosition === "start" && (
                    <span
                        className={`SpotlyUI-input__icon SpotlyUI-input__icon--color-${color}`}
                    >
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    className={`${baseClass} ${disabledClass} ${className}`}
                    type="text"
                    disabled={disabled}
                    aria-disabled={disabled}
                    aria-label={restProps.placeholder}
                    aria-required={restProps.required}
                    {...restProps}
                />
                {withIcon && icon && iconPosition === "end" && (
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
