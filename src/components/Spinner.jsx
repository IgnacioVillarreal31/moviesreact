import { ImSpinner9 } from 'react-icons/im';
import style from './Spinner.module.css'

export function Spinner() {
    return (
        <div className={style.spinner}>
            <ImSpinner9 className={style.spinning} size={60}/>
        </div>
    )
}
