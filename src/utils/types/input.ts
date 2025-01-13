/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
    isWithIcon?: boolean;
    iconPosition?: "start" | "end";
    icon?: React.ReactNode;
    inputSize?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "danger" | "success";
}
