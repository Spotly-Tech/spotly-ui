/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from "react";

import { SpotlightCardProps } from "@/utils/types";

import { Card } from "../Card";

import "./SpotlightCard.css";

export const SpotlightCard = ({
    width = "345px",
    height = "345px",
    borderRadius = "1.5rem",
    variant = "solid",
    elevation = 0,
    hoverable = false,
    hoverScale = 1.02,
    hoverDuration = 0.2,
    hoverEase = "easeInOut",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
    children,
    style,
    className = "",
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const baseClass = `SpotlyUI-spotlight-card`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            divRef.current.style.setProperty("--spotlight-x", `${x}px`);
            divRef.current.style.setProperty("--spotlight-y", `${y}px`);
            divRef.current.style.setProperty("--spotlight-color", spotlightColor);
        }
    };

    return (
        <Card
            width={width}
            height={height}
            borderRadius={borderRadius}
            variant={variant}
            elevation={elevation}
            hoverable={hoverable}
            hoverScale={hoverScale}
            hoverDuration={hoverDuration}
            hoverEase={hoverEase}
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`${baseClass} ${className}`}
            style={{ ...style }}
        >
            {children}
        </Card>
    );
};
