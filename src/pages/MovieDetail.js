import {  useParams } from "react-router-dom";
import React,{useEffect, useState} from "react";
import {getMovieDetail} from '../apis/movie'
function MovieDetail() {
  const [movieDetails,setMovieDetails]=useState({})
  const params = useParams();
  console.log(params.id)
  useEffect(()=>{
    getMovieDetail(params.id).then((res)=>{
      console.log(res)
      setMovieDetails(res.data)
    }).catch((err)=> console.log(err))
  },[params.id])
    return (
      <>
       <h4 className='text-uppercase'>movie details</h4>
        <hr></hr>
      <div className='row row-cols-1 row-cols-md-2'>
        <div className='cols  w-25 m-auto '>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt='movie poster' className='card-img rounded' />
          </div>
       <div className='cols'>
         <h5 className='text-capitalize'>title:{movieDetails.title}</h5>
         <p className='text-capitalize'> tagline:{movieDetails.tagline}</p>
         <p className='text-capitalize'>{movieDetails.overview}</p>
       </div>
      </div>
      <h3>xxxx</h3>
      </>
    )
  }
  export default MovieDetail;