import style from './Pill.module.css'
export default function Pill(props){
    return <span className={style.pll} value={props.pill}></span>
}