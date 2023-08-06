import { useParams } from 'react-router-dom';
import style from './MovieDetails.module.css'
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient'
import { Spinner } from '../components/Spinner';
import { getMovieImage } from '../utils/getMovieImage';

function MovieDetails() {

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState (null);

    useEffect(() => { // peticion get http con endpoint
        setIsLoading(true);
        get("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId]) // el efecto depende de movieId

    if (isLoading){
        return <Spinner />;
    }
    
    const imageURL = getMovieImage(movie.poster_path,500);
    return (
        <div className={style.container}>
            <img className={`${style.col} ${style.movieImage}`} src={imageURL} alt="" />
            <div className={`${style.col} ${style.movieContent}`}>
                <h2>{movie.title}</h2>
                <p>
                    <strong>Genres: </strong>
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails