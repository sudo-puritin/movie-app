import React, { useState, useEffect } from "react";
import "./APage.css";

import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

import CastList from "../components/CastList";
import VideoList from "../components/VideoList";
import MovieList from "../components/MovieList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="movieContent">
            <div className="movieContentPoster">
              <img
                className="movieContentImg"
                src={`${apiConfig.originalImage(
                  item.poster_path || item.backdrop_path
                )}`}
                alt=""
              />
              <div className="movieContentInfo">
                <h1 className="title">{item.title || item.name}</h1>
                <div className="genres">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genresItem">
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p className="overview">{item.overview}</p>
                <div className="cast">
                  <div className="section_header">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={item.id} />
                </div>
              </div>
            </div>
          </div>
          <div className="videoContainer">
            <VideoList id={item.id} />
            <div className="similarMovieList">
              <div className="similarMovieListHeader">
                <h2>Similar Film</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
