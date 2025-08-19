"use client";

import { ChakraProvider, Theme } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { system } from "./theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} forcedTheme="light">
        <Theme appearance="light">{props.children}</Theme>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
