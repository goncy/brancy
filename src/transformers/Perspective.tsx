import React from "react";
import {Stack} from "@chakra-ui/react";

import Slider from "../ui/inputs/Slider";
import Label from "../ui/feedback/Label";
import {State} from "../store";

interface Props {
  onChange: (perspective: State["perspective"]) => void;
  value: State["perspective"];
}

const PerspectiveTransformer: React.FC<Props> = ({value, onChange}) => {
  return (
    <Stack spacing={3}>
      <Label text="Intensity">
        <Slider
          flex={1}
          max={360}
          min={1}
          value={value.intensity}
          onChange={(intensity) => onChange({...value, intensity})}
        />
      </Label>
      <Label text="X">
        <Slider flex={1} value={value.x} onChange={(x) => onChange({...value, x})} />
      </Label>
      <Label text="Y">
        <Slider flex={1} value={value.y} onChange={(y) => onChange({...value, y})} />
      </Label>
      <Label text="Z">
        <Slider flex={1} value={value.z} onChange={(z) => onChange({...value, z})} />
      </Label>
    </Stack>
  );
};

export default PerspectiveTransformer;
