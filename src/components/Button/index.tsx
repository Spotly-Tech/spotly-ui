import { motion, MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import "./Button.css";

type MotionButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonBaseProps extends MotionButtonProps {
    variant?: "ghost" | "solid" | "outlined";
    size?: "small" | "medium" | "large" | "fullwidth";
    color?: "default" | "primary" | "secondary" | "danger";
    shape?: "square" | "circle";
    isLoading?: boolean;
    loadingText?: string;
    children?: ReactNode;
    disabled?: boolean;
    animated?: boolean;
    animation?: MotionProps;
}

interface IButtonDefaultProps extends IButtonBaseProps {
    btnType?: "button";
    icon?: never;
    iconPosition?: never;
}

interface IIconButtonProps extends IButtonBaseProps {
    btnType: "icon";
    icon: ReactNode;
    children?: never;
    iconPosition?: never;
}

interface IWithIconButtonProps extends IButtonBaseProps {
    btnType: "with-icon";
    icon: ReactNode;
    iconPosition: "start" | "end";
    children: ReactNode;
}

type IButtonProps =
    | IButtonDefaultProps
    | IIconButtonProps
    | IWithIconButtonProps;

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    (
        {
            variant = "solid",
            size = "medium",
            color = "default",
            btnType = "button",
            shape = "square",
            icon,
            iconPosition = "start",
            isLoading = false,
            loadingText = "Loading...",
            children,
            disabled = false,
            animated = false,
            animation,
            ...props
        },
        ref
    ) => {
        const baseClass = `SpotlyUI-btn SpotlyUI-btn--${variant} SpotlyUI-btn--${size} SpotlyUI-btn--${color} SpotlyUI-btn--${shape}`;
        const disabledClass = disabled ? "SpotlyUI-btn--disabled" : "";
        const loadingClass = isLoading ? "SpotlyUI-btn--loading" : "";

        const isIconButton = btnType === "icon";
        const isWithIconButton = btnType === "with-icon";

        const defaultAnimations: MotionProps = {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
        };

        const animationProps = animated
            ? { ...defaultAnimations, ...animation }
            : {};
        return (
            <motion.button
                ref={ref}
                className={`${baseClass} ${disabledClass} ${loadingClass} ${
                    isIconButton ? "SpotlyUI-btn--icon" : ""
                }`}
                disabled={disabled || isLoading}
                {...animationProps}
                {...props}>
                {isLoading ? (
                    loadingText
                ) : (
                    <>
                        {isWithIconButton &&
                            icon &&
                            iconPosition === "start" && (
                                <span className="SpotlyUI-icon SpotlyUI-btn__startIcon">
                                    {icon}
                                </span>
                            )}
                        {!isIconButton && children}
                        {isWithIconButton && icon && iconPosition === "end" && (
                            <span className="SpotlyUI-icon SpotlyUI-btn__endIcon">
                                {icon}
                            </span>
                        )}
                        {isIconButton && icon && (
                            <span className="SpotlyUI-icon">{icon}</span>
                        )}
                    </>
                )}
            </motion.button>
        );
    }
);
