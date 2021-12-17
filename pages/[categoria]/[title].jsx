import Header from '../../components/head/head'
import {useRouter} from 'next/router'
import Menu from '../../components/navbar/navbar'

export default function Item() {
    const router = useRouter()
    const { title } = router.query
    const { categoria } = router.query
    console.log(router.query)
    return(
        <div>
            <Header title={title}/>
            <Menu/>
            { categoria }{title}
        </div>
    )
}