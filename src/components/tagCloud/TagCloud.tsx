// Modified from Cong Min version https://github.com/mcc108/TagCloud

import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";

export interface ImgProps {
  src: string;
  height?: number;
  width?: number;
}

const imgNext = (
  <Image
    src="./next.svg"
    priority
    alt="teste"
    width="0"
    height="0"
    style={{ width: "auto", height: "auto" }}
  />
);

export interface Tag {
  x: number;
  y: number;
  z: number;
  el: HTMLDivElement;
  scale?: string;
}

export interface TagCloud {
  tags: string[];
  config: TagCloudOptions;
  $container: HTMLElement;

  formatedTags: Tag[];

  radius: number;
  depth: number;
  size: number;
  maxSpeed: number;
  initSpeed: number;
  direction: number;
  keep: boolean;
  paused: boolean;
  interval: number | null;
  iconContainerSize: number;

  $el: HTMLDivElement;
  active: boolean;
  mouseX: number;
  mouseX0: number;
  mouseY: number;
  mouseY0: number;

  update(tags: any): void;
  pause(): void;
  resume(): void;
  destroy(): void;
}

export interface TagCloudOptions {
  setRadius?: number;
  setMaxSpeed?: "slow" | "normal" | "fast";
  setInitSpeed?: "slow" | "normal" | "fast";
  setDirection?: number;
  setKeep?: boolean;
  setContainerClass?: string;
  setItemClass?: string;
  setUseContainerInlineStyles?: boolean;
  setUseItemInlineStyles?: boolean;
  setIconContainerSize?: number;
}

export interface InstanceList {
  el: HTMLDivElement;
  container: HTMLElement;
  instance?: TagCloud;
}

type RequestAnimFrameType = (
  callback: FrameRequestCallback,
  element?: Element
) => number;

export class TagCloud {
  constructor(
    tags: string[],
    options: TagCloudOptions,
    container = document.body
  ) {
    if (!container || container.nodeType !== 1)
      throw new Error("Incorrect element type");

    // params
    this.tags = tags || [];
    this.config = { ...TagCloud._defaultConfig, ...(options || {}) };
    this.$container = container;

    // calculate config
    this.radius = this.config.setRadius ?? TagCloud._defaultConfig.radius; // rolling radius
    this.depth = 2 * this.radius; // rolling depth
    this.size = 1.5 * this.radius; // rolling area size with mouse
    this.maxSpeed = TagCloud._getMaxSpeed(
      this.config.setMaxSpeed ?? TagCloud._defaultConfig.maxSpeed
    ); // rolling max speed
    this.initSpeed = TagCloud._getInitSpeed(
      this.config.setInitSpeed ?? TagCloud._defaultConfig.initSpeed
    ); // rolling init speed
    this.direction =
      this.config.setDirection ?? TagCloud._defaultConfig.direction; // rolling init direction
    this.keep = this.config.setKeep ?? TagCloud._defaultConfig.keep; // whether to keep rolling after mouse out area
    this.paused = false; // keep state to pause the animation
    this.iconContainerSize = this.config.setIconContainerSize ?? TagCloud._defaultConfig.iconContainerSize;

    // create element
    this.$el = this._createElement();
    
    // init
    this._init();

    // set elements and instances
    TagCloud.list.push({
      el: this.$el,
      container,
      instance: this,
    });
  }

  /* static method */
  // all TagCloud list
  private static list: InstanceList[] = [];

  // default config
  public static _defaultConfig = {
    radius: 100, // rolling radius, unit `px`
    maxSpeed: "normal", // rolling max speed, optional: `slow`, `normal`(default), `fast`
    initSpeed: "normal", // rolling init speed, optional: `slow`, `normal`(default), `fast`
    direction: 135, // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
    keep: true, // whether to keep rolling after mouse out area, optional: `false`, `true`(default)(decelerate to rolling init speed, and keep rolling with mouse)
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
    containerClass: "tagcloud",
    itemClass: "tagcloud--item",
    iconContainerSize: 50
  };

  // speed value
  private static _getMaxSpeed = (choice: string) =>
    ({ slow: 0.5, normal: 1, fast: 2 }[choice] ?? 1);

  private static _getInitSpeed = (choice: string) =>
    ({ slow: 16, normal: 32, fast: 80 }[choice] ?? 32);

  // event listener
  private static _on<T extends Event>(
    el: HTMLElement | Window,
    ev: string,
    handler: (event: T) => void,
    cap?: boolean
  ) {
    if (el.addEventListener) {
      el.addEventListener(ev, handler as EventListener, cap);
    } else {
      (el as any).attachEvent(`on${ev}`, handler as EventListener);
    }
  }

