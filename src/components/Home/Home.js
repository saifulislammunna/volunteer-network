import React, { useEffect, useState } from 'react';
import Service from '../Service/service';
 
import './Home.css';


/* Home Component */
const Home = () => {
    const [ services, setServices] = useState([]);
     
    useEffect(()=>{
      fetch('https://safe-dawn-33907.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
    },[])
    return (
        <div >
             <h2 className="text-start p-5 pb-2">Our Services:</h2>
         <div className="service-container p-5">
         {
               services.map( service => <Service
                service ={service}
                key ={service.name}
              
               >

               </Service>)
             }

         </div>
        </div>
    );
};

export default Home;