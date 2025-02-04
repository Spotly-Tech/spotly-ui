/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentProps } from "react";

import { PolymorphicComponentPropsWithRef } from "./polymorphic";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

/* Box */
export type BoxComponent = <C extends React.ElementType = "div">(
    props: BoxProps<C>
) => React.ReactElement | null;

/* Shared */
type LayoutSharedProps = {
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

/* Stack */
export type StackProps = BoxProps<"div"> &
    LayoutSharedProps & {
        direction?: "row" | "row-reverse" | "column" | "column-reverse";
    };

/* Row */
export type RowProps<C extends React.ElementType = "div"> = BoxProps<C> &
    LayoutSharedProps & {
        wrap?: boolean;
    };

/* Column */
type ColSpan = number | "auto";
type ColBreakpoint = {
    span?: ColSpan;
    offset?: number;
    order?: number;
};
export type ColProps = ComponentProps<"div"> &
    LayoutSharedProps & {
        span?: ColSpan;
        offset?: number;
        order?: number;
        xs?: ColSpan | ColBreakpoint;
        sm?: ColSpan | ColBreakpoint;
        md?: ColSpan | ColBreakpoint;
        lg?: ColSpan | ColBreakpoint;
        xl?: ColSpan | ColBreakpoint;
        xxl?: ColSpan | ColBreakpoint;
    };
