import React from "react";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  size?: keyof typeof SIZE_MAP;
};

const SIZE_MAP = {
  normal: "text-xl",
  big: "text-4xl",
};

export function Logo({ className, size = "normal" }: LogoProps): JSX.Element {
  return (
    <span className={clsx("font-serif", SIZE_MAP[size], className)}>
      <span lang="ja">日本語先生</span> Dict
    </span>
  );
}
