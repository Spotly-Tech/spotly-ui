import React from "react";

import { IconsSharedProps } from "@/utils/types/icon";

export const CheckCircle: React.FC<IconsSharedProps> = ({ stroke = "none" }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="24" fill="none" />
            <path d="M6 13L10 17L18 8" stroke={stroke} strokeWidth="2" />
            <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" />
        </svg>
    );
};
