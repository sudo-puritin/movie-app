import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "./Components.css";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import apiConfig from "../api/apiConfig";

import tmdbApi, { movieType } from "../api/tmdbApi";
import { Button, Typography } from "@mui/material";

const HeroSlice = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="heroSlice">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {() => (
              <>
                <img
                  className="slideItemImg"
                  src={apiConfig.originalImage(item.backdrop_path)}
                  alt=""
                />
                <div className="slideItemContainer">
                  <Typography className="titleItem" variant="h3">
                    {item.title}
                  </Typography>
                  <Typography className="overviewItem" variant="h5">
                    {item.overview}
                  </Typography>
                  <Link to={`/movie/${item.id}`} className="btnDetailWrapper">
                    <Button className="btnDetail" variant="contained">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlice;
