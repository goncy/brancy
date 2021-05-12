import React from "react";
import {Stack, Image} from "@chakra-ui/react";

import Slider from "../ui/inputs/Slider";
import Label from "../ui/feedback/Label";
import {State} from "../store";

interface Props {
  onChange: (watermark: State["watermark"]) => void;
}

const WatermarkTransformer: React.FC<Props> = () => {
  return (
    <Stack spacing={6}>
      <Image
        borderRadius="md"
        height={36}
        src="https://pbs.twimg.com/media/E0BPkvvXsAAuBmG?format=jpg&name=large"
        width={36}
      />
      <Stack spacing={3}>
        <Label text="Size">
          <Slider flex={1} />
        </Label>
        <Label text="Margin">
          <Slider flex={1} />
        </Label>
      </Stack>
    </Stack>
  );
};

export default WatermarkTransformer;
