// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import Dashboard from "./components/Dashboard";
import { LightMode } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <LightMode>
        <Navbar />
        <MainNavbar />
        <Dashboard />
      </LightMode>
    </>
  );
}

export default App;
