/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from "react";

import { motion } from "motion/react";

import { FlipTextProps } from "@/utils/types/text";

import "@/components/shared/SharedText.css";
import "./FlipText.css";

export const FlipText = forwardRef<HTMLParagraphElement, FlipTextProps>(
    (
        {
            children,
            color = "default",
            size = "base",
            weight = "normal",
            duration = 0.25,
            delay = 0.25,
            ...restProps
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-flip-text__letter SpotlyUI-flip-text--color-${color} SpotlyUI-flip-text--size-${size} SpotlyUI-flip-text--weight-${weight}`;
        const letters = children.split("");
        return (
            <motion.p
                initial="initial"
                whileHover="hovered"
                ref={ref}
                {...restProps}
                className="SpotlyUI-flip-text"
            >
                <div>
                    {letters.map((letter, index) => {
                        return (
                            <motion.span
                                variants={{
                                    initial: { y: 0 },
                                    hovered: { y: "-100%" },
                                }}
                                transition={{
                                    duration: duration,
                                    ease: "easeInOut",
                                    delay: delay * index,
                                }}
                                key={index}
                                className={baseClass}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        );
                    })}
                </div>
                <div className="SpotlyUI-flip-text__appearing-letters">
                    {letters.map((letter, index) => {
                        return (
                            <motion.span
                                key={index}
                                variants={{
                                    initial: { y: "100%" },
                                    hovered: { y: 0 },
                                }}
                                transition={{
                                    duration: duration,
                                    ease: "easeInOut",
                                    delay: delay * index,
                                }}
                                className={baseClass}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        );
                    })}
                </div>
            </motion.p>
        );
    }
);
