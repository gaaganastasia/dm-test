import './ContactsPage.css';
import { Link } from "react-router-dom";

function ContactsPage() {

  return (
    <section className='contacts-page'>
      <div className='contacts-page__line'></div>
      <h1 className='contacts-page__title'>Контакты</h1>
      <div className='contacts-page__content-block'>
        <div className='contacts-page__section'>
          <p className='contacts-page__text contacts-page__text_row contacts-page__text_bold'>ООО Данила - Мастер</p>
          <div className='contacts-page__row'>
            <div className='contacts-page__icon contacts-page__icon_call'></div>
            <p className='contacts-page__text contacts-page__text_row'>8(495) 654-00-51</p>
          </div>
          <div className='contacts-page__row'>
            <div className='contacts-page__icon contacts-page__icon_loc'></div>
            <p className='contacts-page__text contacts-page__text_row'>г.Москва, ул.Белореченская, д.12 м.Люблино (вход с ул.Новороссийская)</p>
          </div>
          <div className='contacts-page__row'>
            <div className='contacts__icon contacts-page__icon_mail'></div>
            <p className='contacts-page__text contacts-page__text_row'>danilamaster0607@mail.ru</p>
          </div>
          <div className='contacts-page__row'>
            <div className='contacts-page__icon contacts-page__icon_time'></div>
            <p className='contacts-page__text contacts-page__text_row'>Пн.- Вс. с 10:00 до 20:00</p>
          </div>
          <div className='contacts-page__row'>
            <div className='contacts-page__icon contacts-page__icon_time'></div>
            <p className='contacts-page__text contacts-page__text_row'>Прием граждан руководителем клиники<br />Ср. с 15:00 до 16:00</p>
          </div>
          <div className='contacts-page__desktop-section'>
            <p className='contacts-page__text'><span className="contacts-page__text_bold">Структура и органы управления клиники —</span><br />Генеральный директор Нимаев Баир Цыденович</p>
            <p className='contacts-page__text'><span className="contacts-page__text_bold">Учредители —</span> Нимаева Ж. Г.</p>
            <p className='contacts-page__text'><span className="contacts-page__text_bold">Дата и номер государственной регистрации:</span><br/>06.07.2006 г. ОГРН 1067746777790</p>
            <p className='contacts-page__text'><span className="contacts-page__text_bold">Номер и дата лицензии:</span><br/>№ Л041-01137-77/00369738 от 11.07.2013</p>
            <a href="https://drive.google.com/file/d/1DVEm9Wt8gZA-14avmF5_tBYmpcMVwZfz/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link'><span className="contacts-page__text_bold">Правила предоставления платных медицинских услуг в ООО «Данила-Мастер»</span></a>
            <a href="https://drive.google.com/file/d/1KNo6ftv_HnV6ZYrut9xaPRGcmwHsvahN/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link'><span className="contacts-page__text_bold">Политика в области обработки персональных данных ООО «Данила-Мастер»</span></a>
            <p className='contacts-page__text'><span className="contacts-page__text_bold">Политика рассмотрения жалоб:</span><br />генеральный директор лично рассматривает<br />все жалобы</p>
          </div>
        </div>
        <div className='contacts-page__section contacts-page__section_map'>
          <iframe className='contacts-page__map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae56a06ba1806ac95ed233fbd5369b480097d535423b6bdd492cc60571cc0525f&amp;source=constructor" width="730" height="440" frameBorder="0"></iframe>
          <p className='contacts-page__question'>У вас остались вопросы — напишите нам</p>
          <a href='https://api.whatsapp.com/send/?phone=74956540051' target="_blank" rel="noreferrer" className='contacts-page__btn'>
            <div className='contacts-page__btn-icon'></div>
            <p className='contacts-page__btn-text'>Записаться</p>
          </a>
        </div>
      </div>
      <div className='contacts-page__mobile-section'>
        <p className='contacts-page__text'><span className="contacts-page__text_bold">Структура и органы управления клиники —</span> Генеральный директор Нимаев Баир Цыденович</p>
        <p className='contacts-page__text'><span className="contacts-page__text_bold">Учредители —</span> Нимаева Ж. Г.</p>
        <p className='contacts-page__text'><span className="contacts-page__text_bold">Дата и номер государственной регистрации:</span><br/>06.07.2006 г. ОГРН 1067746777790</p>
        <p className='contacts-page__text'><span className="contacts-page__text_bold">Номер и дата лицензии:</span><br/>№ Л041-01137-77/00369738 от 11.07.2013</p>
        <a href="https://drive.google.com/file/d/1DVEm9Wt8gZA-14avmF5_tBYmpcMVwZfz/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link'><span className="contacts-page__text_bold">Правила предоставления платных медицинских услуг в ООО «Данила-Мастер»</span></a>
        <a href="https://drive.google.com/file/d/1KNo6ftv_HnV6ZYrut9xaPRGcmwHsvahN/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link'><span className="contacts-page__text_bold">Политика в области обработки персональных данных ООО «Данила-Мастер»</span></a>
        <p className='contacts-page__text'><span className="contacts-page__text_bold">Политика рассмотрения жалоб:</span><br />генеральный директор лично рассматривает все жалобы</p>
      </div>
      <div className='contacts-page__content-block'>
        <p className='contacts-page__content-block-title'>Контакты надзорных органов в сфере здравоохранения</p>
      </div>
      <div className='contacts-page__content-block contacts-page__content-block_info'>
        <div className='contacts-page__section contacts-page__section_info'>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Министерство здравоохранения Российской Федерации</span><br />Адрес: 127994, ГСП-4, г. Москва, Рахмановский пер., д. 3<br />Приём корреспонденций: г. Москва, ул. Неглинная, д. 25,<br />3-й подъезд, «Экспедиция»<br />Телефон справочной службы: 8(495) 628-44-53, 8(495) 627-29-44<br />Многоканальный телефон: 8(495) 627-24-00<br />Телефон для информирования о факте регистрации обращений граждан: (495) 627-29-93<br />«Горячая линия» Росздравнадзора по соблюдению прав граждан<br />в сфере охраны здоровья: 8 800 500 18 35<br />Адрес электронной почты: info@rosminzdrav.ru</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Федеральная служба по надзору в сфере здравоохранения (Росзравнадзор)</span><br />Адрес: 109074, Москва, Славянская площадь, д.4, стр.1<br />Справочная Росздравнадзора: 8(495) 698-45-38; 8(499) 578-02-30<br />Адрес электронной почты: info@roszdravnadzor.ru</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Федеральное бюджетное учреждение здравоохранения<br />«Центр гигиены и эпидемиологии в городе Москве»</span><br />Адрес: 129626, г. Москва,Графский переулок, д. 4/9<br />Телефон (круглосуточный) 8(495) 687–40–35<br />Адрес электронной почты: fguz@mossanepid.ru<br />Web: http://www.mossanexpert.ru</p>
        </div>
        <div className='contacts-page__section contacts-page__section_info'>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Департамент здравоохранения города Москвы</span><br />127006, г. Москва, Оружейный пер., д. 43<br />Многоканальный телефон: 8 (495) 777-77-77<br />Адрес электронной почты: zdrav@mos.ru</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Территориальный орган Росздравнадзора по г. Москве и Московской области</span><br />Адрес: 127206, Россия , г. Москва, ул. Вучетича, д. 12 А<br />Телефона справочной службы: 8(495) 611-47-74<br />Адрес электронной почты: office@reg77.roszdravnadzor.ru</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Федеральная служба по надзору<br />в сфере защиты прав потребителей и благополучия человека (Роспотребнадзор)</span><br />Адрес: 127994, г. Москва, Вадковский переулок,<br />дом 18, строение 5 и 7<br />Телефон: 8(499) 973-26-90<br />Горячая линия: 8-800-100-00-04<br />Адрес электронной почты: depart@gsen.ru</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Горячая линия для срочной помощи по защите прав потребителей:</span><br />8(495) 135-33-55; 8(495) 215-57-22</p>
          <p className='contacts-page__text contacts-page__text_info'><span className="contacts-page__text_bold">Общество защиты прав потребителей «Общественный контроль»:</span><br />8 (499) 241-61-03</p>
        </div>
      </div>
      <div className='contacts-page__content-block'>
        <p className='contacts-page__content-block-title'>Законы и нормативные акты в сфере здравоохранения</p>
      </div>
      <div className='contacts-page__content-block contacts-page__content-block_info'>
        <div className='contacts-page__section'>
          <a href="https://drive.google.com/file/d/1Aqgls_WuHMQf8rGB42USU4-hnzmpbZAi/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Закон об основах охраны здоровья граждан РФ</a>
          <a href="https://drive.google.com/file/d/1m-i85fzfDPENa80LFk0jK-QEjeznCSmS/view?usp=sharing" target="_blank" rel='noreferrer' className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Закон о защите прав потребителей</a>
          <a href="https://drive.google.com/file/d/1tt2dCk9_PlaFEJ24i2sH2IKFMKimvPN0/view?usp=sharing" target="_blank" rel='noreferrer' className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Закон о санитарно-эпидемиологическом благополучии населения</a>
          <a href="https://drive.google.com/file/d/1h5I46rVOcn1YhgDlww7u8bb2LVUeBxdG/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Закон о персональных данных</a>
          <a href="https://drive.google.com/file/d/1l35XbflCDcMT6_CoHwFSokFinrLs64AP/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Об утверждении правил оказания медицинской помощи иностранным гражданам на территории РФ</a>
          <a href="https://drive.google.com/file/d/1U0jXX-xnAxtFTscPF6ycmIQLLRetptuR/view?usp=sharing" target="_blank" rel="noreferrer" className='contacts-page__text contacts-page__text_link contacts-page__text_info'>Постановление N 1006 Об утверждении правил предоставления медицинскими организациями платных медицинских услуг</a>
        </div>
      </div>
      <div className='contacts-page__content-block'>
        <p className='contacts-page__content-block-caption'>Вся представленная на сайте информация, касающаяся услуг и стоимости услуг, носит информационный характер и не является публичной офертой.</p>
      </div>
    </section>
  );
}

export default ContactsPage;