import style from './MoviesContainer.module.css'
import MoviesCard from './MoviesCard';
import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient"
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';

function MoviesContainer( {search} ) {

    const [movies, setMovies] = useState ([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function(){
        setIsLoading(true);
        const searchURL = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page;
        get(searchURL).then((data) => {
            setMovies((prevMovies) => (page === 1 ? data.results : prevMovies.concat(data.results)));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
    },[search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty/>
    }

    return (
        <InfiniteScroll 
            loader={<Spinner />} 
            dataLength={movies.length} 
            hasMore={hasMore} 
            next={() => setPage(prevPage => prevPage + 1)}>
        <main>
            <ul className={style.lista}>
                {
                    movies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </main>
        </InfiniteScroll>
    );
}

export default MoviesContainer;

