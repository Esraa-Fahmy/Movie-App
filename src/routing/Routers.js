 import React, { Suspense } from 'react';
 import {Route, Routes} from 'react-router-dom';
 import Loader from '../components/Loader';
const Movie = React.lazy(() => import ('../pages/Movie'));
const MovieDetails = React.lazy (() => import ('../pages/MovieDetail'));
const WatchList = React.lazy (() => import ('../pages/WatchList'));
const Login = React.lazy (() => import ('../pages/Login'));
const Signup = React.lazy(() => import ('../pages/Signup'));
const NotFound = React.lazy(()=> import ('../components/NotFound'))

function Routing(){
    return(
       <Suspense fallback={<Loader />}>
        <Routes>
        <Route path='' element={<Movie />} />
        <Route path="/movie-details/:id" element={<MovieDetails />}/>
        <Route path='/watch-list' element={<WatchList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<NotFound/>}/>
       </Routes>
     </Suspense>
    )
}

export default Routing;