import React from "react";
import "./APage.css";

import { useParams } from "react-router-dom";
import { category as cate } from "../api/tmdbApi";

import PageHeader from "../components/PageHeader";
import MovieGrid from "../components/MovieGrid";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category === cate.movie ? "Movie" : "TV Series"}</PageHeader>
      <div className="container">
        <div className="movieGridWrapper">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
