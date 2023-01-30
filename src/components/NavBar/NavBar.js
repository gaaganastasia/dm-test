import './NavBar.css';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrolledLink } from "react-scroll";

function NavBar(props) {
  const location = useLocation();
  const isLocMain = location.pathname === '/';

  return (
    <div className="navbar">
      <ul className={`navbar__links ${props.navState ? 'navbar__links_visible' : ''}`}>
        <li className='navbar__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'about'} spy={true} smooth={true} duration={1000}>О клинике</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#about"}}>О клинике</Link>
          }
        </li>
        <li className='navbar__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'services'} spy={true} smooth={true} duration={1000}>Услуги и цены</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#services"}}>Услуги и цены</Link>
          }
        </li>
        <li className='navbar__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'staff'} spy={true} smooth={true} duration={1000}>Наши врачи</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#staff"}}>Наши врачи</Link>
          }
        </li>
        <li className='navbar__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'reviews'} spy={true} smooth={true} duration={1000}>Отзывы</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#reviews"}}>Отзывы</Link>
          }
        </li>
        <li className='navbar__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'stocks'} spy={true} smooth={true} duration={1000}>Акции</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#stocks"}}>Акции</Link>
          }
        </li>
        <li className='navbar__link'>
          <Link onClick={() => props.setNavState(!props.navState)} to="/contacts">Контакты</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
