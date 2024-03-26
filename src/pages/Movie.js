import {getMovieList} from '../apis/movie'
import { useEffect, useState } from "react";
import MovieCard from './MovieCard';



function Movie() {
  const [movies, setMovie] = useState([]);
useEffect(()=>{
  getMovieList().then((res)=>{
    console.log(res.data.results)
    setMovie(res.data.results)
  })
  .catch((err)=> console.log(err))
},[])


    return (
      <>
      <h4 className="text-uppercase">popular movies</h4>
      <hr></hr>
        <div className="row row-cols-2 row-cols-md-4 g-4 ">
      {movies.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            <MovieCard data={movie}  />
           
          </div>
        );
      })}
    </div>
      </>
    )
  }
  export default Movie;