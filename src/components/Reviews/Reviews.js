import './Reviews.css';
import Fade from 'react-reveal/Fade';

function Reviews() {
  return (
    <section className='reviews' id="reviews">
      <Fade left>
        <h2 className='reviews__title'>Что говорят наши пациенты</h2>
      </Fade>
      <Fade duration={2000}>
        <div className='reviews__cards'>
          <div className='reviews__card'>
            <p className='reviews__info'>На мой взгляд, одна из лучших клиник. Врач от бога, можно сказать. 
            Всегда все покажет и расскажет. Всегда приятно приходить к нему на прием.</p>
            <p className='reviews__user'>Эдуард</p>
            <p className='reviews__date'>04 ноября 2022 г</p>
          </div>
          <div className='reviews__card'>
            <p className='reviews__info'>Отличная стоматология! Врач Аюр безболезненно и очень профессионально лечит зубы 
            и удаляет восьмерки, я ничего не почувствовала при удалении. Всем рекомендую! 
            Была много раз и ещё вернусь, когда потребуется. Но с таким качественным лечением, думаю не скоро :)</p>
            <p className='reviews__user'>Стефания</p>
            <p className='reviews__date'>30 ноября 2021 г</p>
          </div>
          <div className='reviews__card'>
            <p className='reviews__info'>Баир Цыденович и наш семейный врач. Наблюдаюсь у него уже больше 6 лет. 
            У него тогда клиника на Братиславской была, Аюр-дент. К нему теперь ходят и мои сестры и родители и жена. Рекомендую!</p>
            <p className='reviews__user'>Алексей</p>
            <p className='reviews__date'>01 октября 2018 г</p>
          </div>
        </div>
      </Fade>
      <Fade duration={2000}>
        <a href="https://yandex.ru/maps/213/moscow/?ll=37.763273%2C55.670723&mode=poi&poi%5Bpoint%5D=37.762713%2C55.670765&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1069476783&tab=reviews&z=17" target="_blank" className='reviews__link'>
          <p className='reviews__link-text'>Все отзывы</p>
          <div className='reviews__link-icon'></div>
        </a>
      </Fade>
      
    </section>
  );
}

export default Reviews;