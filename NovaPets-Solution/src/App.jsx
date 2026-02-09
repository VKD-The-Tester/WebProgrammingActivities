import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="card-grid">
        <Card
          badgeInput={"Profiles"}
          headingText={"Real details"}
          paragraphInfo={
            "Age, vaccines, energy level, and what the pet is like at home."
          }
        ></Card>
        <Card
          badgeInput={"Visits"}
          headingText={"Book a meet"}
          paragraphInfo={
            "Send one message and we connect you with the shelter."
          }
        ></Card>
        <Card
          badgeInput={"Support"}
          headingText={"After adoption"}
          paragraphInfo={
            "Get tips for the first week: food, routine, and settling in."
          }
        ></Card>
      </div>
    </>
  );
}

export default App;
