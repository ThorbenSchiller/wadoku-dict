import React, { forwardRef, HTMLProps } from "react";

const COLOR_MAP = {
  primary: "text-primary-700 dark:text-primary-300",
  text: "",
};

type LinkProps = HTMLProps<HTMLAnchorElement> & {
  color?: keyof typeof COLOR_MAP;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className = "", color = "primary", ...rest },
  ref
): JSX.Element {
  return (
    <a
      className={`${COLOR_MAP[color]} hover:underline ${className}`}
      ref={ref}
      {...rest}
    />
  );
});
