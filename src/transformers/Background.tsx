import React from "react";
import {Stack} from "@chakra-ui/react";

import Label from "../ui/feedback/Label";

interface Props {
  onChange: (background: string) => void;
}

const BackgroundTransformer: React.FC<Props> = () => {
  return (
    <Stack spacing={3}>
      <Label text="Color">
        <input type="color" />
      </Label>
    </Stack>
  );
};

export default BackgroundTransformer;
