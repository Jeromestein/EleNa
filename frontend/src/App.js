import React from "react";
import Menu from "./component/inputMenu/menu";
import Map from "./component/map/Map";
import { useState, useEffect } from "react";

import "./styles.css";
import Display from "./component/output/output";
import SwitchDisplay from "./component/collapse/display";

export default function App() {

  const [max, SetMax] = useState(false)
  const [source, SetSource] = useState("")
  const [destination, SetDestination] = useState("")
  const [percentage, SetPercentage] = useState(100)
  const [route, SetRoute] = useState([])
  const [stat, SetStat] = useState([0, 0])
  const [re, SetRe] = useState(false)
  const [D, SetD] = useState(true)


  function submit() {
    const go = { source, destination, percentage, max, D };
    const res = {};
    fetch('http://localhost:4001/route'
      , {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(go)
      }
    ).then(res => res.json()).then(
      result => {
        alert(result["route"]["route"])
        const { route, distance, elevation } = result["route"]

        SetRoute(route);
        SetStat([distance, elevation])
        SetRe(!re);
      }
    ).catch(e => console.log(e))


  }

  return (
    <div className="App">
      <Menu submit={submit} D={D} setD={SetD} source={source} destination={destination} percentage={percentage} setPercentage={SetPercentage} setMax={SetMax} setSource={SetSource} setDestination={SetDestination} setPercentage={SetPercentage} setRoute={SetRoute} />
      <Display stat={stat} route={route} />
      <Map key={re} route={route} />
    </div>
  );
}