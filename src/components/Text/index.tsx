/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { PolymorphicComponentProps } from "@/utils/types";
import { TextProps } from "@/utils/types/text";

// If as prop isn't passed to Text component by default it would be rendered as <span>
export const Text = <C extends React.ElementType = "span">({
    as,
    color = "default",
    emphasis = "default",
    size = "base",
    weight = "normal",
    align = "left",
    italic = false,
    underline = false,
    children,
    ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
    const Component = as || "span";

    const baseClass = `SpotlyUI-text SpotlyUI-text--color-${color} SpotlyUI-text--size-${size} SpotlyUI-text--weight-${weight} SpotlyUI-text--align-${align} SpotlyUI-text--emphasis-${emphasis}`;
    const italicClass = italic ? "SpotlyUI-text--italic" : "";
    const underlineClass = underline ? "SpotlyUI-text--underline" : "";

    return (
        <Component
            className={`${baseClass} ${italicClass} ${underlineClass}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};
