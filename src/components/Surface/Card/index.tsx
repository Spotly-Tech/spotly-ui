/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from "react";

import { motion } from "framer-motion";

import { CardComponent, CardProps } from "@/utils/types/surface";

import "./Card.css";

export const Card: CardComponent = forwardRef(
    (
        {
            width = "345px",
            height = "345px",
            borderRadius = "0.25rem",
            variant = "solid",
            elevation = 0,
            hoverable = false,
            hoverScale = 1.02,
            hoverDuration = 0.2,
            hoverEase = "easeInOut",
            className = "",
            children,
            style,
            ...restProps
        }: CardProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const baseClass = `SpotlyUI-card SpotlyUI-card--variant-${variant} SpotlyUI-card--elevation-${elevation}`;
        return (
            <motion.div
                className={`${baseClass} ${className}`}
                ref={ref}
                whileHover={hoverable ? { scale: hoverScale } : {}}
                transition={{ duration: hoverDuration, ease: hoverEase }}
                style={{ width, height, borderRadius, ...style }}
                {...restProps}
            >
                {children}
            </motion.div>
        );
    }
);
