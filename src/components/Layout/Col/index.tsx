/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { getClassNames } from "@/utils/helpers/Column/getClassNames";
import { ColProps } from "@/utils/types";

import "./Col.css";

export const Col = forwardRef<HTMLDivElement, ColProps>(
    (
        {
            span = 24,
            offset = 0,
            order = 1,
            align = "start",
            justify = "start",
            spacing = "none",
            xs,
            sm,
            md,
            lg,
            xl,
            xxl,
            className,
            children,
            ...restProps
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={`${getClassNames({ span, offset, order, xs, sm, md, lg, xl, xxl, align, justify, spacing })} ${className || ""}`}
                {...restProps}
            >
                {children}
            </div>
        );
    }
);
