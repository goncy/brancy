import React from "react";
import {Stack} from "@chakra-ui/react";

import Label from "../ui/feedback/Label";
import {State} from "../store";
import Slider from "../ui/inputs/Slider";

interface Props {
  value: State["shadow"];
  onChange: (shadow: State["shadow"]) => void;
}

const ShadowTransformer: React.FC<Props> = ({value, onChange}) => {
  return (
    <Stack spacing={3}>
      <Label text="Offset X">
        <Slider
          flex={1}
          value={value.offsetX}
          onChange={(offsetX) => onChange({...value, offsetX})}
        />
      </Label>
      <Label text="Offset Y">
        <Slider
          flex={1}
          value={value.offsetY}
          onChange={(offsetY) => onChange({...value, offsetY})}
        />
      </Label>
      <Label text="Spread">
        <Slider flex={1} value={value.spread} onChange={(spread) => onChange({...value, spread})} />
      </Label>
      <Label text="Blur">
        <Slider flex={1} value={value.blur} onChange={(blur) => onChange({...value, blur})} />
      </Label>
      <Label text="Color">
        <input
          type="color"
          value={value.color}
          onChange={(event) => onChange({...value, color: event.target.value})}
        />
      </Label>
    </Stack>
  );
};

export default ShadowTransformer;
