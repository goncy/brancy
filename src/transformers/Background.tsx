import React from "react";
import {Stack} from "@chakra-ui/react";

import Label from "../ui/feedback/Label";
import {State} from "../store";

interface Props {
  onChange: (background: string) => void;
  value: State["background"];
}

const BackgroundTransformer: React.FC<Props> = ({value, onChange}) => {
  return (
    <Stack spacing={3}>
      <Label text="Color">
        <input type="color" value={value} onChange={(event) => onChange(event.target.value)} />
      </Label>
    </Stack>
  );
};

export default BackgroundTransformer;
