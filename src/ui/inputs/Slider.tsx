import React from "react";
import {
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderProps,
} from "@chakra-ui/react";

const Slider: React.FC<SliderProps> = (props) => {
  return (
    <ChakraSlider aria-label="slider" {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
};

export default Slider;
