import './Services.css';
import { Link } from "react-router-dom";
import ServicesPage from '../ServicesPage/ServicesPage.js';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';


function Services(props) {


  return (
    <section className='services' id="services">
      <Fade left>
        <h2 className='services__title'>Услуги и цены</h2>
      </Fade>
      <div className='services__image'></div>
      <div className='services__image-desktop'>
        <Zoom>
          <div className='services__image-tooth'></div>
        </Zoom>
        <Rotate>
          <div className='services__image-ellipses'></div>
        </Rotate>
      </div>
      
      <Link to="/services" onClick={() => props.setSelectedService('l')} className='services__link services__link_l'>Лечение под микроскопом</Link>
      <Link to="/services" onClick={() => props.setSelectedService('k')} className='services__link services__link_k'>Консультация</Link>
      <Link to="/services" onClick={() => props.setSelectedService('od')} className='services__link services__link_o'>Ортодонтия</Link>
      <Link to="/services" onClick={() => props.setSelectedService('g')} className='services__link services__link_gi'>Гигиена</Link>
      <Link to="/services" onClick={() => props.setSelectedService('op')} className='services__link services__link_gn'>Ортопедия</Link>
      <Link to="/services" onClick={() => props.setSelectedService('pa')} className='services__link services__link_pa'>Пародонтология</Link>
      <Link to="/services" onClick={() => props.setSelectedService('e')} className='services__link services__link_e'>Эстетическая стоматология</Link>
      <Link to="/services" onClick={() => props.setSelectedService('pr')} className='services__link services__link_pr'>Протезирование</Link>
      <Link to="/services" onClick={() => props.setSelectedService('t')} className='services__link services__link_t'>Терапия</Link>
      <Link to="/services" onClick={() => props.setSelectedService('h')} className='services__link services__link_h'>Хирургия</Link>
      <Link to="/services" onClick={() => props.setSelectedService('d')} className='services__link services__link_d'>Диагностика</Link>
      <Link to="/services" onClick={() => props.setSelectedService('i')} className='services__link services__link_i'>Имплантация</Link>
      <Fade bottom>
        <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='services__btn'>
          <div className='services__btn-icon'></div>
          <p className='services__btn-text'>Записаться</p>
        </a>
      </Fade>
      
      <div className='services__services-page_main'>
        <ServicesPage></ServicesPage>
      </div>
    </section>
  );
}

export default Services;
