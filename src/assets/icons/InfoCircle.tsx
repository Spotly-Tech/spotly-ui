import React from "react";

import { IconsSharedProps } from "@/utils/types/icon";

export const InfoCircle: React.FC<IconsSharedProps> = ({
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
            <path d="M13 18L11 18L11 9L13 9L13 18Z" fill={fill} />
            <rect
                x="13"
                y="8"
                width="2"
                height="2"
                transform="rotate(-180 13 8)"
                fill={fill}
            />
        </svg>
    );
};
