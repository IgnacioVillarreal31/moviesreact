import error from '../img/error404.jpg'

export function getMovieImage(movie,width){
    return movie ? `https://image.tmdb.org/t/p/w${width}${movie}` : error;
}