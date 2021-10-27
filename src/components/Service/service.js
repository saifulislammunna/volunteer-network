import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './Service.css'


/* service component */
const Service = (props) => {
    const {img,name,description,id} = props.service;
    const url = `/service/${id}`;
    return (
       
        <div>
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title className="fs-2">   {name}</Card.Title>
      
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting service component */
export default Service;