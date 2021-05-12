import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  sizes: {
    container: {
      xl: "1600px",
    },
  },
});
