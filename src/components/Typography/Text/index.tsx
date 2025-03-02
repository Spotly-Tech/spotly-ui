/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from "react";

import { PolymorphicRef } from "@/utils/types/polymorphic";
import { TextComponent, TextProps } from "@/utils/types/typography";

import "@/components/shared/SharedTypography.css";
import "./Text.css";

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
    // @ts-expect-error - unexpected typing errors
    <C extends React.ElementType = "span">(
        {
            as,
            color = "default",
            emphasis,
            size = "base",
            weight = "normal",
            align = "left",
            italic = false,
            underline = false,
            lineHeight = 1,
            children,
            className = "",
            style,
            ...restProps
        }: TextProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || "span";

        const baseClass = `SpotlyUI-text SpotlyUI-text--color-${color} SpotlyUI-text--size-${size} SpotlyUI-text--weight-${weight} SpotlyUI-text--align-${align} `;
        const emphasisClass = emphasis === "low" ? `SpotlyUI-text--emphasis-low` : "";
        const italicClass = italic ? "SpotlyUI-text--italic" : "";
        const underlineClass = underline ? "SpotlyUI-text--underline" : "";

        return (
            <Component
                ref={ref}
                className={`${baseClass} ${italicClass} ${underlineClass} ${emphasisClass} ${className}`}
                style={{ lineHeight, ...style }}
                {...restProps}
            >
                {children}
            </Component>
        );
    }
);
