/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from "react";

import { PolymorphicRef } from "@/utils/types";
import { BoxComponent, BoxProps } from "@/utils/types/layout";

// @ts-expect-error - unexpected typing errors
export const Box: BoxComponent = forwardRef(
    // @ts-expect-error - unexpected typing errors
    <C extends React.ElementType = "div">(
        { as, children, ...restProps }: BoxProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || "div";

        return (
            <Component ref={ref} {...restProps}>
                {children}
            </Component>
        );
    }
);
