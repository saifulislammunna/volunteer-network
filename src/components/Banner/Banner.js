import React from 'react';
import './Banner.css'
import {   Button } from 'react-bootstrap';
/* import img from "../../images/bannerbackground.png" */
 
const Banner = () => {
    return (
        <div className="banner">
            
         <div className="background-image d-flex  align-items-center justify-content-center">
             <h1 className="p-5">I Grow By Helping Pepople in Need.</h1>
             <div className="d-flex">
             <input className="search-field border-end-0 rounded-start" id="input" type="search" autocomplete="off" spellcheck="false" role="combobox" aria-live="polite" placeholder="Search......"/>
             <Button  >Search</Button>
             {/* <input className="w-100" type="search" name="" placeholder="search your food items" id="" /> */}
             {/* <button className="rounded btn-danger">Search</button> */}
             </div>
         {/* <img  
            className="w-100" src= {img} alt="" /> */}
         </div>
         
            
        </div>
    );
};

export default Banner;