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
type ColDefaultValue =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
type ColBreakpoint = {
    span?: ColDefaultValue | "auto";
    offset?: 0 | ColDefaultValue;
    order?: ColDefaultValue;
};
export type ColProps = ComponentProps<"div"> &
    LayoutSharedProps & {
        span?: ColDefaultValue | "auto";
        offset?: 0 | ColDefaultValue;
        order?: ColDefaultValue;
        xs?: ColDefaultValue | "auto" | ColBreakpoint;
        sm?: ColDefaultValue | "auto" | ColBreakpoint;
        md?: ColDefaultValue | "auto" | ColBreakpoint;
        lg?: ColDefaultValue | "auto" | ColBreakpoint;
        xl?: ColDefaultValue | "auto" | ColBreakpoint;
        xxl?: ColDefaultValue | "auto" | ColBreakpoint;
    };
