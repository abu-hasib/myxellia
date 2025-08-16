import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import { useColorMode } from "@/components/ui/color-mode"
import { Button, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const { toggleColorMode } = useColorMode()
  return (
    <Navbar />

  );
}

export default App;
