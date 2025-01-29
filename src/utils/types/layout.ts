/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PolymorphicComponentPropsWithRef } from "./polymorphic";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

export type BoxComponent = <C extends React.ElementType = "div">(
    props: BoxProps<C>
) => React.ReactElement | null;

type LayoutSharedProps = {
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export type StackProps = BoxProps<"div"> &
    LayoutSharedProps & {
        direction?: "row" | "row-reverse" | "column" | "column-reverse";
    };

export type RowProps<C extends React.ElementType = "div"> = BoxProps<C> &
    LayoutSharedProps & {
        wrap?: boolean;
    };
