import './App.css';

import About from "./components /About/About";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components /profile/Profile";
import Home from "./components /home/Home";




const App=()=>{
  return(
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path={"/profile"} element={<Profile />} />
        </Routes>
    </div>


  )
}
export default App;
