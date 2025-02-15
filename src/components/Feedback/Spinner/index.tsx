/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { motion } from "motion/react";

import { SpinnerProps } from "@/utils/types/feedback";

import "./Spinner.css";

import { forwardRef } from "react";

import { spinner } from "@/utils/animations/feedback/spinner";
import { sizes, speeds, thicknesses } from "@/utils/constants/spinner";

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
    (
        {
            size = "md",
            color = "default",
            withLabel = false,
            variant = "unspecified",
            value = 0,
            thickness = "medium",
            speed = "medium",
            className = "",
            ...restProps
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-spinner SpotlyUI-spinner--size-${size} SpotlyUI-spinner--color-${color} SpotlyUI-spinner--thickness-${thickness}`;

        const diameter = sizes[size];
        const spinSpeed = speeds[speed];
        const strokeWidth = thicknesses[thickness];

        return (
            <div
                ref={ref}
                className="SpotlyUI-spinner__wrapper"
                {...restProps}
                role="img"
                aria-label={variant === "specified" ? `${value}%` : "Loading"}
                aria-live="polite"
            >
                {variant === "specified" ? (
                    <motion.svg
                        variants={spinner(spinSpeed)}
                        animate="specified"
                        width={diameter}
                        height={diameter}
                        viewBox={`0 0 ${diameter} ${diameter}`}
                        className={`${baseClass} ${className}`}
                    >
                        <circle
                            className="SpotlyUI-spinner__circle"
                            cx={`${diameter / 2}`}
                            cy={`${diameter / 2}`}
                            r={`${(diameter - strokeWidth) / 2}`}
                            fill="none"
                            strokeWidth={strokeWidth}
                            strokeDasharray={diameter * Math.PI}
                            strokeDashoffset={((100 - value) / 100) * diameter * Math.PI}
                            transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
                        />
                        {withLabel && (
                            <text
                                x={diameter / 2}
                                y={diameter / 2}
                                textAnchor="middle"
                                dy="0.35em"
                                className="SpotlyUI-spinner__label"
                            >
                                {value}%
                            </text>
                        )}
                    </motion.svg>
                ) : (
                    <motion.svg
                        variants={spinner(spinSpeed)}
                        animate="unspecified"
                        width={diameter}
                        height={diameter}
                        viewBox={`0 0 ${diameter} ${diameter}`}
                        className={baseClass}
                    >
                        <circle
                            className="SpotlyUI-spinner__circle"
                            cx={`${diameter / 2}`}
                            cy={`${diameter / 2}`}
                            r={`${(diameter - strokeWidth) / 2}`}
                            fill="none"
                            strokeWidth={strokeWidth}
                            strokeDasharray={diameter * Math.PI}
                            strokeDashoffset={diameter * Math.PI * 0.25}
                        />
                    </motion.svg>
                )}
            </div>
        );
    }
);
