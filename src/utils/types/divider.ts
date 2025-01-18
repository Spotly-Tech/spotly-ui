/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { PolymorphicComponentProps } from "./polymorphic";

// Base props
type DividerBaseProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    {
        children?: React.ReactNode | string;
        flex?: boolean;
        thickness?: "thin" | "thick";
        withSteps?: boolean;
        variant?: "fullWidth" | "inset" | "middle";
    }
>;

type DividerVerticalProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    { orientation: "vertical"; textAlign: "top" | "middle" | "bottom" }
>;
type DividerHorizontalProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    { orientation: "horizontal"; textAlign: "left" | "center" | "right" }
>;

// `Steps` related props
type DividerWithoutStepsProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    { withSteps: false; alignSteps?: never }
>;
type DividerWithStepsProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    { withSteps: true; alignSteps: number }
>;
type DividerStepsProps<C extends React.ElementType> =
    | DividerWithStepsProps<C>
    | DividerWithoutStepsProps<C>;

// Combine all `steps` props
export type DividerProps<C extends React.ElementType> =
    | DividerBaseProps<C>
    | DividerStepsProps<C>
    | DividerVerticalProps<C>
    | DividerHorizontalProps<C>;

export type DividerComponent = <C extends React.ElementType = "div">(
    props: DividerProps<C>
) => React.ReactElement | null;
