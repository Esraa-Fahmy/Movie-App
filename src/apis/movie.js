
import {axiosInstance} from './config'
export const getMovieList = () =>{
    const k='api_key=fd5bd929cce676e910db260c5795f08e';
    return axiosInstance.get(`/movie/popular?${k}`)
}
export const getMovieDetail = (id) => {
    const k='api_key=fd5bd929cce676e910db260c5795f08e';
    return axiosInstance.get(`/movie/${id}?${k}`)
}