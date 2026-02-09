import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        badgeInput={"Profiles"}
        headingText={"Real details"}
        paragraphInfo={
          "Age, vaccines, energy level, and what the pet is like at home."
        }
      ></Card>
      <Card></Card>
    </>
  );
}

export default App;
