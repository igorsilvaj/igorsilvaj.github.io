import { createElement, useEffect, useRef } from "react";
import createTagCloud from "./TagCloud";
import type { TagCloudOptions } from "./TagCloud";
import { StaticImageData } from "next/image";

interface Props {
  tags: string[] | StaticImageData[];
  className?: string;
  id?: string;

  options?: TagCloudOptions;

  radius?: number;
  maxSpeed?: "slow" | "normal" | "fast";
  initSpeed?: "slow" | "normal" | "fast";
  direction?: number;
  iconSize?: number;
}

export const TagCloud = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = (w: Window & typeof globalThis): TagCloudOptions => ({
      setRadius: Math.min(props.radius ?? 300, w.innerWidth, w.innerHeight) / 2,
      setMaxSpeed: props.maxSpeed ?? "fast",
      setInitSpeed: props.initSpeed ?? "normal",
      setDirection: props.direction ?? 90,
      setIconContainerSize: props.iconSize ?? 50
    });

    const tagCloud = createTagCloud(
      ref.current as any,
      props.tags as string[],
      props.options ?? options(window)
    );

    return () => {
      try {
        Array.isArray(tagCloud)
          ? tagCloud.forEach((e) => e.destroy())
          : tagCloud.destroy();
      } catch (err) {
        console.error(err);
      }
    };
  }, [ref, props]);

  return createElement("div", {
    className: props.className,
    ref,
  });
}

export default TagCloud;
