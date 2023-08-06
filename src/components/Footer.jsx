import twitter from '../img/gorjeo.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import style from './Footer.module.css'

function Footer (){
    return (
        <footer>
            <h3>Ignacio Villarreal</h3>
            <p>Sigueme</p>
            <div className={style.icons}>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer;