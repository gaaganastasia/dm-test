import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.innerWidth > 1280) {
      if (hash === '#about') {
        scroll.scrollTo(1000, {delay: 500});
      } if (hash === '#services') {
        scroll.scrollTo(2300, {delay: 500});
      } if (hash === '#staff') {
        scroll.scrollTo(3400, {delay: 500});
      } if (hash === '#reviews') {
        scroll.scrollTo(4900, {delay: 500});
      } if (hash === '#stocks') {
        scroll.scrollTo(5700, {delay: 500});
      }
    }
    if (window.innerWidth < 800) {
      if (hash === '#about') {
        scroll.scrollTo(900, {delay: 500});
      } if (hash === '#services') {
        scroll.scrollTo(2500, {delay: 500});
      } if (hash === '#staff') {
        scroll.scrollTo(3500, {delay: 500});
      } if (hash === '#reviews') {
        scroll.scrollTo(4150, {delay: 500});
      } if (hash === '#stocks') {
        scroll.scrollTo(4700, {delay: 500});
      }
    }
  }, [pathname]);

  return null;
}