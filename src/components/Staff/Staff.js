import './Staff.css';
import { Link } from "react-router-dom";
import photo1 from '../../images/staff-nimaev-bc.png';
import photo2 from '../../images/staff-nimaev-ab.png';
import photo3 from '../../images/staff-nimaeva-ev.png';
import photo4 from '../../images/staff-petrova-mu.png';
import photo5 from '../../images/staff-elizarova-ee.png';
import Fade from 'react-reveal/Fade';


function Staff() {

  return (
    <section className='staff' id="staff">
      <Fade left>
        <h2 className='staff__title'>Наши врачи</h2>
      </Fade>
      <Fade top>
        <p className='staff__subtitle'>Профессионалы своего дела</p>
      </Fade>
      <div className='staff__container'>
        <Fade right>
          <div className='staff__block'>
            <Link to="/expert/5fcc6ff4-3328-4df3-86a0-d84aec5ece4d" className='staff__link'>
              <img alt="Нимаев Баир Цыденович" src={photo1} className='staff__photo'></img>
              <p className='staff__name'>Нимаев Баир Цыденович</p>
            </Link>
            <p className='staff__job'>Доктор медицинских наук, профессор<br />Стоматолог-терапевт, хирург</p>
          </div>
          <div className='staff__block'>
            <Link to="/expert/3f11baac-ff21-4416-8909-793e645631c7" className='staff__link'>
              <img alt="Петрова Маргарита Юрьевна" src={photo4} className='staff__photo'></img>
              <p className='staff__name'>Петрова Маргарита Юрьевна</p>
            </Link>
            <p className='staff__job'>Стоматолог-ортодонт, гнатолог</p>
          </div>
          <div className='staff__block'>
            <Link to="/expert/44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5" className='staff__link'>
              <img alt="Нимаев Аюр Баирович" src={photo2} className='staff__photo'></img>
              <p className='staff__name'>Нимаев Аюр Баирович</p>
            </Link>
            <p className='staff__job'>Стоматолог-терапевт, эндодонтист, ортопед</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className='staff__block'>
            <Link to="/expert/e3585a2a-e6b2-475f-9a0d-278308a3585c" className='staff__link'>
              <img alt="Елизарова Елена Эдуардовна" src={photo5} className='staff__photo'></img>
              <p className='staff__name'>Елизарова Елена Эдуардовна</p>
            </Link>
            <p className='staff__job'>Стоматолог-пародонтолог</p>
          </div>
          <div className='staff__block'>
            <Link to="/expert/78a9680a-c29e-4c86-83ed-d2edc008decf" className='staff__link'>
              <img alt="Нимаева Евгения Владимировна" src={photo3} className='staff__photo'></img>
              <p className='staff__name'>Нимаева Евгения Владимировна</p>
            </Link>
            <p className='staff__job'>Стоматолог-терапевт, хирург</p>
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='staff__btn'>
          <div className='staff__btn-icon'></div>
          <p className='staff__btn-text'>Записаться</p>
        </a>
      </Fade>
    </section>
  );
}

export default Staff;
