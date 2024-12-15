export type PolymorphicComponentProps<
	C extends React.ElementType,
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type AsProp<C extends React.ElementType> = {
	as?: C;
};
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)
