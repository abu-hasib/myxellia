import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import { useColorMode } from "@/components/ui/color-mode";
import { Button, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <MainNavbar />
      <Dashboard />
    </>
  );
}

export default App;
