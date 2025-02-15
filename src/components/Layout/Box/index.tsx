/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from "react";

import { BoxComponent, BoxProps } from "@/utils/types/layout";
import { PolymorphicRef } from "@/utils/types/polymorphic";

// @ts-expect-error - unexpected typing errors
export const Box: BoxComponent = forwardRef(
    // @ts-expect-error - unexpected typing errors
    <C extends React.ElementType = "div">(
        { as, children, className = "", ...restProps }: BoxProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || "div";

        return (
            <Component ref={ref} className={`${className}`} {...restProps}>
                {children}
            </Component>
        );
    }
);
