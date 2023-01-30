import './UpButton.css';
import React from 'react';
import { animateScroll } from "react-scroll";

function UpButton() {
  function scrollToTop() {
    animateScroll.scrollToTop();
  }

  return (
    <div className='up-button__container'>
      <button type='button' className='up-button' onClick={scrollToTop}></button>
    </div>
  );
}

export default UpButton;