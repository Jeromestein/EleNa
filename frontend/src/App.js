import React from "react";
import Menu from "./component/inputMenu/menu";
import Map from "./component/map/Map";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Map />
    </div>
  );
}