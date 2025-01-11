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

export type StackProps = BoxProps<"div"> & {
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
};
