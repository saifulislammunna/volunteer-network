import React, { useEffect, useState } from 'react';
import { Button  } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const { id} = useParams();
    const [service,setService] = useState( []);
    // console.log(params);
    useEffect(()=>{
       
        fetch('https://safe-dawn-33907.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const selected = data.find ( s => s.id == id)
               console.log(selected) 
               
               setService(selected);
        });
    },[])
    return (
        <div className="service-detail">
           <div className="service-img p-3">
            <img src={service.img}  alt="" />
            </div>
           
           <div className="d-flex p-3 selected-item align-items-center justify-content-center">
                      <div className=" selected-item  d-flex  align-items-center      justify-content-center p-5">
         
             
                       <h1 className="pb-2 ">{ service.name} </h1>
                           <p className="p-2 ">{service.description}</p>
             
                       </div >
            
                       <Link to="/home"  ><Button  className="btn  rounded-pill btn">
                  
                 <span className="p-2 "> Detail</span></Button></Link>
           </div>
            
           
         </div>
     
        
    );
};

export default ServiceDetail;
 