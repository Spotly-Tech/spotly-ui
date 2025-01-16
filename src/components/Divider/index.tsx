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
    variant = "fullWidth",
    ...restProps
}: DividerProps<C>) => {
    const Component = as || "div";
    const alignStepsStyle = {
        top: "50%",
        left: `${alignSteps}%`,
        transform: `translate(-${alignSteps}%, -50%)`,
    };
    return (
        <Component
            className={`SpotlyUI-divider SpotlyUI-divider--thickness-${thickness} SpotlyUI-divider--orientation-${orientation} SpotlyUI-divider--variant-${variant} SpotlyUI-divider--textAlign-${textAlign} ${flex ? "SpotlyUI-divider--flex" : ""}`}
            role={orientation === "vertical" ? "separator" : undefined}
            aria-orientation={orientation}
            {...restProps}
        >
            {children && (
                <span
                    className="SpotlyUI-divider-content"
                    style={withSteps ? alignStepsStyle : undefined}
                >
                    {children}
                </span>
            )}
        </Component>
    );
};
