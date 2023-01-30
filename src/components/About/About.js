import './About.css';
import mainPhoto from '../../images/about-photo-1.png';
import photo1 from '../../images/about-photo-2.png';
import photo2 from '../../images/about-photo-3.png';
import photo3 from '../../images/about-photo-4.png';
import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [popupAlt, setPopupAlt] = React.useState('');
  const [popupSrc, setPopupSrc] = React.useState(mainPhoto);

  function handlePopupOpen(alt, src) {
    setPopupAlt(alt);
    setPopupSrc(src)
    setIsPopupOpened(!isPopupOpened);
  }
  return (
    <section className='about' name="about" id="about">
      <div className={`about__overlay ${isPopupOpened ? 'about__overlay_visible' : ''}`}></div>
      <div className={`about__popup ${isPopupOpened ? 'about__popup_visible' : ''}`}>
        <img alt={popupAlt} src={popupSrc} className='about__popup-img'></img>
        <button type="button" onClick={() =>  setIsPopupOpened(false)} className='about__popup-close'></button>
      </div>
      <Fade top>
        <h2 className='about__title'>О клинике</h2>
      </Fade>
      <div className='about__images'>
        <Fade left>
          <img alt="Фотография стойки администрации" src={mainPhoto} onClick={() => handlePopupOpen("Фотография стойки администрации", mainPhoto)} className="about__image_main about__image_main-desktop"></img>
        </Fade>
        <Fade left>
          <img alt="Фотография стойки администрации" src={mainPhoto} className="about__image_main about__image_main-mobile"></img>
        </Fade>
        <Fade top={window.innerWidth > 900 ? true : false} bottom={window.innerWidth > 900 ? false : true}>
          <div className='about__info'>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>Вас встретит команда профессионалов, которые любят свою работу</p>
            </div>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>Нас объединяет общая цель — сохранить здоровье ваших зубов</p>
            </div>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>В своей работе используем только современные методы лечения, 
              технологии и материалы, постоянно повышаем свою квалификацию</p>
            </div>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>В нашей дружной команде есть и узкопрофильные специалисты, 
              такие как пародонтолог и гнатолог</p>
            </div>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>Мы можем вылечить только то, что видим, поэтому, используем 
              в своей работе микроскоп</p>
            </div>
            <div className='about__info-row'>
              <div className='about__info-icon'></div>
              <p className='about__info-text'>Для нас это не только работа, но и продолжение семейной династии стоматологов</p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <img alt="Фотография кабинета" src={photo1} onClick={() => handlePopupOpen("Фотография кабинета", photo1)} className='about__image about__image_desktop'></img>
          <img alt="Фотография кабинета" src={photo2} onClick={() => handlePopupOpen("Фотография кабинета", photo2)} className='about__image about__image_desktop'></img>
          <img alt="Фотография кабинета" src={photo3} onClick={() => handlePopupOpen("Фотография кабинета", photo3)} className='about__image about__image_desktop'></img>
        </Fade>
        <Fade bottom>
          <div className='about__image-list_mobile'>
            <img alt="Фотография кабинета" src={photo1} className='about__image'></img>
            <img alt="Фотография кабинета" src={photo2} className='about__image'></img>
            <img alt="Фотография кабинета" src={photo3} className='about__image'></img>
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className='about__numbers'>
          <div className='about__numbers-block'>
            <p className='about__numbers-text'><span className='about__numbers-text_bold'>19</span> лет успешной<br />стоматологической практики</p>
          </div>
          <div className='about__numbers-block'>
            <p className='about__numbers-text'><span className='about__numbers-text_bold'>21 900</span><br />вылеченных<br />зубов</p>
          </div>
          <div className='about__numbers-block'>
            <p className='about__numbers-text'><span className='about__numbers-text_bold'>2 700</span> установленных имплантов</p>
          </div>
          <div className='about__numbers-block'>
            <p className='about__numbers-text'><span className='about__numbers-text_bold'>90 %</span> наших клиентов рекомендут нас </p>
          </div>
        </div>
      </Fade>
      
    </section>
  );
}

export default About;
