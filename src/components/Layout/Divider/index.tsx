/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { DividerComponent, DividerProps } from "@/utils/types";

import "./Divider.css";

export const Divider: DividerComponent = <C extends React.ElementType = "div">({
    as,
    children,
    flex = false,
    textAlign,
    alignSteps = 1,
    withSteps = false,
    thickness = "thin",
    orientation = "horizontal",
    variant = "full",
    m = "0.75rem",
    ...restProps
}: DividerProps<C>) => {
    const Component = as || "div";

    const marginStyle =
        orientation === "horizontal" ? { margin: `${m} 0` } : { margin: `0 ${m}` };
    const alignStepsStyle = {
        horizontal: {
            top: "50%",
            left: `${alignSteps}%`,
            transform: `translate(-${alignSteps}%, -50%)`,
        },
        vertical: {
            top: `${alignSteps}%`,
            left: "50%",
            transform: `translate(-50%, -${alignSteps}%)`,
        },
    };

    return (
        <Component
            className={`SpotlyUI-divider SpotlyUI-divider--thickness-${thickness} SpotlyUI-divider--orientation-${orientation} SpotlyUI-divider--variant-${variant} SpotlyUI-divider--textAlign-${textAlign} ${flex ? "SpotlyUI-divider--flex" : ""}`}
            role="separator"
            aria-orientation={orientation}
            style={marginStyle}
            {...restProps}
        >
            {children && (
                <span
                    className="SpotlyUI-divider-content"
                    style={withSteps ? alignStepsStyle[orientation] : undefined}
                >
                    {children}
                </span>
            )}
        </Component>
    );
};
