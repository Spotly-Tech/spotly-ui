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
        children?: React.ReactNode;
        flex?: boolean;
        thickness?: "thin" | "thick";
        withSteps?: boolean;
        variant?: "full" | "inset" | "middle";
        orientation?: "horizontal" | "vertical";
        textAlign?: "start" | "center" | "end";
        m?: string;
    }
>;

// `steps` related props
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

// Combine all props
export type DividerProps<C extends React.ElementType> =
    | DividerBaseProps<C>
    | DividerStepsProps<C>;

// Component
export type DividerComponent = <C extends React.ElementType = "div">(
    props: DividerProps<C>
) => React.ReactElement | null;
