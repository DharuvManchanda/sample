import React, { useState } from 'react';

import Examples from "./Examples";
export default function Header(props) {
  const [image,setImage]=useState();
  setTimeout(()=>{
    setImage(true);
  },1500)
  return (
    <>
  <header className="front container">
        <section className="section-left">
           <h1>{props.title}<span>{props.htitle1}</span> <span>{props.htitle2}</span> <span>{props.htitle3}</span></h1>
            <p>{props.titletext1}</p>
            <p>{props.titletext3}</p>
            <div className="section-btn flex">
            <a href="#" className="secondary-btn btn"> Get Started</a>
            <a href="#" className="primary-btn btn"> Join Today</a>
            </div>
        </section>
        <section className="section-right">
            <img src= {props.img} />
        </section>
    </header>
<Examples></Examples>
</> 
  )
}
