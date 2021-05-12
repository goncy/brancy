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
  perspective: string;
  background: string;
  watermark: {
    blob: string;
    size: number;
    margin: number;
  };
}

const INITIAL_STATE: State = {
  image: {
    blob: "//placehold.it/720x480",
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
  perspective: "",
  background: "primary.50",
  watermark: {
    blob: "",
    size: 25,
    margin: 0,
  },
};

export function useTransforms() {
  return React.useState<State>(INITIAL_STATE);
}
