import { CheckCircle, ErrorCircle, InfoCircle, WarningCircle } from "@/assets/icons";

import { AlertProps } from "@/utils/types";

export const getDefaultIcon = ({
    color,
    variant,
}: Pick<AlertProps, "color" | "variant">) => {
    switch (color) {
        case "success":
            return <CheckCircle stroke={variant === "solid" ? "#2D3B08" : "#c3e956"} />;
        case "danger":
            return (
                <ErrorCircle
                    stroke={variant === "solid" ? "#850200" : "#ff302c"}
                    fill={variant === "solid" ? "#850200" : "#ff302c"}
                />
            );
        case "info":
            return (
                <InfoCircle
                    stroke={variant === "solid" ? "#1a449d" : "#7c9fe9"}
                    fill={variant === "solid" ? "#1a449d" : "#7c9fe9"}
                />
            );
        case "warning":
        default:
            return (
                <WarningCircle
                    stroke={variant === "solid" ? "#614700" : "#ffd255"}
                    fill={variant === "solid" ? "#614700" : "#ffd255"}
                />
            );
    }
};

export const getActionColor = ({color, variant}: Pick<AlertProps, "color" | "variant">) => {
    switch (color) {
        case "success":
            return variant === "solid" ? "dark" : "success";
        case "danger":
            return variant === "solid" ? "dark" : "danger";
        case "info":
            return variant === "solid" ? "dark" : "info";
        case "warning":
        default:
            return variant === "solid" ? "dark" : "warning";
    }
};