  /* instance property method */
  // creates a div to contain all the tags
  private _createElement() {
    // create container
    const $el = document.createElement("div");
    $el.className =
      this.config.setContainerClass ?? TagCloud._defaultConfig.containerClass;
    if (
      this.config.setUseContainerInlineStyles ??
      TagCloud._defaultConfig.useContainerInlineStyles
    ) {
      $el.style.position = "relative";
      $el.style.width = `${2 * this.radius}px`;
      $el.style.height = `${2 * this.radius}px`;
    }

    // create tags
    this.formatedTags = [];
    this.tags.forEach((item: string | ImgProps, index: number) => {
      let tagEl;
      if (typeof item === "object" && "src" in item) {
        tagEl = this._createImgItem(item, index);
      } else {
        tagEl = this._createTextItem(item, index);
      }
      $el.appendChild(tagEl.el);
      this.formatedTags.push(tagEl);
    });
    this.$container.appendChild($el);
    return $el;
  }

  // create a div to contain a tag
  private _createItem(tag: HTMLElement, index: number) {
    const tagEl = document.createElement("div");

    tagEl.className =
      this.config.setItemClass ?? TagCloud._defaultConfig.itemClass;
    if (
      this.config.setUseItemInlineStyles ??
      TagCloud._defaultConfig.useItemInlineStyles
    ) {
      tagEl.style.willChange = "transform, opacity, filter";
      tagEl.style.position = "absolute";
      tagEl.style.top = "50%";
      tagEl.style.left = "50%";
      tagEl.style.zIndex = `${index + 1}`;
      tagEl.style.filter = "alpha(opacity=0)";
      tagEl.style.opacity = "0";

      const transformOrigin = "50% 50%";
      tagEl.style.transformOrigin = transformOrigin;

      const transform = "translate3d(-50%, -50%, 0) scale(1)";
      tagEl.style.transform = transform;
    }

    tagEl.appendChild(tag);

    return tagEl;
  }

  // create an image
  private _createImgItem(img: ImgProps, index = 0) {
    const imgTag = React.cloneElement(imgNext, {
      src: img,
      alt: "TagCloud Item",
      width: 250,
      height: 250,
    });

    const container = document.createElement("div");
    container.style.width = `${this.iconContainerSize}px`;
    container.style.height = `${this.iconContainerSize}px`;

    const root = ReactDOM.createRoot(container);
    root.render(imgTag);

    const itemEl = this._createItem(container, index);

    return {
      el: itemEl,
      ...this._computePosition(index), // distributed in appropriate place
    };
  }

  // create a text
  private _createTextItem(text: string, index = 0) {
    const spanTag = document.createElement("span");
    spanTag.innerHTML = text;

    const itemEl = this._createItem(spanTag, index);

    return {
      el: itemEl,
      ...this._computePosition(index), // distributed in appropriate place
    };
  }

  // calculate appropriate place
  private _computePosition(index: number, random = false) {
    const textsLength = this.tags.length;
    // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
    if (random) index = Math.floor(Math.random() * (textsLength + 1));
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
      x: (this.size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (this.size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (this.size * Math.cos(phi)) / 2,
    };
  }

  private _requestInterval(fn: () => void, delay: number): number {
    const requestAnimFrame: RequestAnimFrameType =
      window.requestAnimationFrame ||
      function (callback: FrameRequestCallback) {
        window.setTimeout(callback, 1000 / 60);
      };

    let start = new Date().getTime();

    let handle = 0;

    const loop = () => {
      handle = requestAnimFrame(loop);
      const current = new Date().getTime();
      const delta = current - start;
      if (delta >= delay) {
        fn.call(this);
        start = new Date().getTime();
      }
    };

    handle = requestAnimFrame(loop);

    return handle;
  }

  // init
  private _init() {
    this.active = false; // whether the mouse is activated

    this.mouseX0 = this.initSpeed * Math.sin(this.direction * (Math.PI / 180)); // init distance between the mouse and rolling center x axis
    this.mouseY0 = -this.initSpeed * Math.cos(this.direction * (Math.PI / 180)); // init distance between the mouse and rolling center y axis

    this.mouseX = this.mouseX0; // current distance between the mouse and rolling center x axis
    this.mouseY = this.mouseY0; // current distance between the mouse and rolling center y axis

    const isTouchDevice = window.matchMedia("(hover: hover)");
    if (!isTouchDevice || isTouchDevice.matches) {
      // mouseover
      TagCloud._on(this.$el, "mouseover", () => {
        this.active = true;
      });
      // mouseout
      TagCloud._on(this.$el, "mouseout", () => {
        this.active = false;
      });
      // mousemove
      TagCloud._on(
        this.keep ? window : this.$el,
        "mousemove",
        (ev: MouseEvent) => {
          const rect = this.$el.getBoundingClientRect();
          this.mouseX = (ev.clientX - (rect.left + rect.width / 2)) / 5;
          this.mouseY = (ev.clientY - (rect.top + rect.height / 2)) / 5;
        }
      );
    }

    // update state regularly
    this._next(); // init update state
    this.interval = this._requestInterval(() => {
      this._next.call(this);
    }, 10);
  }

  // calculate the next state
  private _next() {
    if (this.paused) {
      return;
    }

    // if keep `false`, pause rolling after moving mouse out area
    if (!this.keep && !this.active) {
      this.mouseX =
        Math.abs(this.mouseX - this.mouseX0) < 1
          ? this.mouseX0
          : (this.mouseX + this.mouseX0) / 2; // reset distance between the mouse and rolling center x axis
      this.mouseY =
        Math.abs(this.mouseY - this.mouseY0) < 1
          ? this.mouseY0
          : (this.mouseY + this.mouseY0) / 2; // reset distance between the mouse and rolling center y axis
    }

    const a =
      -(Math.min(Math.max(-this.mouseY, -this.size), this.size) / this.radius) *
      this.maxSpeed;
    const b =
      (Math.min(Math.max(-this.mouseX, -this.size), this.size) / this.radius) *
      this.maxSpeed;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause

    // calculate offset
    const l = Math.PI / 180;
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l),
    ];

