/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CSSProperties } from "react";

import { PolymorphicComponentPropsWithRef } from "./polymorphic";

/* ======== SHARED TEXT PROPS ======== */
export type SharedTypographyProps = {
    color?:
        | "default"
        | "default-gradient"
        | "dark"
        | "primary"
        | "secondary"
        | "danger"
        | "warning"
        | "info"
        | "success";
    size?: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    weight?: "thin" | "normal" | "medium" | "semibold" | "bold" | "black";
    lineHeight?: number;
    className?: string;
    style?: CSSProperties;
};

/* ======== TEXT PROPS ======== */
export type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
    C,
    SharedTypographyProps & {
        emphasis?: "low";
        align?: "left" | "center" | "right";
        italic?: boolean;
        underline?: boolean;
    }
>;
export type TextComponent = <C extends React.ElementType = "span">(
    props: TextProps<C>
) => React.ReactElement | null;

/* ======== FLIP TEXT PROPS ======== */
export type FlipTextProps = SharedTypographyProps & {
    color?: Exclude<SharedTypographyProps["color"], "default-gradient">;
    children: string;
    duration?: number;
    delay?: number;
};

/* ======== SHINY TEXT PROPS ======== */
export type ShinyTextProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<
        C,
        Omit<SharedTypographyProps, "color"> & {
            color?: string;
            align?: "left" | "center" | "right";
            italic?: boolean;
            underline?: boolean;
            speed?: number;
            disabled?: boolean;
        }
    >;

export type ShinyTextComponent = <C extends React.ElementType = "span">(
    props: ShinyTextProps<C>
) => React.ReactElement | null;
