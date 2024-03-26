import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {increaseCounter , decreaseCounter,increaseCard} from '../slice/counter'
function MovieCard(props){
  const count = useSelector(state => state.counter.count);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();
    return (
        <div className="shadow p-3 mb-5 bg-body-tertiary h-100 p-2">
           <i className="fa-regular fa-heart text-dark" onClick={() => dispatch(increaseCounter())}></i>
           <div> <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}  onClick={() => dispatch(increaseCard(props.data))} alt="movie poster" className="card-img rounded-top " /></div>
            <h5 className="card-title my-2" style={{cursor:"pointer"}} onClick={()=> navigate(`/movie-details/${props.data.id}`)} >{props.data.title}</h5>
            {props.data.adult ? (
          <span className="badge text-bg-success">for adult</span>
        ) : (
          <span className="badge w-50 text-bg-danger my-2">not for adults</span>
        )}
            <p>date:{props.data.release_date}</p>
            <p className="card-text"> vote average:{props.data.vote_average}</p>
          </div>
      );
}
export default MovieCard;