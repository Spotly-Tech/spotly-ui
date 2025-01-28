import React from "react";

import { IconsSharedProps } from "@/utils/types/icon";

export const WarningCircle: React.FC<IconsSharedProps> = ({
    stroke = "none",
    fill = "black",
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 9L13 9L13 16H11L11 9Z" fill={fill} />
            <path d="M11 17H13V19H11V17Z" fill={fill} />
            <path d="M3 21L12 4L21 21H3Z" stroke={stroke} strokeWidth="2" />
        </svg>
    );
};
