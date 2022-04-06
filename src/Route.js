import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import Home from "./components /home/Home";
import About from "./components /About/About";
import Profile from "./components /profile/Profile";

const Route=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={<Home/>} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
            </Routes>
        </BrowserRouter>
    )
}
export default Route;