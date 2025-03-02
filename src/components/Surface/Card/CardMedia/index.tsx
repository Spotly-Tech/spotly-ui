/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { PolymorphicRef } from "@/utils/types/polymorphic";
import { CardMediaComponent, CardMediaProps } from "@/utils/types/surface";

import "./CardMedia.css";

// @ts-expect-error - unexpected typing errors
export const CardMedia: CardMediaComponent = forwardRef(
    // @ts-expect-error - unexpected typing errors
    <C extends React.ElementType = "div">(
        { as, image, children, className = "", style, ...restProps }: CardMediaProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || "div";

        const baseClass = "SpotlyUI-card-media";

        return (
            <Component
                className={`${baseClass} ${className}`}
                ref={ref}
                style={{
                    backgroundImage: image ? `url(${image})` : "",
                    ...style,
                }}
                {...restProps}
            >
                {children}
            </Component>
        );
    }
);
