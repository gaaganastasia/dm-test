import { Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import Expert from '../Expert/Expert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPage from "../MainPage/MainPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { createBrowserHistory } from "history";
import './App.css';
import ContactsPage from "../ContactsPage/ContactsPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import Fade from 'react-reveal/Fade';
import NavBar from "../NavBar/NavBar";

function App() {
  const history = createBrowserHistory();

  const [selectedService, setSelectedService] = React.useState('');

  const [navState, setNavState] = React.useState(false);

  return (
    <div className="page">
      <Fade top>
        <Header history={history} navState={navState} setNavState={(n) => setNavState(n)}></Header>
      </Fade>
      <NavBar navState={navState} setNavState={(n) => setNavState(n)}></NavBar>
      
      <Routes>
        <Route path="/" element={<><ScrollToTop /> <MainPage setSelectedService={(s) => setSelectedService(s)} /></>} />

        <Route path="/expert/:id" element={<><ScrollToTop /> <Expert /></>} />

        <Route path="/contacts" element={<><ScrollToTop /> <ContactsPage /></>} />

        <Route path="/services" element={<><ScrollToTop /> <ServicesPage service={selectedService} /></>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
