import moment from "moment"
import 'moment/locale/pt-br'
import style from './timestamp.module.css'

moment.locale('pt-br')

const TimestampTrending = (props) => {

    const dataAgo = moment(props.data_post)

    return(
        <span className={style.data_ago}>{dataAgo.startOf("hour").fromNow()}</span>
    )

}

const Timestamp = (props) => {

    const data = moment(props.data_post)

    return(
        <span><span id={style.pstd}>publicado em </span>{data.format('DD')} de {data.format('MMM')} às {data.format('H:mm')}</span>
    )
}

export {Timestamp,TimestampTrending}