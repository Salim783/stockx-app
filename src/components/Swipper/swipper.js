import React, { useEffect, useRef } from "react";
import './swipper.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import ImgOne from '../../Assets/converse.jpeg';

function Swipper() {
  const swiperRef = useRef(null); // Création d'une référence pour l'instance de Swiper

  useEffect(() => {
    // Stocker l'instance de Swiper dans la référence swiperRef
    swiperRef.current = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      spaceBetween: 60,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }, []);

  // Utilisation de la référence swiperRef.current si nécessaire
  // Par exemple, swiperRef.current.slideNext() pour passer à la diapositive suivante

  return (
    <section>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <img src={ImgOne} alt="Converse" />
            <div>
              <h2>Titre de l'image 1</h2>
              <p>Description de l'image 1</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Swipper;
