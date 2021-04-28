import React from 'react'

import './testimonial.css';
import {Button} from '../Button'
function Testimonials({heading,data}) {
    return (
        <div className="Test-section">
             <div className="heading">{heading}</div>
            <div className=" test-wrapper">
               
                {data.map((data,index)=>{
                    return(
                        <div className="test-info-section" key={index}>

                                <div className="text-class">
                                <div className="card-title"><p>{data.Name}</p></div>
                                <div className="card-text"><p>{data.comment}</p></div>
                                
                                 </div>
                                 </div>
                           
                       
                  
                      
                  
                    )
                })}
         
              </div>
        </div>
    )
}

export default Testimonials
