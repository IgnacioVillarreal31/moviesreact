import style from './Empty.module.css'

export function Empty() {
    return (
        <div className={style.error}>
            <h2>Error 404</h2>
        </div>
    )
}
