"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "rgba(70, 97, 230, 1)",
    secondary: "rgba(242, 244, 255, 1)",
    text: "rgba(58, 67, 116, 1)",
    purple: "rgba(173, 31, 234, 1)"
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
