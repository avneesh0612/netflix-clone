import React, { useEffect, useState } from "react";
import TypeWriter from "react-typewriter";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          <TypeWriter typing={0.5}>
            {movie?.title || movie?.name || movie?.original_name}
          </TypeWriter>
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {
            <TypeWriter typing={0.5}>
              {truncate(`${movie?.overview}`, 150)}
            </TypeWriter>
          }
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
