import React from 'react';
import Footer from '../footer/Footer';
import NavBar from "../navbar/NavBar";
import "./home.css";
import SideNav from './sidenav/SideNav';
import Feeds from './feeds/Feeds';
const Home = () => {

 
  return (
    <div>
    <NavBar/>
       <div className="container">
         <div className="item">

          <SideNav/>

         </div>
         <div className="item">

           <Feeds/>
         </div>
         <div className="item">dabba3</div>
        
       </div>
      
    </div>
  );
};
export default Home;