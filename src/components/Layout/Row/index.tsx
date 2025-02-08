/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { RowProps } from "@/utils/types/layout";

import "@/components/shared/SharedLayout.css";
import "./Row.css";

export const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        {
            as,
            children,
            align = "start",
            justify = "start",
            spacing = "none",
            wrap,
            className,
            ...restProps
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-row SpotlyUI-row--align-${align} SpotlyUI-row--justify-${justify} SpotlyUI-row--spacing-${spacing} ${wrap ? "SpotlyUI-row--wrap" : "SpotlyUI-row--nowrap"} ${className || ""}`;
        const Component = as || "div";
        return (
            <Component ref={ref} className={baseClass} {...restProps}>
                {children}
            </Component>
        );
    }
);
