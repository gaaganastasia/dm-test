import './Expert.css';
import { useParams } from "react-router-dom";


function Expert() {
  let { id } = useParams();

  return (
    <section className='expert'>
      <div className='expert__line'></div>
      <div className='expert__info'>
        {
          id === '5fcc6ff4-3328-4df3-86a0-d84aec5ece4d' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <div className='expert__photo expert__photo_nbc'></div>
            <p className='expert__quote'>«Лучшая жизнь начинается со здоровых зубов»</p>
            <p className='expert__quote'>«Стоматолог, который поёт»</p>
          </div>
        }
        {
          id === '78a9680a-c29e-4c86-83ed-d2edc008decf' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <div className='expert__photo expert__photo_nev'></div>
            <p className='expert__quote'>«В своей работе люблю и ценю возможность помогать людям»</p>
          </div>
        }
        {
          id === '44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <div className='expert__photo expert__photo_nab'></div>
            <p className='expert__quote'>«Мечтаю, чтоб люди улыбались чаще!»</p>
          </div>
        }
        {
          id === 'e3585a2a-e6b2-475f-9a0d-278308a3585c' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <div className='expert__photo expert__photo_eee'></div>
            <p className='expert__quote'>«Важно сохранить каждый зуб пациента»</p>
          </div>
        }
        {
          id === '3f11baac-ff21-4416-8909-793e645631c7' &&
          <div className='expert__photo-block expert__photo-block_desktop'>
            <div className='expert__photo expert__photo_pmu'></div>
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
              <div className='expert__photo expert__photo_nbc'></div>
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
              <div className='expert__photo expert__photo_nev'></div>
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
              <div className='expert__photo expert__photo_nab'></div>
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
              <div className='expert__photo expert__photo_eee'></div>
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
              <div className='expert__photo expert__photo_pmu'></div>
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
          <div className='expert__doc expert__doc_nbc-kmn'></div>
          <div className='expert__doc expert__doc_nbc-dmn'></div>
        </div>
      }
      {
        id === '78a9680a-c29e-4c86-83ed-d2edc008decf' &&
        <div className='expert__docs'>
          <div className='expert__doc expert__doc_v expert__doc_nev-d'></div>
          <div className='expert__doc expert__doc_g expert__doc_nev-s1'></div>
          <div className='expert__doc expert__doc_g expert__doc_nev-u'></div>
          <div className='expert__doc expert__doc_g expert__doc_nev-s2'></div>
        </div>
      }
      {
        id === '44bfe6f7-2d8c-4e42-a3d3-530b439ed5f5' &&
        <div className='expert__docs'>
          <div className='expert__doc expert__doc_v expert__doc_nab-d'></div>
          <div className='expert__doc expert__doc_g expert__doc_nab-s1'></div>
          <div className='expert__doc expert__doc_g expert__doc_nab-s2'></div>
          <div className='expert__doc expert__doc_g expert__doc_nab-s3'></div>
        </div>
      }
      {
        id === 'e3585a2a-e6b2-475f-9a0d-278308a3585c' &&
        <div className='expert__docs'>
          <div className='expert__doc expert__doc_g expert__doc_eee-d1'></div>
          <div className='expert__doc expert__doc_g expert__doc_eee-s1'></div>
          <div className='expert__doc expert__doc_g expert__doc_eee-d2'></div>
          <div className='expert__doc expert__doc_g expert__doc_eee-d3'></div>
          <div className='expert__doc expert__doc_g expert__doc_eee-u'></div>
        </div>
      }
      {
        id === '3f11baac-ff21-4416-8909-793e645631c7' &&
        <div className='expert__docs'>
          <div className='expert__doc expert__doc_v expert__doc_pmu-d'></div>
          <div className='expert__doc expert__doc_g expert__doc_pmu-s1'></div>
          <div className='expert__doc expert__doc_g expert__doc_pmu-s2'></div>
        </div>
      }
    </section>
  );
}

export default Expert;