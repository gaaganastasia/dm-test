import './ServicesPage.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { Collapse } from 'react-collapse';

function ServicesPage(props) {
  const height = 'auto';
  const location = useLocation();

  React.useEffect(() => {
    if (props.service === 'k') {
      setIsKOpened(true);
      scroll.scrollTo(900);
    } if (props.service === 'd') {
      setIsDOpened(true);
      scroll.scrollTo(1000);
    } if (props.service === 't') {
      setIsTOpened(true);
      scroll.scrollTo(1100);
    } if (props.service === 'h') {
      setIsHOpened(true);
      scroll.scrollTo(1170);
    } if (props.service === 'pa') {
      setIsPaOpened(true);
      scroll.scrollTo(1270);
    } if (props.service === 'pr') {
      setIsPrOpened(true);
      scroll.scrollTo(1350);
    } if (props.service === 'i') {
      setIsIOpened(true);
      scroll.scrollTo(1450);
    } if (props.service === 'e') {
      setIsEOpened(true);
      scroll.scrollTo(1540);
    } if (props.service === 'od') {
      setIsOdOpened(true);
      scroll.scrollTo(1620);
    } if (props.service === 'g') {
      setIsGOpened(true);
      scroll.scrollTo(1720);
    } if (props.service === 'l') {
      setIsLOpened(true);
      scroll.scrollTo(1800);
    } if (props.service === 'op') {
      setIsOpOpened(true);
      scroll.scrollTo(1890);
    } 
  }, [location.pathname]);

  const [isKOpened, setIsKOpened] = React.useState(false);
  const [isDOpened, setIsDOpened] = React.useState(false);
  const [isTOpened, setIsTOpened] = React.useState(false);
  const [isHOpened, setIsHOpened] = React.useState(false);
  const [isPaOpened, setIsPaOpened] = React.useState(false);
  const [isPrOpened, setIsPrOpened] = React.useState(false);
  const [isIOpened, setIsIOpened] = React.useState(false);
  const [isEOpened, setIsEOpened] = React.useState(false);
  const [isOdOpened, setIsOdOpened] = React.useState(false);
  const [isGOpened, setIsGOpened] = React.useState(false);
  const [isLOpened, setIsLOpened] = React.useState(false);
  const [isOpOpened, setIsOpOpened] = React.useState(false);

  return (
    <div className='services-page'>
      <section className='services-page__main'>
        <p className='services-page__main-title'>Качество нашей работы выше наших цен</p>
      </section>
      <section className='services-page__services'>
        <p className='services-page__services-title'>Услуги и цены</p>

        <div className='services-page__section'>
          <div className={`services-page__section-header ${isKOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Консультация</p>
            <button type="button" className={`services-page__section-button ${isKOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsKOpened(!isKOpened)}></button>
          </div>
          <Collapse isOpened={isKOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.063.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-ортодонта первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.063.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-ортодонта повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-терапевта первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-терапевта повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) гигиениста стоматологического первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) гигиениста стоматологического повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.065.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.066.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-ортопеда первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.066.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-ортопеда повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.067.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-хирурга первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.067.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-стоматолога-хирурга повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isKOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsKOpened(!isKOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isDOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Диагностика и исследования</p>
            <button type="button" className={`services-page__section-button ${isDOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsDOpened(!isDOpened)}></button>
          </div>
          <Collapse isOpened={isDOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A05.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>{window.innerWidth > 900 ? 'Электроодонтометрия зуба (ЭОД)' : 'Электроодонто-метрия зуба (ЭОД)'}</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.021</p>
                <p className='services-page__service-text services-page__service-text_name'>Получение содержимого пародонтального кармана</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.026</p>
                <p className='services-page__service-text services-page__service-text_name'>Взятие образца биологического материала из очагов поражения органов рта</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А12.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Витальное окрашивание твердых тканей зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Осмотр полости рта с помощью дополнительных инструментов</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование кариозных полостей с использованием стоматологического зонда</p>
                <p className='services-page__service-text services-page__service-text_price'>300</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование зубодесневых карманов с помощью пародонтологического зонда</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Антропометрические исследования</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Термодиагностика зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение прикуса</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.006.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение вида смыкания зубных рядов с помощью лицевой дуги</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Перкуссия зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение степени патологической подвижности зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование на диагностических моделях челюстей</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.013</p>
                <p className='services-page__service-text services-page__service-text_name'>Функциональные жевательные пробы</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>ВОЗ.003.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Комплекс исследований предоперационный для проведения планового оперативного вмешательства</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>В03.003.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Мониторинг основных параметров жизнедеятельности пациента во время проведения анестезии</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.010.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.004.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Антропометрические исследования с компьютерным моделированием и эстетическое планирование будущей улыбки по реальным фотографиям в программе DigitalSmileDesigne</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.004.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Антропометрические исследования (медицинское фотографирование)</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A11.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Биопсия слизистых полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A12.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение индексов гигиены полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A12.07.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение пародонтальных индексов</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A01.07.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение степени открывания рта и ограничения подвижности нижней челюсти</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Рентгенология</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А06.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Прицельная внутриротовая контактная рентгенография</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А06.30.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Описание и интерпретация рентгенографических изображений</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isDOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsDOpened(!isDOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isTOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Терапия</p>
            <button type="button" className={`services-page__section-button ${isTOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsTOpened(!isTOpened)}></button>
          </div>
          <Collapse isOpened={isTOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Физиотерапия</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А20.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Гидроорошение при заболевании полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Воздействие лазерным низкоинтенсивным излучением на область десен</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Анестезия, инъекции, наркоз</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.003.004.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Местная анестезия</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.003.004.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Проводниковая анестезия</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.003.004.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Аппликационная анестезия</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.003.004.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Инфильтрационная анестезия</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A25.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение лекарственных препаратов при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>800</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Восстановление зуба пломбой</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.082</p>
                <p className='services-page__service-text services-page__service-text_name'>Сошлифовывание твердых тканей зуба при лечении кариеса и его осложнений</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой I, II, III, V, VI класс по Блэку с использованием стоматологических цементов</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой I, II, III, V, VI класс по Блэку с использованием материалов химического отверждения</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием стоматологических цементов</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А 16.07.002.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов химического отверждения</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой IV класс по Блэку с использованием стеклоиономерных цементов</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой IV класс по Блэку с использованием материалов химического отверждения</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение временной пломбы</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.011</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>13 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>16 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.003.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба вкладками, виниром, полукоронкой из фотополимерного материала прямым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>12 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.025.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Избирательное полирование зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>800</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.031</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбировочными материалами с использованием анкерных (титановых) штифтов</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.032</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой с использованием композитной культевой вкладки на анкерном/титановом штифте</p>
                <p className='services-page__service-text services-page__service-text_price'>23 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.092</p>
                <p className='services-page__service-text services-page__service-text_name'>Трепанация зуба, искусственной коронки</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Лечение осложнений кариеса (эндодонтическое лечение корневых каналов)</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Экстирпация пульпы</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Пульпотомия (ампутация коронковой пульпы)</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Ультразвуковое расширение корневого канала зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.082.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Распломбировка корневого канала ранее леченного пастой</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.082.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формальдегидным методом</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030</p>
                <p className='services-page__service-text services-page__service-text_name'>Инструментальная и медикаментозная обработка корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Инструментальная и медикаментозная обработка хорошо проходимого корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Инструментальная и медикаментозная обработка плохо проходимого корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Пломбирование корневого канала зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Пломбирование корневого канала зуба пастой</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Пломбирование корневого канала зуба гуттаперчевыми штифтами</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Закрытие перфорации стенки корневого канала зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Временное пломбирование лекарственным препаратом корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.093</p>
                <p className='services-page__service-text services-page__service-text_name'>Фиксация внутриканального штифта/вкладки</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.094</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление внутриканального штифта/вкладки</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.002.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение временной пломбы</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.091</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие временной пломбы</p>
                <p className='services-page__service-text services-page__service-text_price'>200</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isTOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsTOpened(!isTOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isHOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Хирургия</p>
            <button type="button" className={`services-page__section-button ${isHOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsHOpened(!isHOpened)}></button>
          </div>
          <Collapse isOpened={isHOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.025</p>
                <p className='services-page__service-text services-page__service-text_name'>Промывание протока слюнной железы</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А15.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение иммобилизационной повязки при вывихах (подвывихах) зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А15.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение повязки при операциях в полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.001.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление временного зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.001.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление постоянного зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.001.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление зуба сложное с разъединением корней</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Резекция верхушки корня</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.011</p>
                <p className='services-page__service-text services-page__service-text_name'>Вскрытие подслизистого или поднадкостничного очага воспаления в полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Вскрытие и дренирование одонтогенного абсцесса</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.013</p>
                <p className='services-page__service-text services-page__service-text_name'>Отсроченный кюретаж лунки удаленного зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.014</p>
                <p className='services-page__service-text services-page__service-text_name'>Вскрытие и дренирование абсцесса полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.015</p>
                <p className='services-page__service-text services-page__service-text_name'>Вскрытие и дренирование очага воспаления мягких тканей лица или дна полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.016</p>
                <p className='services-page__service-text services-page__service-text_name'>Цистотомия или цистэктомия</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.017</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика альвеолярного отростка</p>
                <p className='services-page__service-text services-page__service-text_price'>30 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.017.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция объема и формы альвеолярного отростка с использованием контракционно-дистракционных аппаратов</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.017.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция объема и формы альвеолярного отростка</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.024</p>
                <p className='services-page__service-text services-page__service-text_name'>Операция удаления ретинированного, дистопированного или сверхкомплектного зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.025</p>
                <p className='services-page__service-text services-page__service-text_name'>Избирательное пришлифовывание твердых тканей зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.026</p>
                <p className='services-page__service-text services-page__service-text_name'>Гингивэктомия</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.038</p>
                <p className='services-page__service-text services-page__service-text_name'>Открытый кюретаж при заболеваниях пародонта в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.039</p>
                <p className='services-page__service-text services-page__service-text_name'>Закрытый кюретаж при заболеваниях пародонта в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.040</p>
                <p className='services-page__service-text services-page__service-text_name'>Лоскутная операция в полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.042</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика уздечки верхней губы</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.043</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика уздечки нижней губы</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.044</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика уздечки языка</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.045</p>
                <p className='services-page__service-text services-page__service-text_name'>Вестибулопластика</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.055</p>
                <p className='services-page__service-text services-page__service-text_name'>Синус-лифтинг (костная пластика, остеопластика)</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.058</p>
                <p className='services-page__service-text services-page__service-text_name'>Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.059</p>
                <p className='services-page__service-text services-page__service-text_name'>Гемисекция зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>11 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.060</p>
                <p className='services-page__service-text services-page__service-text_name'>Коронарно-радикулярная сепарация</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.063</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика альвеолярного отростка верхней челюсти</p>
                <p className='services-page__service-text services-page__service-text_price'>от 3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.089</p>
                <p className='services-page__service-text services-page__service-text_name'>Гингивопластика</p>
                <p className='services-page__service-text services-page__service-text_price'>5 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.090</p>
                <p className='services-page__service-text services-page__service-text_name'>Гингивотомия</p>
                <p className='services-page__service-text services-page__service-text_price'>6 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.095</p>
                <p className='services-page__service-text services-page__service-text_name'>Остановка луночного кровотечения без наложения швов</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.095.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Остановка луночного кровотечения без наложения швов методом тампонады</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.095.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Остановка луночного кровотечения без наложения швов с использованием гемостатических материалов</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.096</p>
                <p className='services-page__service-text services-page__service-text_name'>Пластика перфорации верхнечелюстной пазухи</p>
                <p className='services-page__service-text services-page__service-text_price'>20 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.097</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение шва на слизистую оболочку рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А25.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение лекарственных препаратов при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>300</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isHOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsHOpened(!isHOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isPaOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Пародонтология</p>
            <button type="button" className={`services-page__section-button ${isPaOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsPaOpened(!isPaOpened)}></button>
          </div>
          <Collapse isOpened={isPaOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование зубодесневых карманов с помощью пародонтологического зонда</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Введение лекарственных препаратов в пародонтальный карман</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Ультразвуковая обработка пародонтального кармана в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>400</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.020.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление наддесневых и поддесневых зубных отложений в области зуба ручным методом (КЮРЕТАЖ)</p>
                <p className='services-page__service-text services-page__service-text_price'>600</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.020</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление наддесневых и поддесневых зубных отложений</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А20.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Гидроорошение при заболевании полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Воздействие ультразвуком на область десен</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А15.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Наложение лечебной повязки при заболеваниях слизистой оболочки полости рта и пародонта в области одной челюсти</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Шинирование зубов</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.019</p>
                <p className='services-page__service-text services-page__service-text_name'>Временное шинирование при заболеваниях пародонта (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>от 6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.037</p>
                <p className='services-page__service-text services-page__service-text_name'>Постоянное шинирование цельнолитыми съемными конструкциями при заболеваниях пародонта (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>60 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isPaOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsPaOpened(!isPaOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isPrOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Протезирование</p>
            <button type="button" className={`services-page__section-button ${isPrOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsPrOpened(!isPrOpened)}></button>
          </div>
          <Collapse isOpened={isPrOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Несъемное протезирование</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.082</p>
                <p className='services-page__service-text services-page__service-text_name'>Сошлифовывание твердых тканей зуба для последующего восстановления вкладкой, накладкой, полукоронкой, коронкой, виниром</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой временной прямым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой временной композитной фрезерованной лабораторным методом</p>
                <p className='services-page__service-text services-page__service-text_price'>3 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой постоянной цельнометаллической или металлокерамической стандартной</p>
                <p className='services-page__service-text services-page__service-text_price'>16 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой постоянной металлокерамической с плечевой массой и индивидуальным воспроизведением эстетики на зубы в линии улыбки</p>
                <p className='services-page__service-text services-page__service-text_price'>17 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой постоянной безметалловой из диоксида циркония стандартная эстетика (метод окрашивания)</p>
                <p className='services-page__service-text services-page__service-text_price'>30 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.004.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой постоянной безметалловой цельнокерамической диоксид циркония или Имакс с индивидуальной эстетикой (метод нанесения)</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.003.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба вкладкой, виниром, полукоронкой из материала Имакс или диоксид циркония с индивидуальной эстетикой</p>
                <p className='services-page__service-text services-page__service-text_price'>38 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.003.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба вкладкой, виниром, полукоронкой из материала Имакс (рефрактор)</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.033.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой с использованием цельнолитой культевой вкладки</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.033.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба коронкой с использованием цельнолитой культевой вкладки, облицованной керамикой Имакс</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.052</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зубов штифтовыми зубами временное (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A11.07.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Глубокое фторирование твердых тканей зубов для сохранения витальности при сошлифовывании твердых тканей под ортопедическую конструкцию (1 зуб)</p>
                <p className='services-page__service-text services-page__service-text_price'>3 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Съемные протезы</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.021</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.021.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций – сплинт</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.021.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций – каппа</p>
                <p className='services-page__service-text services-page__service-text_price'>от 35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.035.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование частичными съемными пластиночными протезами (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.035.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование частичными съемными пластиночными протезами с армированием (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>28 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.023.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зубов полными съемными пластиночными протезами (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>30 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.023.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зубов полными съемными пластиночными протезами с армированием</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.036.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование съемными бюгельными протезами с кламмерной фиксацией (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.036.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование съемными бюгельными протезами с замковой фиксацией (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>55 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.036.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование съемными бюгельными протезами с телескопической фиксацией (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>50 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.037</p>
                <p className='services-page__service-text services-page__service-text_name'>Постоянное шинирование цельнолитыми съемными конструкциями при заболеваниях пародонта (шинирующий бюгель на 1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>60 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.034</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление целостности зубного ряда съемными мостовидными протезами с телескопической фиксацией (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>45 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.035.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование частичными съемными пластиночными протезами из нейлона (1 челюсть)</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.035.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование частичными съемными пластиночными протезами для временного замещения 1-3 отсутствующих зубов (иммедиат-протез)</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.035.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование частичными съемными пластиночными протезами для временного замещения 4-6 отсутствующих зубов (иммедиат-протез)</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Лабораторные конструкции</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление зуба литого металлического в несъемной конструкции протеза</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление контрольной, огнеупорной модели</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление зуба пластмассового простого</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление спайки</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление съемного протеза из термопластического материала</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление кламмера гнутого из стальной проволоки</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление армированной дуги литой</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.013</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление фасетки литой (металлической)</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.014</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление базиса бюгельного протеза с пластмассовыми зубами</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.015</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление бюгельного каркаса</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.016</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление огнеупорной модели</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.017</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление литого базиса</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.018</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление кламмера Роуча</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.019</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление литого опорно-удерживающего кламмера</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.020</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление литого опорно-удерживающего кламмера</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.022</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление седла бюгельного протеза</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.024</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление фасетки в бюгельном протезе</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.025</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление зуба литого в бюгельном протезе</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.026</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление лапки шинирующей в бюгельном протезе</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.027</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление контрольной модели</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.028</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки цельнолитой</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.030</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки пластмассовой</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.031</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки металлической штампованной</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.032</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление комбинированной коронки</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.033</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление частичного съемного протеза</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.034</p>
                <p className='services-page__service-text services-page__service-text_name'>Перебазировка съемного протеза лабораторным методом</p>
                <p className='services-page__service-text services-page__service-text_price'>3 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.035</p>
                <p className='services-page__service-text services-page__service-text_name'>Приварка кламмера</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.036</p>
                <p className='services-page__service-text services-page__service-text_name'>Приварка зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.037</p>
                <p className='services-page__service-text services-page__service-text_name'>Починка перелома базиса самотвердеющей пластмассой</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.038</p>
                <p className='services-page__service-text services-page__service-text_name'>Починка двух переломов базиса самотвердеющей пластмассой</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.039</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление эластичной прокладки (лабораторный метод)</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.040</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление полного съемного пластинчатого протеза</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.041</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки телескопической</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.042</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление одного элемента к съемной пластинке</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.043</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление боксерской шины</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.044</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление воскового валика</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.045</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление дуги вестибулярной с дополнительными изгибами</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.046</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление замкового крепления</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.049</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление зуба металлокерамического</p>
                <p className='services-page__service-text services-page__service-text_price'>16 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.050</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление зуба пластмассового сложного</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.051</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление кольца ортодонтического</p>
                <p className='services-page__service-text services-page__service-text_price'>12 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.052</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление контрольной модели с оформлением цоколя</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.053</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки бюгельной</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.054</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки металлокерамической (фарфоровой)</p>
                <p className='services-page__service-text services-page__service-text_price'>18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.055</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление коронки ортодонтической</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.056</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление окклюзионной накладки в мостовидном протезе</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.058</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление пластинки вестибулярной</p>
                <p className='services-page__service-text services-page__service-text_price'>от 20 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.059</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление пластинки с заслоном для языка (без Кламмеров)</p>
                <p className='services-page__service-text services-page__service-text_price'>от 15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.060</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление пластинки с окклюзионными накладками</p>
                <p className='services-page__service-text services-page__service-text_price'>18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.061</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление позиционера</p>
                <p className='services-page__service-text services-page__service-text_price'>от 9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.062</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление полного съемного протеза с фарфоровыми зубами</p>
                <p className='services-page__service-text services-page__service-text_price'>80 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.063</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление съемной пластинки из пластмассы без элементов (накусочной пластинки)</p>
                <p className='services-page__service-text services-page__service-text_price'>18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.064</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление штифтовой конструкции</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.065</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление элайнера</p>
                <p className='services-page__service-text services-page__service-text_price'>от 70 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.067</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление частичного съемного протеза с фарфоровыми зубами</p>
                <p className='services-page__service-text services-page__service-text_price'>100 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.068</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление съемной пластинки с наклонной плоскостью</p>
                <p className='services-page__service-text services-page__service-text_price'>45 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.071</p>
                <p className='services-page__service-text services-page__service-text_name'>Изготовление сложного челюстного протеза</p>
                <p className='services-page__service-text services-page__service-text_price'>от 60 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002.072</p>
                <p className='services-page__service-text services-page__service-text_name'>Установка крепления в конструкцию съемного протеза при протезировании на имплантатах</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isPrOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsPrOpened(!isPrOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isIOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Имплантация</p>
            <button type="button" className={`services-page__section-button ${isIOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsIOpened(!isIOpened)}></button>
          </div>
          <Collapse isOpened={isIOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Протезирование с опорой на имплантаты</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата коронкой постоянной безметалловой из диоксида циркония с винтовой фиксацией (стандартная эстетика)</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата коронкой постоянной безметалловой из диоксида циркония с винтовой фиксацией (индивидуальная эстетика)</p>
                <p className='services-page__service-text services-page__service-text_price'>55 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата коронкой постоянной безметалловой цельнокерамической Имакс (стандартная эстетика)</p>
                <p className='services-page__service-text services-page__service-text_price'>50 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата коронкой постоянной безметалловой цельнокерамической Имакс (индивидуальная эстетика) с цементной фиксацией на титановом абатменте</p>
                <p className='services-page__service-text services-page__service-text_price'>60 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата коронкой постоянной безметалловой цельнокерамической Имакс с цементной фиксацией (индивидуальная эстетика) на циркониевом абатменте</p>
                <p className='services-page__service-text services-page__service-text_price'>60 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата индивидуальным циркониевым абатментом с титановым основанием (без стоимости коронки)</p>
                <p className='services-page__service-text services-page__service-text_price'>20 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата индивидуальным титановым абатментом (без стоимости коронки)</p>
                <p className='services-page__service-text services-page__service-text_price'>12 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.006.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зуба с использованием имплантата временной коронкой с винтовой или цементной фиксацией (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Съемное протезирование с опорой на имплантаты</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.023.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зубов полными съемными пластиночными протезами (1 челюсть) с опорой на имплантаты на 4х локаторах</p>
                <p className='services-page__service-text services-page__service-text_price'>90 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.023.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зубов полными съемными пластиночными протезами (1 челюсть) с опорой на имплантаты на 4х шаровидных абатментах</p>
                <p className='services-page__service-text services-page__service-text_price'>100 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.023.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Протезирование зубов полными съемными пластиночными протезами (1 челюсть) с опорой на имплантаты на фрезерованной балке</p>
                <p className='services-page__service-text services-page__service-text_price'>95 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Имплантация (хирургическая часть)</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.054</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация</p>
                <p className='services-page__service-text services-page__service-text_price'>90 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.054.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация системы «Bicon» (США) для дальнейшего зубопротезирования</p>
                <p className='services-page__service-text services-page__service-text_price'>65 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.054.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация системы «Осстем» (Ю. Корея)</p>
                <p className='services-page__service-text services-page__service-text_price'>40 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.054.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация системы «SuperLine» (США)</p>
                <p className='services-page__service-text services-page__service-text_price'>35 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.054.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация временного имплантата или мини-имплантата</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.054.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Внутрикостная дентальная имплантация ортодонтического имплантата</p>
                <p className='services-page__service-text services-page__service-text_price'>15 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isIOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsIOpened(!isIOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isEOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Эстетическая стоматология</p>
            <button type="button" className={`services-page__section-button ${isEOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsEOpened(!isEOpened)}></button>
          </div>
          <Collapse isOpened={isEOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.022</p>
                <p className='services-page__service-text services-page__service-text_name'>Аппликация лекарственного препарата на слизистую оболочку полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.024</p>
                <p className='services-page__service-text services-page__service-text_name'>Местное применение реминерализующих препаратов в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Глубокое фторирование эмали зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А14.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Гигиена полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А14.07.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Обучение гигиене полости рта и зубов индивидуальное, подбор средств и предметов гигиены полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.051</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональная гигиена полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А25.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение диетического питания при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А25.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение лечебно-оздоровительного режима при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>В04.070.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Школа психологической профилактики для пациентов и родственников (адаптивный прием)</p>
                <p className='services-page__service-text services-page__service-text_price'>0</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.057</p>
                <p className='services-page__service-text services-page__service-text_name'>Запечатывание фиссуры зуба герметиком</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.050.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональное отбеливание зубов клиническое часовое за один визит (2 челюсти в линии улыбки) аппаратом ZOOM-4</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.050.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональное отбеливание зубов внутрикоронковое для невитальных измененных в цвете зубов (1 зуб)</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.011</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isEOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsEOpened(!isEOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isOdOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Ортодонтия</p>
            <button type="button" className={`services-page__section-button ${isOdOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsOdOpened(!isOdOpened)}></button>
          </div>
          <Collapse isOpened={isOdOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.063.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-ортодонта первичный</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>B01.063.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Прием (осмотр, консультация) врача-ортодонта повторный</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A06.30.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Трехмерная компьютерная диагностика будущего результата ортодонтического лечения с помощью брекетов или Инвизилайн</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.004.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Описание и интерпретация рентгенографических изображений ТРГ (1 снимок)</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.046</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция несъемным ортодонтическим аппаратом</p>
                <p className='services-page__service-text services-page__service-text_price'>от 25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.046.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция несъемным ортодонтическим аппаратом.....</p>
                <p className='services-page__service-text services-page__service-text_price'>от 25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.047</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция съемным ортодонтическим аппаратом</p>
                <p className='services-page__service-text services-page__service-text_price'>от 18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.047.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция съемным ортодонтическим аппаратом.....</p>
                <p className='services-page__service-text services-page__service-text_price'>от 18 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-систем</p>
                <p className='services-page__service-text services-page__service-text_price'>от 85 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-системы металлической</p>
                <p className='services-page__service-text services-page__service-text_price'>от 85 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-системы керамической</p>
                <p className='services-page__service-text services-page__service-text_price'>от 95 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-системы сапфировой</p>
                <p className='services-page__service-text services-page__service-text_price'>от 135 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-системы лингвальной стандартной</p>
                <p className='services-page__service-text services-page__service-text_price'>250 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.048.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция с применением брекет-системы лингвальной индивидуальной</p>
                <p className='services-page__service-text services-page__service-text_price'>250 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.017.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция объема и формы альвеолярного отростка с использованием контракционно-дистракционных аппаратов</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.018</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическое скрепление металлической проволокой</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.028</p>
                <p className='services-page__service-text services-page__service-text_name'>Ортодонтическая коррекция</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.021</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций</p>
                <p className='services-page__service-text services-page__service-text_price'>от 8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.025.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Полирование ортодонтической конструкции</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.049</p>
                <p className='services-page__service-text services-page__service-text_name'>Повторная фиксация на постоянный цемент несъемных ортопедических конструкций</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие несъемной ортопедической конструкции</p>
                <p className='services-page__service-text services-page__service-text_price'>12 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие, постановка коронки, кольца ортодонтических</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Распил ортодонтического аппарата через винт</p>
                <p className='services-page__service-text services-page__service-text_price'>от 5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Припасовка и наложение ортодонтического аппарата</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>В04.063.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Профилактический прием (осмотр, консультация) врача-ортодонта</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Услуги по обслуживанию ортодонтических аппаратов</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.001.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Коррекция съемного ортодонтического аппарата</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.001.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Ремонт ортодонтического аппарата</p>
                <p className='services-page__service-text services-page__service-text_price'>от 5 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isOdOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsOdOpened(!isOdOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isGOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Гигиена</p>
            <button type="button" className={`services-page__section-button ${isGOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsGOpened(!isGOpened)}></button>
          </div>
          <Collapse isOpened={isGOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.022</p>
                <p className='services-page__service-text services-page__service-text_name'>Аппликация лекарственного препарата на слизистую оболочку полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.024</p>
                <p className='services-page__service-text services-page__service-text_name'>Местное применение реминерализующих препаратов в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А11.07.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Глубокое фторирование эмали зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А14.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Гигиена полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А14.07.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Обучение гигиене полости рта и зубов индивидуальное, подбор средств и предметов гигиены полости рта</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А22.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.051</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональная гигиена полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>8 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А25.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение диетического питания при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А25.07.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Назначение лечебно-оздоровительного режима при заболеваниях полости рта и зубов</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>В04.070.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Школа психологической профилактики для пациентов и родственников (адаптивный прием)</p>
                <p className='services-page__service-text services-page__service-text_price'>0</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.057</p>
                <p className='services-page__service-text services-page__service-text_name'>Запечатывание фиссуры зуба герметиком</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.050.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональное отбеливание зубов клиническое часовое за один визит (2 челюсти в линии улыбки) аппаратом ZOOM-4</p>
                <p className='services-page__service-text services-page__service-text_price'>25 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.050.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Профессиональное отбеливание зубов внутрикоронковое для невитальных измененных в цвете зубов (1 зуб)</p>
                <p className='services-page__service-text services-page__service-text_price'>4 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isGOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsGOpened(!isGOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isLOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Лечение под микроскопом</p>
            <button type="button" className={`services-page__section-button ${isLOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsLOpened(!isLOpened)}></button>
          </div>
          <Collapse isOpened={isLOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.002.012</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров</p>
                <p className='services-page__service-text services-page__service-text_price'>16 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Пульпотомия (ампутация коронковой пульпы)</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030</p>
                <p className='services-page__service-text services-page__service-text_name'>Инструментальная и медикаментозная обработка корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.003.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Восстановление зуба вкладками, виниром, полукоронкой из фотополимерного материала прямым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>20 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.082.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Распломбировка корневого канала ранее леченного пастой</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.082.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формальдегидным методом</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Пломбирование корневого канала зуба пастой</p>
                <p className='services-page__service-text services-page__service-text_price'>7 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Пломбирование корневого канала зуба гуттаперчевыми штифтами</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.008.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Закрытие перфорации стенки корневого канала зуба</p>
                <p className='services-page__service-text services-page__service-text_price'>10 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А16.07.030.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Временное пломбирование лекарственным препаратом корневого канала</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.093</p>
                <p className='services-page__service-text services-page__service-text_name'>Фиксация внутриканального штифта/вкладки</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.094</p>
                <p className='services-page__service-text services-page__service-text_name'>Удаление внутриканального штифта/вкладки/инструмента</p>
                <p className='services-page__service-text services-page__service-text_price'>9 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isLOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsLOpened(!isLOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='services-page__section'>
          <div className={`services-page__section-header ${isOpOpened && 'services-page__section-header_opened'}`}>
            <p className='services-page__section-name'>Ортопедия</p>
            <button type="button" className={`services-page__section-button ${isOpOpened && 'services-page__section-button_rotated'}`} onClick={() => setIsOpOpened(!isOpOpened)}></button>
          </div>
          <Collapse isOpened={isOpOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="services-page__section-content">
              <div className='services-page__service services-page__service_header'>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_code'>Код</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_name'>Наименование услуги</p>
                <p className='services-page__service-text services-page__service-text_header services-page__service-text_price'>Цена, руб.</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Оттиски</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти альгинатной массой</p>
                <p className='services-page__service-text services-page__service-text_price'>1 200</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти массой из С-силикона</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.004</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти массой из А-силикона</p>
                <p className='services-page__service-text services-page__service-text_price'>1 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.005</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти массой из поливинилсилоксана</p>
                <p className='services-page__service-text services-page__service-text_price'>2 500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти с использованием индивидуальной ложки</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.007</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти ложки с имплантатов открытым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.008</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти с имплантатов закрытым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.009</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти с использованием индивидуальной ложки с имплантатов открытым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти с использованием индивидуальной ложки с имплантатов закрытым методом</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010.011</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие оттиска с одной челюсти для изготовления силиконового ключа</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Модели, прикус</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.006</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение прикуса</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.006.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение вида смыкания зубных рядов с помощью лицевой дуги</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А02.07.010</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование на диагностических моделях челюстей</p>
                <p className='services-page__service-text services-page__service-text_price'>3 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.010.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Исследование на диагностических моделях челюстей с восковой моделировкой (Wax-Up) будущей ортопедической конструкции с целью планирования препарирования, эстетики и функции (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A02.07.006.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Определение прикуса при помощи примерки в полости рта результата воскового моделирования (Moke-Up) из временного композитного материала, планирования эстетики и функции (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>1 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_title'>Прочие ортопедические услуги</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие несъемной ортопедической конструкции (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.092</p>
                <p className='services-page__service-text services-page__service-text_name'>Трепанация зуба, искусственной коронки</p>
                <p className='services-page__service-text services-page__service-text_price'>6 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.025</p>
                <p className='services-page__service-text services-page__service-text_name'>Избирательное пришлифовывание твердых тканей зубов (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>800</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.049.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Повторная фиксация на постоянный цемент несъемных ортопедических конструкций (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.049.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Повторная фиксация на постоянный цемент несъемных ортопедических конструкций с опорой на имплантаты (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>5 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.049.003</p>
                <p className='services-page__service-text services-page__service-text_name'>Повторная фиксация на временный цемент несъемных ортопедических конструкций (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053.001</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие несъемной ортопедической конструкции постоянной (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>2 000</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>A16.07.053.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Снятие несъемной ортопедической конструкции временной (1 единица)</p>
                <p className='services-page__service-text services-page__service-text_price'>500</p>
              </div>
              <div className='services-page__service'>
                <p className='services-page__service-text services-page__service-text_code'>А23.07.002</p>
                <p className='services-page__service-text services-page__service-text_name'>Услуги по изготовлению ортопедической конструкции стоматологической</p>
                <p className='services-page__service-text services-page__service-text_price'>от 6 000</p>
              </div>
              <div className='services-page__section-caption'>
                <p className='services-page__section-caption-text'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
                <button type="button" className={`services-page__section-caption-button ${isOpOpened && 'services-page__section-caption-button_rotated'}`} onClick={() => setIsOpOpened(!isOpOpened)}></button>
              </div>
            </div>
          </Collapse>
        </div>
        <a href="https://api.whatsapp.com/send/?phone=74956540051" target="_blank" rel="noreferrer" className='services-page__btn'>
          <div className='services-page__btn-icon'></div>
          <p className='services-page__btn-text'>Записаться</p>
        </a>
        <p className='services-page__services-caption'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой</p>
      </section>
    </div>
  );
}

export default ServicesPage;