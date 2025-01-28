/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box } from "@/components";

import { StackProps } from "@/utils/types/layout";

import "./Stack.css";

export const Stack = ({
    align = "start",
    direction = "column",
    justify = "start",
    spacing = "none",
    className,
    ...props
}: StackProps) => {
    const baseClass = `SpotlyUI-stack SpotlyUI-stack--align-${align} SpotlyUI-stack--direction-${direction} SpotlyUI-stack--justify-${justify} SpotlyUI-stack--spacing-${spacing} ${className || ""}`;
    return <Box className={baseClass} {...props} />;
};
