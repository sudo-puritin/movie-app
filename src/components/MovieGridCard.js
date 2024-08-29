import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";

import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

import { Button } from "@mui/material";

const MovieGridCard = (props) => {
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
      <h3 className="movieGridCardTitle">{item.title || item.name}</h3>
    </Link>
  );
};

MovieGridCard.propTypes = {};

export default MovieGridCard;
