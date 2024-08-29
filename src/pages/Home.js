import React from "react";

import "./APage.css";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import HeroSlice from "../components/HeroSlice";
import MovieList from "../components/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <div>
      <HeroSlice />
      <div className="container">
        <div className="sectionWrapper">
          <div className="sectionHeader">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <Button className="outlineButton">View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="sectionWrapper">
          <div className="sectionHeader">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <Button className="outlineButton">View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="sectionWrapper">
          <div className="sectionHeader">
            <h2>Trending TV Series</h2>
            <Link to="/tv">
              <Button className="outlineButton">View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="sectionWrapper">
          <div className="sectionHeader">
            <h2>Top Rated TV Series</h2>
            <Link to="/movie">
              <Button className="outlineButton">View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
