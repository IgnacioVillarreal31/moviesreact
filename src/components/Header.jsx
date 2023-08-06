import style from './Header.module.css'
import logo from '../img/logo.png'
import menu from '../img/menu.png'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { Search } from './Search';


function Header() {

    let bool = false;

    function miLogica(){
        const nav = document.querySelector('header');
        if (!bool){
            nav.classList.add(style.responsive);
        } else{
            nav.classList.remove(style.responsive);
        }
        bool = !bool
    }

    return (
        <header>
            <Link to="/" className={style.titulo}>
                <img src={logo} alt="" />
                <h1>CreativeFilms</h1>
            </Link>

            <input type="checkbox" id={style.menu} onClick={miLogica}/>
            <label htmlFor={style.menu}>
                <img src={menu} className={style.menuicono} alt="menu" />
            </label>

            <nav className={style.navbar}>
                <ul>
                    <li><Link to="/" className={style.links} href="">Inicio</Link></li>
                    <li><Link to="" className={style.links} href="">Generos</Link></li>
                    <li><Link to="" className={style.links} href="">Categorias</Link></li>
                    <li><Link to="" className={style.links} href="">Sobre mi</Link></li>
                </ul>
            </nav>

            <Search />
        </header>
    );
}

export default Header;

