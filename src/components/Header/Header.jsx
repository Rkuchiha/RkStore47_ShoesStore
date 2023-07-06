import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import {Link} from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuo,setMenuo] = useState(false)

  return (
    <div className="Header">
      <img src={Logo} alt="" className="logo" />
      {(menuo ==false && mobile===true)?(
        <div style={{
          backgroundColor:"var(--appColor)",
          padding:"0.5rem",
          borderRadius:"5px",
        }}
        onClick={()=> setMenuo(true)}>
          <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
      </div>
      ):(
        <ul className="menu">
        <li>
          <Link onClick={()=> setMenuo(false)} to='hero' span={true} smooth={true}>
          Home
          </Link>
          </li>

          <li>
          <Link onClick={()=> setMenuo(false)} to='programs' span={true} smooth={true}>
          Programs
          </Link>
          </li>

          <li>
          <Link onClick={()=> setMenuo(false)} to='Reasons' span={true} smooth={true}>
          Why us
          </Link>
          </li>

          <li>
          <Link onClick={()=> setMenuo(false)} to='Plans' span={true} smooth={true}>
          Plans
          </Link>
          </li>

          <li>
          <Link onClick={()=> setMenuo(false)} to='Testimonials' span={true} smooth={true}>
          Testimonial
          </Link>
          </li>
      </ul>
      )}

          </div>
  );
};

export default Header;
