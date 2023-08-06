import { useState, useEffect } from 'react';
import style from './Search.module.css'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery';


export function Search() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);
    
    const handleSubmit = (e) => {    
        e.preventDefault();
        navigate("/?search=" + searchText);
    }
    return (
        <div className={style.searchContainer} onSubmit={handleSubmit}>
            <form action="">
                <input type="text" 
                    placeholder="Buscar peliculas" 
                    className={style.buscar} 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}/>
                <button type='submit' className={style.boton}>🔍</button>
            </form>
        </div>
    )
}
