/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropsWithRef<
    C extends React.ElementType,
    Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Also can be React component
     */
    as?: C;
};
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicRef<C extends React.ElementType> =
    React.ComponentPropsWithRef<C>["ref"];
