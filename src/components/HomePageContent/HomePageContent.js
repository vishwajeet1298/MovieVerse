import React, { useEffect, useState } from 'react'

function HomePageContent() {

    // apiKey = "1d655c4ccbc381a2086729ded33d7583"

    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=1d655c4ccbc381a2086729ded33d7583")
        .then(res => res.json())
        .then(data => setTopRatedMovies(data.results))
        .catch(error => console.log(error))
    }, [])

  return (
    <div>
        {topRatedMovies.map((value, key) => (
            <p>{value.title}</p>
        ))}
    </div>
  )
}

export default HomePageContent