/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PolymorphicComponentPropsWithRef } from "./polymorphic";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

export type BoxComponent = <C extends React.ElementType = "div">(
    props: BoxProps<C>
) => React.ReactElement | null;

