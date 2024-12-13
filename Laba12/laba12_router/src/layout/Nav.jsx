import React from 'react'
import style from "./Nav.module.css";
import { Link } from 'react-router-dom';
import logo_img from "../images/logo.svg";
import calc_img from '../images/calculation.svg';
import request_img from "../images/measering.svg";

function Nav() {
  return (
    <header>
      <nav>
        <ul className={style.nav_list}>
          <li className={style.nav_logo}>
              <img src={logo_img} alt="1231" />
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/portf">Portfolio</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/cont">Contacts</Link>
          </li>
          <li className={style.nav_buts}>
            <button className={style.request_but}>
              <img src={request_img} alt="" />
              <Link to="/make-request" className={style.but_label} >Make request</Link>
            </button>
            <button className={style.calc_but}>
              <img src={calc_img} alt="" />
              <Link to="/make-calc" className={style.but_label} >Calculation</Link>
            </button>
            
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
