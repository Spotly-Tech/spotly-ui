/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentProps } from "react";

type SpinnerBaseProps = ComponentProps<"div"> & {
    size?: "sm" | "md" | "lg";
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info";

    thickness?: "thin" | "medium" | "thick";
    speed?: "slow" | "medium" | "fast";
};

type SpinnerUnspecifiedProps = SpinnerBaseProps & {
    variant: "unspecified";
    withLabel?: never;
    value?: never;
};
type SpinnerSpecifiedProps = SpinnerBaseProps & {
    variant: "specified";
    withLabel?: boolean;
    value: number;
};

export type SpinnerProps = SpinnerUnspecifiedProps | SpinnerSpecifiedProps;
