import React from "react";
import {Stack} from "@chakra-ui/react";

import Slider from "../ui/inputs/Slider";
import Label from "../ui/feedback/Label";

interface Props {
  onChange: (perspective: string) => void;
}

const PerspectiveTransformer: React.FC<Props> = () => {
  return (
    <Stack spacing={3}>
      <Label text="Intensity">
        <Slider flex={1} />
      </Label>
      <Label text="X">
        <Slider flex={1} />
      </Label>
      <Label text="Y">
        <Slider flex={1} />
      </Label>
      <Label text="Z">
        <Slider flex={1} />
      </Label>
    </Stack>
  );
};

export default PerspectiveTransformer;
