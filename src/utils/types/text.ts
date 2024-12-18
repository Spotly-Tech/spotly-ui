import { PolymorphicComponentPropsWithRef } from "./index";

export type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
    C,
    {
        color?: "default" | "default-gradient" | "primary" | "secondary" | "danger" | "warning" | "info";
        emphasis?: "default" | "low";
        size?: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
        weight?: "thin" | "normal" | "medium" | "semibold" | "bold" | "black";
        align?: "left" | "center" | "right";
        italic?: boolean;
        underline?: boolean;
    }
>;
export type TextComponent = <C extends React.ElementType = "span">(
    props: TextProps<C>
  ) => React.ReactElement | null;