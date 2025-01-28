import React from "react";

import { IconsSharedProps } from "@/utils/types/icon";

export const ErrorCircle: React.FC<IconsSharedProps> = ({
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
            <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" />
            <path d="M11 6H13V15H11L11 6Z" fill={fill} />
            <rect x="11" y="16" width="2" height="2" fill={fill} />
        </svg>
    );
};
