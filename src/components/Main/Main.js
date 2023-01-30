import './Main.css';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Main() {
  return (
    <section className='main'>
      <Fade right>
        <div className='main__img'></div>
      </Fade>
      <div className='main__section'>
        <Fade left>
          <h1 className='main__title main__title_desktop'>С заботой<br />о вашей здоровой<br />улыбке</h1>
          <h2 className='main__title main__title_mobile'>С заботой о вашей здоровой улыбке</h2>
        </Fade>
        <Fade left>
          <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='main__link'>
            <div className='main__link-icon'></div>
            <p className='main__link-text'>Записаться</p>
          </a>
        </Fade>
      </div>
      <Fade bottom>
        <div className='main__advantages'>
          <div className='main__advantage'>
            <p className='main__advantage-text'>Специалисты высокой квалификации</p>
          </div>
          <div className='main__advantage'>
            <p className='main__advantage-text'>Современное оборудование<br />и технологии</p>
          </div>
          <div className='main__advantage'>
            <p className='main__advantage-text'>Дружелюбная атмосфера, комфорт и забота</p>
          </div>
          <div className='main__advantage'>
            <p className='main__advantage-text'>Широкий выбор услуг стоматологии</p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Main;