    this.formatedTags.forEach((tag) => {
      const rx1 = tag.x;
      const ry1 = tag.y * sc[1] + tag.z * -sc[0];
      const rz1 = tag.y * sc[0] + tag.z * sc[1];

      const rx2 = rx1 * sc[3] + rz1 * sc[2];
      const ry2 = ry1;
      const rz2 = rz1 * sc[3] - rx1 * sc[2];

      const per = (2 * this.depth) / (2 * this.depth + rz2);

      tag.x = rx2;
      tag.y = ry2;
      tag.z = rz2;
      tag.scale = per.toFixed(3);
      let alpha = per * per - 0.25;
      alpha = alpha > 1 ? 1 : alpha;

      const itemEl = tag.el;
      const left = (tag.x - itemEl.offsetWidth / 2).toFixed(2);
      const top = (tag.y - itemEl.offsetHeight / 2).toFixed(2);
      const transform = `translate3d(${left}px, ${top}px, 0) scale(${tag.scale})`;
      itemEl.style.transform = transform;
      itemEl.style.filter = `alpha(opacity=${100 * alpha})`;
      itemEl.style.opacity = alpha.toFixed(3);
    });
  }

  /* export instance properties and methods */
  // update
  update(tags: string[]) {
    // params
    this.tags = tags || [];
    // judging and processing items based on texts
    this.tags.forEach((item: string | ImgProps, index) => {
      let selectedTag = this.formatedTags[index];
      let tagEl;
      if (typeof item === "object" && "src" in item) {
        tagEl = this._createImgItem(item, index);
      } else {
        tagEl = this._createTextItem(item, index);
      }
      if (!selectedTag) {
        // if not had, then create
        Object.assign(selectedTag, this._computePosition(index, true)); // random place
        this.$el.appendChild(tagEl.el);
        this.formatedTags.push(tagEl);
      }
      // if had, replace
      selectedTag.el = tagEl.el;
    });
    // remove redundant items
    const tagsLength = this.tags.length;
    const formatedTagsLength = this.formatedTags.length;
    if (tagsLength < formatedTagsLength) {
      const removeList = this.formatedTags.splice(
        tagsLength,
        formatedTagsLength - tagsLength
      );
      removeList.forEach((item) => {
        this.$el.removeChild(item.el);
      });
    }
  }

  // destroy
  public destroy() {
    this.interval = null;
    // clear in TagCloud.list
    const index = TagCloud.list.findIndex((e) => e.el === this.$el);
    if (index !== -1) TagCloud.list.splice(index, 1);
    // clear element
    if (this.$container && this.$el) {
      this.$container.removeChild(this.$el);
    }
  }

  public pause() {
    this.paused = true;
  }

  public resume() {
    this.paused = false;
  }
}

export default function createTagCloud(
  els: HTMLElement | string | NodeListOf<HTMLElement> | HTMLElement[],
  texts: string[],
  options: any
): TagCloud | TagCloud[] {
  if (typeof els === "string") els = document.querySelectorAll(els);

  if (els instanceof HTMLElement) {
    els = [els];
  } else if (!(els instanceof NodeList) && !Array.isArray(els)) {
    throw new Error(
      "Invalid argument: els must be a string, HTMLElement, HTMLElement[], or NodeListOf<HTMLElement>."
    );
  } else if (
    Array.isArray(els) &&
    !els.every((el) => el instanceof HTMLElement)
  ) {
    throw new Error(
      "Invalid argument: all elements in the array must be of type HTMLElement."
    );
  }

  const instances: TagCloud[] = [];
  els.forEach((el: HTMLElement) => {
    if (el) {
      instances.push(new TagCloud(texts, options, el));
    }
  });

  return instances.length <= 1 ? instances[0] : instances;
}
