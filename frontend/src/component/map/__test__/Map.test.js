import React from "react";
import Map from "../Map";
import { render, screen } from '@testing-library/react';

it("Map renders without crashing",()=>{
    const div = document.createElement("div");
    render(<Map route={[[42.392611, -72.533832,],[42.39107576463665, -72.53321883848933]]}/>,div);
})
