import React from "react";
import Menu from "./component/inputMenu/menu";
import Map from "./component/map/Map";
import { useState } from "react";

import "./styles.css";
import Display from "./component/output/output";
import SwitchDisplay from "./component/collapse/display";

export default function App() {

  let [max,SetMax] = useState(false)
  let [source,SetSource] = useState(42.39172808705315)
  let [destination, SetDestination] = useState(-72.52514801414911)
  let [percentage,setPercentage] = useState(1)
  let [route, SetRoute] = useState([])
  let [MC, setMC] = useState(false);
  let [DC, setDC] = useState(true);

  function SwitchC(){
    setMC(!MC);
  }

  function SwitchD(){
    setDC(!DC);
  }

  return (
    <div className="App">
      <SwitchDisplay ape={SwitchD}/>
      <Menu collapse={false}/>
      <Display collapse={DC}/>
      <Map />
    </div>
  );
}