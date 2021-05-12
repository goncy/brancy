import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("root"),
);
