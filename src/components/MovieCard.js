import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";

import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

import { Button } from "@mui/material";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const backgroundImg = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );
  return (
    <Link to={link} className="movieCardWrapper">
      <div
        className="movieCard"
        width="105%"
        height="335px"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Button className="btnMovieCard">
          <i></i>
        </Button>
      </div>
      <h3 className="movieCardTitle">{item.title || item.name}</h3>
    </Link>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
