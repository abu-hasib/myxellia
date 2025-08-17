import { PopoverProvider } from "@/components/ui/popover";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import React, { type ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider>
      <PopoverProvider>{children}</PopoverProvider>
    </ChakraProvider>
  );
}

export default Providers;
