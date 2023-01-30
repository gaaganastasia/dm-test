import './Footer.css';
import { Link as ScrolledLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isLocMain = location.pathname === '/';

  

  return (
    <footer className='footer'>
      <ul className='footer__nav'>
        <li className='footer__nav-el'>
          {isLocMain ?
            <ScrolledLink className='footer__nav-link' to={'about'} spy={true} smooth={true} duration={1000}>О клинике</ScrolledLink>
            :
            <Link className='footer__nav-link' to={{pathname: "/", hash: "#about"}}>О клинике</Link>
          }        
        </li>
        <li className='footer__nav-el'>
        {isLocMain ?
            <ScrolledLink className='footer__nav-link' to={'services'} spy={true} smooth={true} duration={1000}>Услуги и цены</ScrolledLink>
            :
            <Link className='footer__nav-link' to={{pathname: "/", hash: "#services"}}>Услуги и цены</Link>
          }
        </li>
        <li className='footer__nav-el'>
        {isLocMain ?
            <ScrolledLink className='footer__nav-link' to={'staff'} spy={true} smooth={true} duration={1000}>Наши врачи</ScrolledLink>
            :
            <Link className='footer__nav-link' to={{pathname: "/", hash: "#staff"}}>Наши врачи</Link>
          }
        </li>
        <li className='footer__nav-el'>
        {isLocMain ?
            <ScrolledLink className='footer__nav-link' to={'reviews'} spy={true} smooth={true} duration={1000}>Отзывы</ScrolledLink>
            :
            <Link className='footer__nav-link' to={{pathname: "/", hash: "#reviews"}}>Отзывы</Link>
          }
        </li>
        <li className='footer__nav-el'>
        {isLocMain ?
            <ScrolledLink className='footer__nav-link' to={'stocks'} spy={true} smooth={true} duration={1000}>Акции</ScrolledLink>
            :
            <Link className='footer__nav-link' to={{pathname: "/", hash: "#stocks"}}>Акции</Link>
          }
        </li>
        <li className='footer__nav-el'>
          <Link className='footer__nav-link' to="/contacts">Контакты</Link>
        </li>
      </ul>
      <div className='footer__contacts'>
        <p className='footer__text'>ООО Данила - Мастер</p>
        <div className='footer__row'>
          <div className='footer__icon footer__icon_call'></div>
          <p className='footer__text'>8(495) 654-00-51</p>
        </div>
        <div className='footer__row'>
          <div className='footer__icon footer__icon_loc'></div>
          <p className='footer__text'>г.Москва, ул.Белореченская, д.12 м.Люблино (вход с ул.Новороссийская)</p>
        </div>
        <div className='footer__row'>
          <div className='footer__icon footer__icon_mail'></div>
          <p className='footer__text'>danilamaster0607@mail.ru</p>
        </div>
        <div className='footer__row'>
          <div className='footer__icon footer__icon_time'></div>
          <p className='footer__text'>Пн.- Вс. с 10:00 до 20:00</p>
        </div>
      </div>
      <div className='footer__docs'>
        <p className='footer__docs-link footer__docs-link_license'>Лицензия № Л041-01137-77/00369738<br />от 11.07.2013</p>
        <Link className='footer__docs-link' to="/contacts">Правовая информация</Link>
        <a href="https://drive.google.com/file/d/1KNo6ftv_HnV6ZYrut9xaPRGcmwHsvahN/view?usp=sharing" target="_blank" rel="noreferrer" className='footer__docs-link'>Политика в отношении обработки<br />персональных данных</a>
        <div className='footer__copyright'>
          <div className='footer__copyright-icon'></div>
          <p className='footer__copyright-text'>Copyright 2022. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;