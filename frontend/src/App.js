import React from "react";
import Menu from "./component/inputMenu/menu";
import Map from "./component/map/Map";
import { useState, useEffect } from "react";

import "./styles.css";
import Display from "./component/output/output";
import SwitchDisplay from "./component/collapse/display";

export default function App() {

  const [max,SetMax] = useState(false)
  const [source,SetSource] = useState("")
  const [destination, SetDestination] = useState("")
  const [percentage,SetPercentage] = useState(100)
  const [route, SetRoute] = useState([])
  const [stat, SetStat] = useState([0,0])
  const [re,SetRe] = useState(false)


  function submit(){
      const go = {source,destination,percentage,max};
      const res = {};
      fetch('http://localhost:5000/route'
      , {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        param: JSON.stringify(go),
      }
      ).then(res => res.json()).then(
        result=>{
          alert(result["route"])
          const {route, distance, elevation} = result
          
          SetRoute(route);
          SetStat([distance,elevation])
          SetRe(!re);
        }
      )


  }

  return (
    <div className="App">
      <Menu submit={submit} source={source} destination={destination} percentage={percentage} setPercentage={SetPercentage} setMax={SetMax} setSource={SetSource} setDestination={SetDestination} setPercentage={SetPercentage} setRoute={SetRoute}/>
      <Display stat={stat} route={route}/>
      <Map key={re }route={route}/>
    </div>
  );
}