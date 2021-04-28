import React, { useState } from 'react'
import './Blog.css';
import Carousel from 'react-elastic-carousel';

function BlogItem({ heading, data }) {
   
    return (
        <>
            <div className="section">
                <div className="heading">{heading}</div>
                <div className="blog-wrapper">
                    
        
        <Carousel>
        {data.map((data) =>{
            return(
              <div key={data.id} className="blog-wrap">
              <div className="blog-img"><img src={data.img}></img>{data.alt}</div>
              <div className="blog-desc">{data.desc}</div>
              </div>
         ) })
        } 
      
      </Carousel>
                   
                </div>
            </div>
        </>
    )  
}

export default BlogItem
