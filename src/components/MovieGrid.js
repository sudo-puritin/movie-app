import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Components.css";

import tmdbApi, { category, movieType, tvType } from "../api/tmdbApi";
import MovieGridCard from "./MovieGridCard";
import { Button } from "@mui/material";
import MovieSearch from "./MovieSearch";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const { keyword } = useParams();

  const loadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  return (
    <>
      <MovieSearch category={props.category} keyword={keyword} />
      <div className="movieGrid">
        {items.map((item, i) => (
          <MovieGridCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movieGridLoadMore">
          <Button className="btnLoading" onClick={loadMore}>
            Load more
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;
