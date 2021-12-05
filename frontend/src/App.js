import React from "react";
import Menu from "./component/inputMenu/menu";
import Map from "./component/map/Map";
import { useState } from "react";

import "./styles.css";
import Display from "./component/output/output";
import SwitchDisplay from "./component/collapse/display";

export default function App() {

  const [max,SetMax] = useState(false)
  const [source,SetSource] = useState(42.39172808705315)
  const [destination, SetDestination] = useState(-72.52514801414911)
  const [percentage,SetPercentage] = useState(70)
  const [route, SetRoute] = useState([[42.392611, -72.533832,],[42.39107576463665, -72.53321883848933],[42.38837415353575, -72.53208770671064]])
  const [stat, SetStat] = useState([100,110])

  return (
    <div className="App">
      <Menu source={source} destination={destination} percentage={percentage} setPercentage={SetPercentage} setMax={SetMax} setSource={SetSource} setDestination={SetDestination} setPercentage={SetPercentage} setRoute={SetRoute}/>
      <Display stat={stat} route={route}/>
      <Map route={route}/>
    </div>
  );
}