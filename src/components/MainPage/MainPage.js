import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Main from "../Main/Main";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Staff from "../Staff/Staff";
import Stocks from "../Stocks/Stocks";
import UpButton from "../UpButton/UpButton";
import React from 'react';
import { useLocation } from "react-router-dom";


function MainPage(props) {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === '#about') {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    } if (location.hash === '#services') {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    } if (location.hash === '#staff') {
      document.getElementById('staff').scrollIntoView({ behavior: 'smooth' });
    } if (location.hash === '#reviews') {
      document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
    } if (location.hash === '#stocks') {
      document.getElementById('stocks').scrollIntoView({ behavior: 'smooth' });
    }

    else {
      window.scrollTo(0, 0);
    }
  }, [location.hash])

  return (
    <section>
      <Main />
      <About />
      <Services setSelectedService={(s) => props.setSelectedService(s)} />
      <Staff />
      <Reviews />
      <Stocks />
      <Contacts />
      <UpButton />
    </section>
  );
}

export default MainPage;