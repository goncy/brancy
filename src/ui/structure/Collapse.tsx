import React from "react";
import {Box, Stack, Text} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";

interface Props {
  title: string;
  isInitiallyOpen?: boolean;
}

const Collapse: React.FC<Props> = ({isInitiallyOpen = false, title, children}) => {
  const [isCollapsed, toggle] = React.useState<boolean>(!isInitiallyOpen);

  return (
    <Stack spacing={3}>
      <Stack
        cursor="pointer"
        direction="row"
        justifyContent="space-between"
        onClick={() => toggle((isCollapsed) => !isCollapsed)}
      >
        <Text fontWeight="500">{title}</Text>
        <Text>{isCollapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}</Text>
      </Stack>
      <Box display={isCollapsed ? "none" : "block"}>{children}</Box>
    </Stack>
  );
};

export default Collapse;
