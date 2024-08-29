import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Components.css";

import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="castItem">
          <img
            src={`${apiConfig.w500Image(item.profile_path)}`}
            className="castImg"
            alt=""
          />
          <p className="castName">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
