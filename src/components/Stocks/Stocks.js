import './Stocks.css';
import review from '../../images/stock-review.png';
import friday from '../../images/stock-friday.png';
import review320 from '../../images/stock-review-320.png';
import friday320 from '../../images/stock-friday-320.png';
import march from '../../images/stock-8march.png';
import march320 from '../../images/stock-8march-320.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

function Stocks() {

  return (
    <section className='stocks' id="stocks">
      <h2 className='stocks__title'>Акции</h2>
      <div className='stocks__content'>
        <button type='button' className='stocks__arrow stocks__arrow_left'></button>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={40}
          speed={1000}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".stocks__arrow_right",
            prevEl: ".stocks__arrow_left"
          }}
          modules={[Autoplay, Navigation]}
          className="stocks__container"
        >
          <SwiperSlide className='stocks__stock-container'>
            <img className='stocks__stock stocks__stock_desktop' src={friday} alt='Акция: Каждое утро пятницы скидка 20% на терапию под микроскопом'></img>
            <img className='stocks__stock stocks__stock_mobile' src={friday320} alt='Акция: Каждое утро пятницы скидка 20% на терапию под микроскопом'></img>
          </SwiperSlide>
          <SwiperSlide className='stocks__stock-container'>
            <img className='stocks__stock stocks__stock_desktop' src={review} alt='Акция: Нашим постоянным клиентам за отзыв на Яндексе дарим скидку 50% на профессиональную гигиену полости рта по евростандарту'></img>
            <img className='stocks__stock stocks__stock_mobile' src={review320} alt='Акция: Нашим постоянным клиентам за отзыв на Яндексе дарим скидку 50% на профессиональную гигиену полости рта по евростандарту'></img>
          </SwiperSlide>
          <SwiperSlide className='stocks__stock-container'>
            <img className='stocks__stock stocks__stock_desktop' src={march} alt='Акция: 8 марта для прекрасных дам скидки 30% на профессиональную гигиену полости рта по евростандарту, 20% на терапию'></img>
            <img className='stocks__stock stocks__stock_mobile' src={march320} alt='Акция: 8 марта для прекрасных дам скидки 30% на профессиональную гигиену полости рта по евростандарту, 20% на терапию'></img>
          </SwiperSlide>
        </Swiper>
        <button type='button' className='stocks__arrow stocks__arrow_right'></button>
      </div>
    </section>
  );
}

export default Stocks;