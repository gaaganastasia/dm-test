import './Expert.css';
import { useParams } from "react-router-dom";

import nimaevBc from '../../images/expert-nimaev-bc.png';
import nimaevBcDocKmn from '../../images/expert-doc-nimaev-bc-kmn.png';
import nimaevBcDocDmn from '../../images/expert-doc-nimaev-bc-dmn.png';

import nimaevaEv from '../../images/expert-nimaeva-ev.png';
import nimaevaEvDocDiploma from '../../images/expert-doc-nimaeva-ev-diploma.png';
import nimaevaEvDocS1 from '../../images/expert-doc-nimaeva-ev-s1.png';
import nimaevaEvDocUd from '../../images/expert-doc-nimaeva-ev-ud.png';
import nimaevaEvDocS2 from '../../images/expert-doc-nimaeva-ev-s2.png';

import nimaevAb from '../../images/expert-nimaev-ab.png';
import nimaevAbDocDiploma from '../../images/expert-doc-nimaev-ab-diploma.png';
import nimaevAbDocS1 from '../../images/expert-doc-nimaev-ab-s1.png';
import nimaevAbDocS2 from '../../images/expert-doc-nimaev-ab-s2.png';
import nimaevAbDocS3 from '../../images/expert-doc-nimaev-ab-s3.png';

import elizarovaEe from '../../images/expert-elizarova-ee.png';
import elizarovaEeDocDiploma1 from '../../images/expert-doc-elizarova-ee-diploma1.png';
import elizarovaEeDocS1 from '../../images/expert-doc-elizarova-ee-s1.png';
import elizarovaEeDocDiploma2 from '../../images/expert-doc-elizarova-ee-diploma2.png';
import elizarovaEeDocDiploma3 from '../../images/expert-doc-elizarova-ee-diploma3.png';
import elizarovaEeDocUd from '../../images/expert-doc-elizarova-ee-ud.png';

import petrovaMu from '../../images/expert-petrova-mu.png';
import petrovaMuDocDiploma from '../../images/expert-doc-petrova-mu-diploma.png';
import petrovaMuDocS1 from '../../images/expert-doc-petrova-mu-s1.png';
import petrovaMuDocS2 from '../../images/expert-doc-petrova-mu-s2.png';


