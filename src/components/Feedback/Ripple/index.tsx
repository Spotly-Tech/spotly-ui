/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, MouseEvent, useRef, useState } from "react";

import { RippleProps } from "@/utils/types/feedback";

import "./Ripple.css";

export const Ripple = forwardRef<HTMLDivElement, RippleProps>(
    ({
        color = "rgba(255, 255, 255, 0.5)",
        duration = 600,
        size = "20px",
        scaleTo = 6,
        className = "",
        children,
        ...restProps
    }) => {
        const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
            []
        );
        const containerRef = useRef<HTMLDivElement>(null);

        const baseClass = `SpotlyUI-ripple__container`;

        const handleClick = (e: MouseEvent<HTMLDivElement>) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = Date.now();

            setRipples((prev) => [...prev, { id, x, y }]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
            }, duration);
        };

        return (
            <div
                className={`${baseClass} ${className}`}
                onClick={handleClick}
                ref={containerRef}
                {...restProps}
            >
                {children}
                {ripples.map(({ id, x, y }) => (
                    <span
                        key={id}
                        className="SpotlyUI-ripple"
                        style={
                            {
                                backgroundColor: color,
                                width: size,
                                height: size,
                                top: y,
                                left: x,
                                "--ripple-scale-to": scaleTo,
                            } as React.CSSProperties
                        }
                    />
                ))}
            </div>
        );
    }
);
