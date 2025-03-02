/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { CardActionComponent, CardActionProps } from "@/utils/types/surface";

import "./CardAction.css";

export const CardAction: CardActionComponent = forwardRef<
    HTMLDivElement,
    CardActionProps
>(({ children, className, ...restProps }, ref) => {
    const baseClass = `SpotlyUI-card-action`;
    return (
        <div ref={ref} className={`${baseClass} ${className}`} {...restProps}>
            {children}
        </div>
    );
});
