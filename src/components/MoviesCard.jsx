import { Link } from 'react-router-dom';
import style from './MoviesCard.module.css'
import { getMovieImage } from '../utils/getMovieImage';

function MoviesCard({ movie }){
    const imageURL = getMovieImage(movie.poster_path,300);
    return (
        <li className={style.card}>
            <Link to={"/movies/" + movie.id} href="">
                <img src={imageURL} alt="" />
                <h2>{movie.title}</h2>
            </Link>
        </li>
    )
}

export default MoviesCard