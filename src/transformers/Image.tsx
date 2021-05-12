import React from "react";
import {Stack, Image} from "@chakra-ui/react";

import Slider from "../ui/inputs/Slider";
import Label from "../ui/feedback/Label";
import {State} from "../store";

interface Props {
  onChange: (image: State["image"]) => void;
  value: State["image"];
}

const ImageTransformer: React.FC<Props> = ({value, onChange}) => {
  return (
    <Stack spacing={6}>
      <Image borderRadius="md" height={24} src={value.blob} width={24} />
      <Stack spacing={3}>
        <Label text="Scale">
          <Slider flex={1} value={value.size} onChange={(size) => onChange({...value, size})} />
        </Label>
        <Label text="Border radius">
          <Slider
            flex={1}
            value={value.borderRadius}
            onChange={(borderRadius) => onChange({...value, borderRadius})}
          />
        </Label>
      </Stack>
    </Stack>
  );
};

export default ImageTransformer;
