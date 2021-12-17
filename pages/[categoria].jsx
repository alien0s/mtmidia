import { useRouter } from "next/router"
import Menu from "../components/navbar/navbar"
import BannerCategoria from "../components/banner_categoria/banner_categoria"
import Header from "../components/head/head"

export default function Categoria(props){
    const router = useRouter()
    const {categoria} = router.query
    return(
        <div>
            <Header/>
            <Menu/>
            <BannerCategoria categoria={categoria}/>
        </div>
    )
}