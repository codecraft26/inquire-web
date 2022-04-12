import React from 'react';
import NavBar from "../navbar/NavBar";
import "./home.css";
import SideNav from './sidenav/SideNav';
import Feeds from './feeds/Feeds';
import Trending from './trending/Trending';
import Footer from '../footer/Footer';
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
         <div className="item"><Trending/></div>
        
       </div>
     <Footer/>
    </div>
  );
};
export default Home;