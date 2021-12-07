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



  function submit(){
      const go = {source,destination,percentage,max};
      alert(`send ${source} ${destination} ${percentage} ${max} `);
      alert(`get ${stat} ${route}`)
      /*
        axios.get("api").then((res)=>{
        const {R,S} = res
        SetRoute(R)
        SetStat(S)
      })
      
      
      */
  };

  return (
    <div className="App">
      <Menu submit={submit} source={source} destination={destination} percentage={percentage} setPercentage={SetPercentage} setMax={SetMax} setSource={SetSource} setDestination={SetDestination} setPercentage={SetPercentage} setRoute={SetRoute}/>
      <Display stat={stat} route={route}/>
      <Map route={route}/>
    </div>
  );
}