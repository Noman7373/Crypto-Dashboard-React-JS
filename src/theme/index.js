import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
  // 1. Using a style object

  styles: {
    global: {
      "html, body": {
        bg: "#f3f7f7",
      },
    },
  },
});
