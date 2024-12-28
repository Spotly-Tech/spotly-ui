/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box } from "@/components";
import { StackProps } from "@/utils/types/layout";

export const Stack = ({ children, ...props }: StackProps) => {
    return <Box {...props}>{children}</Box>;
};
