import { SpinnerProps } from "@/utils/types/feedback";
import { motion } from "motion/react";

import "./Spinner.css";

import { sizes, speeds, thicknesses } from "@/utils/constants/spinner";

import { spinner } from "./anim";

export const Spinner = ({
    // children,
    size = "md",
    color = "default",
    // label,
    variant = "unspecified",
    value = 0,
    thickness = "medium",
    speed = "medium",
    ...props
}: SpinnerProps) => {
    const baseClass = `SpotlyUI-spinner SpotlyUI-spinner--size-${size} SpotlyUI-spinner--color-${color} SpotlyUI-spinner--thickness-${thickness}`;
    const diameter = sizes[size];
    const spinSpeed = speeds[speed];
    const strokeWidth = thicknesses[thickness];
    return (
        <div className="SpotlyUI-spinner__wrapper" {...props}>
            {variant === "specified" ? (
                <motion.svg
                    variants={spinner(spinSpeed, value)}
                    animate="specified"
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
                        strokeDashoffset={((100 - value) / 100) * diameter * Math.PI}
                    />
                </motion.svg>
            ) : (
                <motion.svg
                    variants={spinner(spinSpeed, value)}
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
};
