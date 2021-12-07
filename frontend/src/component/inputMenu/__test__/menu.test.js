import React from "react";
import Menu from "../menu";
import { render, screen } from '@testing-library/react';

import { useState } from "react";


it("Menu renders without crashing",()=>{
    const div = document.createElement("div");
    render(<Menu />,div);
})