function Expert() {
  let { id } = useParams();

  return (
    <section className='expert'>
      <div className='expert__line'></div>
      <div className='expert__info'>
        {
          id === '5fcc6ff4-3328-4df3-86a0-d84aec5ece4d' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <img className='expert__photo' src={nimaevBc} alt="Портрет специалиста Нимаева Баира Цыденовича"></img>
            <p className='expert__quote'>«Лучшая жизнь начинается со здоровых зубов»</p>
            <p className='expert__quote'>«Стоматолог, который поёт»</p>
          </div>
        }
        {
          id === '78a9680a-c29e-4c86-83ed-d2edc008decf' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <img className='expert__photo' src={nimaevaEv} alt="Портрет специалиста Нимаевой Евгении Владимировной"></img>
            <p className='expert__quote'>«В своей работе люблю и ценю возможность помогать людям»</p>
          </div>
        }
        {
          id === '44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <img className='expert__photo' src={nimaevAb} alt="Портрет специалиста Нимаева Аюра Баировича"></img>
            <p className='expert__quote'>«Мечтаю, чтоб люди улыбались чаще!»</p>
          </div>
        }
        {
          id === 'e3585a2a-e6b2-475f-9a0d-278308a3585c' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <img className='expert__photo' src={elizarovaEe} alt="Портрет специалиста Елизаровой Елены Эдуардовны"></img>
            <p className='expert__quote'>«Важно сохранить каждый зуб пациента»</p>
          </div>
        }
        {
          id === '3f11baac-ff21-4416-8909-793e645631c7' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <img className='expert__photo' src={petrovaMu} alt="Портрет специалиста Петровой Маргариты Юрьевны"></img>
            <p className='expert__quote'>«Эстетичная и функциональная улыбка — наш приоритет»</p>
            <p className='expert__quote'>«Уверенность в себе начинается с улыбки»</p>
          </div>
        }

        {
          id === '5fcc6ff4-3328-4df3-86a0-d84aec5ece4d' &&
          <div className='expert__info-block'>
            <h2 className='expert__name'>Нимаев<br />Баир Цыденович</h2>
            <p className='expert__job'>Доктор медицинских наук, профессор<br />Стоматолог-терапевт, хирург, ортопед</p>
            <p className='expert__seniority'>Стаж работы с 1993 года</p>
            <div className='expert__photo-block expert__photo-block_mobile'>
              <img className='expert__photo' src={nimaevBc} alt="Портрет специалиста Нимаева Баира Цыденовича"></img>
              <p className='expert__quote'>«Лучшая жизнь начинается со здоровых зубов»</p>
              <p className='expert__quote'>«Стоматолог, который поёт»</p>
            </div>
            <p className='expert__list-name'>Специализация:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>удаление зубов любой сложности</li>
              <li className='expert__list-item'>установка имплантатов</li>
              <li className='expert__list-item'>наращивание костной ткани, синуслифтинг</li>
              <li className='expert__list-item'>протезирование зубов любой сложности</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_mobile'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
            <p className='expert__list-name'>Образование:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>Читинский Государственный Медицинский институт<br />Специализация — Стоматология</li>
              <li className='expert__list-item'>Омская Государственная Медицинская Академия<br />Ординатура и аспирантура по специальности:<br />Хирургическая стоматология<br />на кафедре челюстно-лицевой хирургии</li>
              <li className='expert__list-item'>ГБУЗ МО Московский областной научно­-исследовательский<br />клинический институт имени М. Ф. Владимирского<br />Докторантура</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_desktop'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
          </div>
        }
        {
          id === '78a9680a-c29e-4c86-83ed-d2edc008decf' &&
          <div className='expert__info-block'>
            <h2 className='expert__name'>Нимаева<br />Евгения<br />Владимировна</h2>
            <p className='expert__job'>Врач стоматолог-терапевт, хирург</p>
            <p className='expert__seniority'>Стаж работы с 2010 года</p>
            <div className='expert__photo-block expert__photo-block_mobile'>
              <img className='expert__photo' src={nimaevaEv} alt="Портрет специалиста Нимаевой Евгении Владимировной"></img>
              <p className='expert__quote'>«В своей работе люблю и ценю возможность помогать людям»</p>
            </div>
            <p className='expert__list-name'>Специализация:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>удаление зубов любой сложности</li>
              <li className='expert__list-item'>установка имплантатов</li>
              <li className='expert__list-item'>лечение кариеса, пульпита, периодонтита</li>
              <li className='expert__list-item'>эстетическая реставрация зубов</li>
              <li className='expert__list-item'>подготовка к протезированию</li>
              <li className='expert__list-item'>перелечивание корневых каналов с использованием современного операционного микроскопа СJ-Optic Германия</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_mobile'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
            <p className='expert__list-name'>Образование:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>Тверская Государственная Медицинская Академия<br />Специальность — Стоматология</li>
              <li className='expert__list-item'>Интернатура на базе Красноярского государственного медицинского университета<br />Специальность — Стоматология общей практики</li>
              <li className='expert__list-item'>Клиническая ординатура на кафедре челюстно-лицевой<br />и хирургической стоматологии ОмГМА</li>
              <li className='expert__list-item'>АНО ДПО Академия инновационной стоматологии<br />Курс повышения квалификации по программе:<br />Актуальные вопросы стоматологии общей практики</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_desktop'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
          </div>
        }
        {
          id === '44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5' &&
          <div className='expert__info-block'>
            <h2 className='expert__name'>Нимаев<br />Аюр Баирович</h2>
            <p className='expert__job'>Врач стоматолог-терапевт, эндодонтист, ортопед</p>
            <p className='expert__seniority'>Стаж работы с 2012 года</p>
            <div className='expert__photo-block expert__photo-block_mobile'>
              <img className='expert__photo' src={nimaevAb} alt="Портрет специалиста Нимаева Аюра Баировича"></img>
              <p className='expert__quote'>«Мечтаю, чтоб люди улыбались чаще!»</p>
            </div>
            <p className='expert__list-name'>Специализация:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>лечение сложных зубов под микроскопом</li>
              <li className='expert__list-item'>реставрация и художественное моделирование зубов</li>
              <li className='expert__list-item'>лечение и перелечивание каналов зуба</li>
              <li className='expert__list-item'>протезирование зубов</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_mobile'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
            <p className='expert__list-name'>Образование:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>Московский Государсвенный Медико-Стоматологический Университет имени Семашко</li>
              <li className='expert__list-item'>Интернатура по стоматологии общей практике<br />в Омской Государственной Медицинской Академии</li>
              <li className='expert__list-item'>Ординатура по специальности хирургическая стоматология<br />на кафедре челюстно-лицевой хирургии<br />в Омской Государственной Медицинской Академии</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_desktop'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
          </div>
        }
        {
          id === 'e3585a2a-e6b2-475f-9a0d-278308a3585c' &&
          <div className='expert__info-block'>
            <h2 className='expert__name'>Елизарова Елена Эдуардовна</h2>
            <p className='expert__job'>Врач стоматолог-парадонтолог</p>
            <p className='expert__seniority'>Стаж работы с 2015 года</p>
            <div className='expert__photo-block expert__photo-block_mobile'>
              <img className='expert__photo' src={elizarovaEe} alt="Портрет специалиста Елизаровой Елены Эдуардовны"></img>
              <p className='expert__quote'>«Важно сохранить каждый зуб пациента»</p>
            </div>
            <p className='expert__list-name'>Специализация:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>консервативная и хирургическая пародонтология</li>
              <li className='expert__list-item'>закрытый и открытый кюретаж</li>
              <li className='expert__list-item'>пародонтологическая реабилитация</li>
              <li className='expert__list-item'>изготовление индивидуальных кап</li>
              <li className='expert__list-item'>диагностика гингивита, пародонтита и его осложнений</li>
              <li className='expert__list-item'>использование щадящих и не абразивных методов очищения налета</li>
              <li className='expert__list-item'>устранение рецессий десны путем пересадки трансплантата</li>
              <li className='expert__list-item'>хирургическое удлинение коронки зуба</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_mobile'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
            <p className='expert__list-name'>Образование:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>Московский Государственный Медико-Стоматологический Университет им. А.И. Евдокимова<br />Специальность — Стоматология</li>
              <li className='expert__list-item'>Центральная государственная медицинская академия<br />Управлении делами Презедента РФ<br />Специальность — Стоматология терапевтическая,<br />курс переподготовки</li>
              <li className='expert__list-item'>Московский Государственный Медико-Стоматологический Университет им. А.И. Евдокимова<br />Интернатура по стоматологии общей практики</li>
              <li className='expert__list-item'>ООО Межрегиональный центр подготовки медицинских кадров<br />Курс повышения квалификации по программе:<br />Актуальные вопросы стоматологии терапевтической</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_desktop'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
          </div>
        }
        {
          id === '3f11baac-ff21-4416-8909-793e645631c7' &&
          <div className='expert__info-block'>
            <h2 className='expert__name'>Петрова Маргарита<br />Юрьевна</h2>
            <p className='expert__job'>Врач стоматолог-ортодонт, гнатолог</p>
            <p className='expert__seniority'></p>
            <div className='expert__photo-block expert__photo-block_mobile'>
              <img className='expert__photo' src={petrovaMu} alt="Портрет специалиста Петровой Маргариты Юрьевны"></img>
              <p className='expert__quote'>«Эстетичная и функциональная улыбка — наш приоритет»</p>
              <p className='expert__quote'>«Уверенность в себе начинается с улыбки»</p>
            </div>
            <p className='expert__list-name'>Специализация:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>ортодонтическая консультация</li>
              <li className='expert__list-item'>подробная диагностика: снятие диагностических оттисков, изготовление гипсовых моделей челюстей, антропометрический расчёт диагностических моделей челюстей, анализ и расчёт ортопантомограммы челюстей, анализ и расчёт телерентгенограммы черепа в прямой и боковой проекциях, фотопротокол.</li>
              <li className='expert__list-item'>лечение всех форм ортодонтических аномалий</li>
              <li className='expert__list-item'>работа со всеми видами брекет-систем: металлические, керамические, сапфировые, самолигирующая и лигатурная техника</li>
              <li className='expert__list-item'>подготовка под протезирование</li>
              <li className='expert__list-item'>открытие промежутков под имплантацию</li>
              <li className='expert__list-item'>подготовка пациентов к ортогнатической хирургии</li>
              <li className='expert__list-item'>диагностика и лечение дисфункций ВНЧС</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_mobile'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
            <p className='expert__list-name'>Образование:</p>
            <ul className='expert__list'>
              <li className='expert__list-item'>Первый Московский Государственный Медицинский Университет им.Сеченова</li>
              <li className='expert__list-item'>Ординатура в Центральном научно-исследовательском институте стоматологии и челюстно-лицевой хирургии<br />Министерства здравоохранения РФ</li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='expert__link expert__link_desktop'>
              <div className='expert__link-icon'></div>
              <p className='expert__link-text'>Записаться</p>
            </a>
          </div>
        }

      </div>

      {
        id === '5fcc6ff4-3328-4df3-86a0-d84aec5ece4d' &&
        <div className='expert__docs expert__docs_center'>
          <img className='expert__doc' alt="Документ о присуждении ученой степени кандидата медицинских наук" src={nimaevBcDocKmn}></img>
          <img className='expert__doc' alt="Документ о присуждении ученой степени доктора медицинских наук" src={nimaevBcDocDmn}></img>
        </div>
      }
      {
        id === '78a9680a-c29e-4c86-83ed-d2edc008decf' &&
        <div className='expert__docs'>
          <img className='expert__doc expert__doc_v' alt="Диплом о присуждении квалификации врач-стоматолог по специальности стоматология" src={nimaevaEvDocDiploma}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология хирургическая" src={nimaevaEvDocS1}></img>
          <img className='expert__doc expert__doc_g' alt="Удостоверение о повышении квалификации по программе актуальные вопросы стоматологии общей практики" src={nimaevaEvDocUd}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология общей практики" src={nimaevaEvDocS2}></img>
        </div>
      }
      {
        id === '44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5' &&
        <div className='expert__docs'>
          <img className='expert__doc expert__doc_v' alt="Диплом о присуждении квалификации врач-стоматолог по специальности стоматология" src={nimaevAbDocDiploma}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология общей практики" src={nimaevAbDocS1}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология хирургическая" src={nimaevAbDocS2}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология ортопедическая" src={nimaevAbDocS3}></img>
        </div>
      }
      {
        id === 'e3585a2a-e6b2-475f-9a0d-278308a3585c' &&
        <div className='expert__docs'>
          <img className='expert__doc expert__doc_g' alt="Диплом о присуждении квалификации врач по специальности стоматология" src={elizarovaEeDocDiploma1}></img>
          <img className='expert__doc expert__doc_g' alt="Сертификат о допуске к осуществлению медицинской или фармацевтической деятельности по специальности стоматология общей практики" src={elizarovaEeDocS1}></img>
          <img className='expert__doc expert__doc_g' alt="Диплом о присуждении квалификации в сфере стоматология терапевтическая" src={elizarovaEeDocDiploma2}></img>
          <img className='expert__doc expert__doc_g' alt="Диплом о присуждении квалификации врач по специальности стоматология общей практики" src={elizarovaEeDocDiploma3}></img>
          <img className='expert__doc expert__doc_g' alt="Удостоверение о повышении квалификации по программе актуальные вопросы стоматологии терапевтической" src={elizarovaEeDocUd}></img>
        </div>
      }
      {
        id === '3f11baac-ff21-4416-8909-793e645631c7' &&
        <div className='expert__docs'>
          <img className='expert__doc expert__doc_v' alt="Диплом о присуждении квалификации врач-ортодонт по специальности ортодонтия" src={petrovaMuDocDiploma}></img>
          <img className='expert__doc expert__doc_g' alt="Свидетельство об аккредитации" src={petrovaMuDocS1}></img>
          <img className='expert__doc expert__doc_g' alt="Свидетельство об аккредитации" src={petrovaMuDocS2}></img>
        </div>
      }
    </section>
  );
}

export default Expert;