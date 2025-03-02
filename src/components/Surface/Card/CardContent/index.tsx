/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from "react";

import { CardContentComponent, CardContentProps } from "@/utils/types/surface";

import "./CardContent.css";

export const CardContent: CardContentComponent = forwardRef(
    (
        { children, className = "", ...restProps }: CardContentProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const baseClass = `SpotlyUI-card-content`;
        return (
            <section ref={ref} className={`${baseClass} ${className}`} {...restProps}>
                {children}
            </section>
        );
    }
);
