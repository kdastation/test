import React, { ElementType, forwardRef, ReactNode } from "react";

type Props<Type extends ElementType | React.ComponentType> = {
  // size?: Sizes;
  // variant?: Variants;
  // fullWidth?: boolean;
  // isLoading?: boolean;
  // width?: string | number;
  // leftAddon?: ReactNode;
  // rightAddon?: ReactNode;
  // gap?: string | number;
  // maxWidth?: string | number;
  as?: Type;
} & AdditionalProps<Type>;

type AdditionalProps<Type extends ElementType | React.ComponentType> =
  Type extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[Type]
    : React.ComponentPropsWithoutRef<Type>;

export type PolymorphicRef<C extends React.ElementType | React.ComponentType> =
  React.ComponentPropsWithRef<C>["ref"];

const defaultElement = "button";

type ButtonComponent = <
  Type extends ElementType | React.ComponentType<any> = typeof defaultElement,
>(
  props: Props<Type> & { ref?: PolymorphicRef<Type> },
) => ReactNode | null;

export const Button: ButtonComponent = forwardRef(
  <Type extends ElementType | React.ComponentType<any> = typeof defaultElement>(
    { children, as, ...props }: Props<Type>,
    ref: PolymorphicRef<Type>,
  ) => {
    const Component = as || defaultElement;

    return (
      <Component {...props} ref={ref}>
        {children}
        {/*{!isLoading && leftAddon && leftAddon}*/}
        {/*{!isLoading && children}*/}
        {/*{!isLoading && rightAddon && rightAddon}*/}
      </Component>
    );
  },
);
