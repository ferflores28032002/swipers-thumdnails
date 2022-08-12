import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css/bundle";
import "../componentes-css/SwiperThumbnails.css";
import imagenes from "../componentes/imagenes";

const SwiperThumbnails = () => {
  const [movimiento, setMovimiento] = useState();

  return (
    <div className="contenedor">
      <Swiper
        className="contenedor-swipers"
        loop={true}
        modules={[Navigation, Thumbs, EffectFade, Autoplay]}
        navigation
        thumbs={{ swiper: movimiento }}
        effect="fade"
        autoplay={{delay: 1200}}
      >
        {imagenes.map((img, x) => (
          <SwiperSlide key={x}>
            <img src={img} alt="Swiper-thumbnails" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="contenedor-swipers-2"
        loop={true}
        onSwiper={setMovimiento}
        spaceBetween={15}
        slidesPerView={3}
      >
        {imagenes.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="Swiper-thumbnails" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperThumbnails;
