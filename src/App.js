
import React from 'react'
import "./App.css";

import Navbar from './header/Navbar'
import { CssBaseline } from "@material-ui/core";
import Lay from "./Lay"
const App = () => {
    return (
        <div>
             <CssBaseline/>
            <Navbar />
            
          <Lay />
        </div>
    )
}

export default App
