import React from "react";
import Display from "../output";
import { render, screen } from '@testing-library/react';

it("Display renders without crashing",()=>{
    const div = document.createElement("div");
    render(<Display stat={[1,1]} route={ [[42.392611, -72.533832,],[42.39107576463665, -72.53321883848933],[42.38837415353575, -72.53208770671064]] } />,div);
})
