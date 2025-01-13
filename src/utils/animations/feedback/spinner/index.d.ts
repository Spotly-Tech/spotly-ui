/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export declare const spinner: (spinSpeed: number) => {
    unspecified: {
        rotate: number[];
        transition: {
            repeat: number;
            duration: number;
            ease: string;
        };
    };
    specified: {
        transition: {
            duration: number;
        };
    };
};
