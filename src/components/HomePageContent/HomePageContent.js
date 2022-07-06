import React, { useEffect, useState } from 'react'
import "./HomePageContent.css"
import Row from './Row/Row'

function HomePageContent() {
  // image path = https://image.tmdb.org/t/p/original

  // apiKey = "1d655c4ccbc381a2086729ded33d7583"
  const API_KEY = "1d655c4ccbc381a2086729ded33d7583"
  const BASE_URL = "https://api.themoviedb.org/3"


  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])


  const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
  const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const nowPlayingMoviesApiUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;

  // function fetchTopRatedMovies() {
  //   fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => setTopRatedMovies(data.results))
  //     .catch(error => console.log(error))
  // }


  // function fetchPopularMovies() {
  //   fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => setPopularMovies(data.results))
  //     .catch(error => console.log(error))
  // }

  // function fetchNowPlayingMovies() {
  //   fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => setNowPlayingMovies(data.results))
  //     .catch(error => console.log(error))
  // }

  function callApi(url, setVariable) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVariable(data.results))
      .catch((err) => console.log(err));


  }

  useEffect(() => {
    callApi(topRatedMoviesApiUrl, setTopRatedMovies);
    callApi(popularMoviesApiUrl, setPopularMovies);
    callApi(nowPlayingMoviesApiUrl, setNowPlayingMovies);


  }, [])

  return (

    <div className="homepagecontent_container">
      {/* if there is no such array or length is zero  */}
      {topRatedMovies.length >0 && (
        <Row
        rowTitle="Top Rated Movies"
        moviesArray={topRatedMovies}
        posterPath={true}

      />)}
      
      {popularMovies.length >0 &&(
        <Row
        rowTitle="Popular Movies"
        moviesArray={popularMovies}
        posterPath={true}
      />)}

      {nowPlayingMovies.length>0 && (
        <Row
        rowTitle="Now Playing Movies"
        moviesArray={nowPlayingMovies}
        posterPath={true}
      />)}
      
      

    </div>
  );
}

export default HomePageContent