import { Provider as ChakraProvider } from "@/components/ui/provider";
import React, { type ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default Providers;
