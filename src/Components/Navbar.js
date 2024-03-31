import React, { useEffect, useState } from "react";
import logooo from "./Assets/logo creame.png";
export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      // Use the functional form of setScrollY to get the latest state value
      setScrollY((prevScrollY) => {
        // Check if the updated scrollY is greater than 20, add a class to nav
        if (prevScrollY > 80) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
        // Return the updated scrollY value
        return window.scrollY;
      });
    };
   // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  useEffect(() => {
    // Your code to set properties, e.g., attaching click event handlers
    const menu = document.getElementById("menu-list");
    const menuBtn = document.getElementById("menu-btn");
    const body = document.querySelector("body");
    const cancelBtn = document.getElementById("cancel-btn");
  
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
  body.classList.add("disabled");
    }
    cancelBtn.onclick =()=>{
     menu.classList.remove("active");
     menuBtn.classList.remove("hide");
     body.classList.remove("disabled");
    }
  }, []);
  return (
    <>
      <nav className={`navbar`} id="navbar">
    <div className="content">
    <div className="logoo">
           <a href="/"><img src={logooo} alt="Image"/></a> 
          </div>
      <ul className={`menu-list`} id="menu-list">
      <div className={`icon cancel-btn`} id="cancel-btn">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <li>
                <a href="/" className="hover-links">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover-links">
                  About
                </a>
              </li>
              <li>
                <a href="/examples" className="hover-links">
                  Courses
                </a>
              </li>
              <li>
                <a href="/" className="hover-links">
                  Study Visa
                </a>
              </li>
              <li>
                <a href="/advertisement" className="hover-links">
                  PTE
                </a>
              </li>
              <li>
                <a href="/contact" className="secondary-btn">
                  Contact
                </a>
              </li>
              </ul>
      <div className={`icon menu-btn`} id="menu-btn">
      <i class="fa-solid fa-bars"></i>      
      </div>
    </div>
  </nav>
  </>
  );
}
