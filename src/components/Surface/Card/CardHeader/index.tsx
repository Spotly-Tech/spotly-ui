/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from "react";

import { CardHeaderComponent, CardHeaderProps } from "@/utils/types/surface";

import "./CardHeader.css";

export const CardHeader: CardHeaderComponent = forwardRef(
    (
        { avatar, title, subtitle, action, className = "" }: CardHeaderProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const baseClass = `SpotlyUI-card-header`;
        return (
            <header ref={ref} className={`${baseClass} ${className}`}>
                {avatar && <div className="SpotlyUI-card-header__avatar">{avatar}</div>}
                <div className="SpotlyUI-card-header__content">
                    {title ? (
                        <div className="SpotlyUI-card-header__title">{title}</div>
                    ) : null}
                    {subtitle ? (
                        <div className="SpotlyUI-card-header__subtitle">{subtitle}</div>
                    ) : null}
                </div>
                {action ? (
                    <div className="SpotlyUI-card-header__action">{action}</div>
                ) : null}
            </header>
        );
    }
);
