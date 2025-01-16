/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { PolymorphicComponentProps } from "./polymorphic";

type DividerBaseProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    {
        children?: React.ReactNode | string;
        flex?: boolean;
        thickness?: "thin" | "thick";
        textAlign?: "left" | "center" | "right";
        withSteps: false;
        orientation?: "horizontal" | "vertical";
        variant?: "fullWidth" | "inset" | "middle";
    }
>;

type DividerWithStepsProps<C extends React.ElementType> = PolymorphicComponentProps<
    C,
    { withSteps: true; alignSteps: number }
>;

export type DividerProps<C extends React.ElementType> =
    | DividerBaseProps<C>
    | DividerWithStepsProps<C>;

export type DividerComponent = <C extends React.ElementType = "div">(
    props: DividerProps<C>
) => React.ReactElement | null;
