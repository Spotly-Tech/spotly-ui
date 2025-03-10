/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentProps, ForwardRefExoticComponent, RefAttributes } from "react";

import { MotionProps } from "motion/react";

import { PolymorphicComponentPropsWithRef } from "./polymorphic";

/*======== SHARED SURFACE PROPS ========*/
export type SharedSurfaceProps = ComponentProps<"div"> & {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
    children?: React.ReactNode;
    elevation?: 0 | 1 | 2 | 3 | 4 | 5;
    variant?: "solid" | "solid-outlined";
};

/*======== CARD ========*/
export type CardProps = SharedSurfaceProps &
    MotionProps & {
        hoverScale?: number;
        hoverDuration?: number;
        hoverEase?:
            | "anticipate"
            | "backInOut"
            | "backIn"
            | "backOut"
            | "circInOut"
            | "circIn"
            | "circOut"
            | "easeInOut"
            | "easeIn"
            | "easeOut"
            | "linear";
        hoverable?: boolean;
    };
export type CardComponent = ForwardRefExoticComponent<
    CardProps & RefAttributes<HTMLDivElement>
>;

/*======== CARD CONTENT ========*/
export type CardContentProps = {
    className?: string;
    children?: React.ReactNode;
};
export type CardContentComponent = ForwardRefExoticComponent<
    CardContentProps & RefAttributes<HTMLDivElement>
>;

/*======== CARD HEADER ========*/
export type CardHeaderProps = {
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
};
export type CardHeaderComponent = ForwardRefExoticComponent<
    CardHeaderProps & RefAttributes<HTMLDivElement>
>;

/*======== CARD MEDIA ========*/
export type CardMediaProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<
        C,
        {
            image?: string;
            className?: string;
            style?: React.CSSProperties;
        }
    >;
export type CardMediaComponent = <C extends React.ElementType = "div">(
    props: CardMediaProps<C>
) => React.ReactElement | null;

/*======== CARD ACTION ========*/
export type CardActionProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};
export type CardActionComponent = ForwardRefExoticComponent<
    CardActionProps & RefAttributes<HTMLDivElement>
>;

/*======== SPOTLIGHT CARD ========*/
export type SpotlightCardProps = SharedSurfaceProps &
    CardProps & {
        spotlightColor?: string;
        spotlightRadius?: number;
        spotlightOpacity?: number;
        style?: React.CSSProperties;
    };
export type SpotlightCardComponent = ForwardRefExoticComponent<
    SpotlightCardProps & RefAttributes<HTMLDivElement>
>;
