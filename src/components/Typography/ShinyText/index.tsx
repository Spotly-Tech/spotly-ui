/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { PolymorphicRef } from "@/utils/types";
import { ShinyTextComponent, ShinyTextProps } from "@/utils/types/typography";

import "@/components/shared/SharedTypography.css";
import "./ShinyText.css";

// @ts-expect-error - unexpected typing errors
export const ShinyText: ShinyTextComponent = forwardRef(
    // @ts-expect-error - unexpected typing errors
    <C extends React.ElementType = "span">(
        {
            as,
            color = "#b5b5b5a4",
            size = "base",
            weight = "normal",
            align = "left",
            italic = false,
            underline = false,
            speed = 5,
            disabled = false,
            children,
            className,
            ...restProps
        }: ShinyTextProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || "span";

        const animationDuration = `${speed}s`;

        const baseClass = `SpotlyUI-shiny-text SpotlyUI-shiny-text--size-${size} SpotlyUI-shiny-text--weight-${weight} SpotlyUI-shiny-text--align-${align}`;
        const italicClass = italic ? "SpotlyUI-shiny-text--italic" : "";
        const underlineClass = underline ? "SpotlyUI-shiny-text--underline" : "";
        const disabledClass = disabled ? "SpotlyUI-shiny-text--disabled" : "";
        return (
            <Component
                className={`${baseClass} ${italicClass} ${underlineClass} ${disabledClass} ${className || ""}`}
                style={{ color, animationDuration }}
                ref={ref}
                {...restProps}
            >
                {children}
            </Component>
        );
    }
);
