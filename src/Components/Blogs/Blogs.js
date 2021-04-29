import React, { useState } from 'react'
import './Blog.css';


function BlogItem({ heading, data }) {
   
    return (
        <>
            <div className="section">
                <div className="Heading">{heading}</div>
                <div className="blog-wrapper">
                    
        
       
        {data.map((data) =>{
            return(
              <div key={data.id} className="blog-wrap">
              <div className="blog-img"><img src={data.img}></img></div>
              <div className="blog-desc">{data.desc}</div>
              </div>
         ) })
        } 
      
     
                   
                </div>
            </div>
        </>
    )  
}

export default BlogItem
