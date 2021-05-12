import React from "react";
import {Stack, Image, Select} from "@chakra-ui/react";

import Slider from "../ui/inputs/Slider";
import Label from "../ui/feedback/Label";
import {State} from "../store";

interface Props {
  value: State["watermark"];
  onChange: (watermark: State["watermark"]) => void;
}

const WatermarkTransformer: React.FC<Props> = ({value, onChange}) => {
  return (
    <Stack spacing={6}>
      <Image borderRadius="md" height={24} src={value.blob} width={24} />
      <Stack spacing={3}>
        <Label text="Position">
          <Select onChange={(event) => onChange({...value, position: event.target.value})}>
            <option value="top-left">Top left</option>
            <option value="top-right">Top right</option>
            <option value="bottom-left">Bottom left</option>
            <option value="bottom-right">Bottom right</option>
          </Select>
        </Label>
        <Label text="Size">
          <Slider
            flex={1}
            max={25}
            value={value.size}
            onChange={(size) => onChange({...value, size})}
          />
        </Label>
        <Label text="Margin">
          <Slider
            flex={1}
            value={value.margin}
            onChange={(margin) => onChange({...value, margin})}
          />
        </Label>
      </Stack>
    </Stack>
  );
};

export default WatermarkTransformer;
