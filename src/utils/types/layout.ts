/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentProps } from "react";

import {
    PolymorphicComponentProps,
    PolymorphicComponentPropsWithRef,
} from "./polymorphic";

/* ======== SHARED PROPS ======== */
type LayoutSharedProps = {
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

/* ======== BOX PROPS ======== */
export type BoxProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C> & {
        className?: string;
    };
/* ======== BOX COMPONENT ======== */
export type BoxComponent = <C extends React.ElementType = "div">(
    props: BoxProps<C>
) => React.ReactElement | null;

/* ======== STACK PROPS ======== */
export type StackProps = BoxProps<"div"> &
    LayoutSharedProps & {
        direction?: "row" | "row-reverse" | "column" | "column-reverse";
    };

/* ======== ROW PROPS ======== */
export type RowProps<C extends React.ElementType = "div"> = BoxProps<C> &
    LayoutSharedProps & {
        wrap?: boolean;
    };

/* ======== COL PROPS ======== */
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

/* ======== DIVIDER PROPS ======== */
type DividerBaseProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    {
        children?: React.ReactNode;
        flex?: boolean;
        thickness?: "thin" | "thick";
        withSteps?: boolean;
        variant?: "full" | "inset" | "middle";
        orientation?: "horizontal" | "vertical";
        textAlign?: "start" | "center" | "end";
        m?: string;
        className?: string;
    }
>;
/* ======== DIVIDER STEP PROPS ======== */
type DividerWithoutStepsProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    DividerBaseProps<C> & { withSteps: false; alignSteps?: never }
>;
type DividerWithStepsProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    DividerBaseProps<C> & { withSteps: true; alignSteps: number }
>;
type DividerStepsProps<C extends React.ElementType> =
    | DividerWithStepsProps<C>
    | DividerWithoutStepsProps<C>;
/* ======== DIVIDER COMBINED PROPS ======== */
export type DividerProps<C extends React.ElementType> =
    | DividerBaseProps<C>
    | DividerStepsProps<C>;
/* ======== DIVIDER COMPONENT ======== */
export type DividerComponent = <C extends React.ElementType = "div">(
    props: DividerProps<C>
) => React.ReactElement | null;
