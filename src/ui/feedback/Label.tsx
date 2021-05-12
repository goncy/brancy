import React from "react";
import {Stack, Text, Box} from "@chakra-ui/react";

interface Props {
  text: string;
}

const Label: React.FC<Props> = ({text, children}) => {
  return (
    <Stack alignItems="center" direction="row">
      <Text flex={0.75} fontSize="sm">
        {text}:{" "}
      </Text>
      <Box flex={1}>{children}</Box>
    </Stack>
  );
};

export default Label;
