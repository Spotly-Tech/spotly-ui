/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColProps } from "@/utils/types";

export const getClassNames = ({
    span,
    offset,
    order,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    align,
    justify,
    spacing,
}: ColProps): string => {
    const classes = ["SpotlyUI-col"];

    if (span) classes.push(`SpotlyUI-col--span-${span}`);
    if (offset) classes.push(`SpotlyUI-col--offset-${offset}`);
    if (order) classes.push(`SpotlyUI-col--order-${order}`);

    // Responsive breakpoints
    const breakpoints = { xs, sm, md, lg, xl, xxl };
    Object.entries(breakpoints).forEach(([bp, value]) => {
        if (typeof value === "number" || value === "auto") {
            classes.push(`SpotlyUI-col--${bp}-${value}`);
        } else if (typeof value === "object" && value !== null) {
            if (value.span) classes.push(`SpotlyUI-col--${bp}-span-${value.span}`);
            if (value.offset) classes.push(`SpotlyUI-col--${bp}-offset-${value.offset}`);
            if (value.order) classes.push(`SpotlyUI-col--${bp}-order-${value.order}`);
        }
    });

    if (align) classes.push(`SpotlyUI-col--align-${align}`);
    if (justify) classes.push(`SpotlyUI-col--justify-${justify}`);
    if (spacing) classes.push(`SpotlyUI-col--spacing-${spacing}`);

    return classes.join(" ");
};
