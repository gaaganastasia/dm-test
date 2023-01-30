import './Header.css';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrolledLink } from "react-scroll";

function Header(props) {
  const location = useLocation();
  const isLocMain = location.pathname === '/';

  return (
    <header className="header">
      <Link to={{pathname: "/", hash: `${location.pathname.includes('expert') ? '#staff' : ''}`}} className='header__logo'></Link>
      <ul className={`header__links ${props.navState && 'header__links_visible'}`}>
        <li className='header__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'about'} spy={true} smooth={true} duration={1000}>О клинике</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#about"}}>О клинике</Link>
          }
        </li>
        <li className='header__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'services'} spy={true} smooth={true} duration={1000}>Услуги и цены</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#services"}}>Услуги и цены</Link>
          }
        </li>
        <li className='header__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'staff'} spy={true} smooth={true} duration={1000}>Наши врачи</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#staff"}}>Наши врачи</Link>
          }
        </li>
        <li className='header__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'reviews'} spy={true} smooth={true} duration={1000}>Отзывы</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#reviews"}}>Отзывы</Link>
          }
        </li>
        <li className='header__link'>
          {isLocMain ?
            <ScrolledLink onClick={() => props.setNavState(!props.navState)} to={'stocks'} spy={true} smooth={true} duration={1000}>Акции</ScrolledLink>
            :
            <Link onClick={() => props.setNavState(!props.navState)} to={{pathname: "/", hash: "#stocks"}}>Акции</Link>
          }
        </li>
        <li className='header__link'>
          <Link onClick={() => props.setNavState(!props.navState)} to="/contacts">Контакты</Link>
        </li>
      </ul>
      <div onClick={() => props.setNavState(!props.navState)} className='header__menu-icon'></div>
      <div className='header__call-block'>
        <div className='header__call-icon'></div>
        <a href="tel:+74956540051" className='header__call-number'>8(495) 654-00-51</a>
      </div>
    </header>
  );
}

export default Header;
