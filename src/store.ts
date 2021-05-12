import * as React from "react";

export interface State {
  image: {
    blob: string;
    size: number;
    borderRadius: number;
  };
  shadow: {
    offsetX: number;
    offsetY: number;
    spread: number;
    blur: number;
    color: string;
  };
  perspective: {
    x: number;
    y: number;
    z: number;
    intensity: number;
  };
  background: string;
  watermark: {
    blob: string;
    size: number;
    margin: number;
    position: string;
  };
}

const INITIAL_STATE: State = {
  image: {
    blob: "https://pbs.twimg.com/media/E0BPkvvXsAAuBmG?format=jpg&name=large",
    size: 75,
    borderRadius: 0,
  },
  shadow: {
    offsetX: 0,
    offsetY: 0,
    spread: 0,
    blur: 0,
    color: "#000",
  },
  perspective: {
    x: 0,
    y: 0,
    z: 0,
    intensity: 0,
  },
  background: "#fafafa",
  watermark: {
    blob: "https://pbs.twimg.com/media/E0BPkvvXsAAuBmG?format=jpg&name=large",
    size: 10,
    margin: 12,
    position: "bottom-right",
  },
};

export function useTransforms() {
  return React.useState<State>(INITIAL_STATE);
}
