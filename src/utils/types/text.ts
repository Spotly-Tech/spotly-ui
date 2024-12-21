/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PolymorphicComponentPropsWithRef } from "./index";

/* SHARED TEXT PROPS */
export interface SharedTextProps {
    color?:
        | "default"
        | "default-gradient"
        | "primary"
        | "secondary"
        | "danger"
        | "warning"
        | "info";
    size?: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    weight?: "thin" | "normal" | "medium" | "semibold" | "bold" | "black";
}

/* TEXT PROPS */
export type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
    C,
    SharedTextProps & {
        emphasis?: "default" | "high" | "medium" | "low" | "low-bold";
        align?: "left" | "center" | "right";
        italic?: boolean;
        underline?: boolean;
    }
>;
export type TextComponent = <C extends React.ElementType = "span">(
    props: TextProps<C>
) => React.ReactElement | null;

/* FLIP TEXT PROPS */
export interface FlipTextProps extends SharedTextProps {
    children: string;
    duration?: number;
    delay?: number;
    isLooped?: boolean;
}
