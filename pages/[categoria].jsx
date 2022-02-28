import { useRouter } from "next/router"
import Menu from "../components/navbar/navbar"
import BannerCategoria from "../components/banner_categoria/banner_categoria"
import Header from "../components/head/head"
import Footer from "../components/footer/footer"
import { Slide,SlideTwoLanding } from "../components/slide/slide"
import CardEmAlta from "../components/slide/cardEmAlta"
import CardDefault from "../components/slide/cardDefault"
import EmAlta from "../components/em_alta/EmAlta"
import {upperCaseFirst} from "upper-case-first"
import { url } from "../lib/vars"

export default function Categoria({artigosOneProps,artigosTwoProps,artigosThreeProps,trendingProps}){
    
    const router = useRouter()
    const {categoria} = router.query
    const categoriaString = artigosOneProps.categoria

    return(
        <>
            <Header title={`Categoria ${upperCaseFirst(categoriaString)}`}/>
            <Menu categoria={categoriaString}/>
            <div className="cntr pdng_tp">
                <header>
                    <BannerCategoria categoria={categoriaString}/>
                </header>
                <div className="grd_mn">
                    <div className="bx_mn">
                        <Slide arrayOne={artigosOneProps.artigos} />
                    </div>
                    <div className="bx_tw_lndng">
                        <div className="sbbx_lndng crd_ctnr">
                            <SlideTwoLanding array={artigosTwoProps.artigos}/>
                        </div>
                    </div>
                </div>
                <div className="grd_scnd mt2">
                    <div className="bx_rcnt">
                        {artigosThreeProps.artigos.map((index,i) =>
                            <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} chamada={index.chamada}/>
                        )}                 
                    </div>
                    <aside className="bx_smll_clmn">
                        <EmAlta categoria={`${categoriaString} `}/>
                        {
                            trendingProps.map((index,i) =>
                                <CardEmAlta key={i} id={index.id} titulo={index.titulo} categoria={categoria} data_post={index.data_post} index={i+1}/>
                            )
                        }
                    </aside>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context){

    const [artigosOneRes,artigosTwoRes,artigosThreeRes,trendingRes] = await Promise.all([
        fetch(`${url}artigos/${context.params.categoria}?page=1&items_per_page=2`),
        fetch(`${url}artigos/${context.params.categoria}?page=1&items_per_page=2`),
        fetch(`${url}artigos/${context.params.categoria}?page=1&items_per_page=6`),
        fetch(`${url}trending/${context.params.categoria}`)
    ])

    const [artigosOne,artigosTwo,artigosThree,trending] = await Promise.all([
        artigosOneRes.json(),
        artigosTwoRes.json(),
        artigosThreeRes.json(),
        trendingRes.json()
    ])

    return{
        props:{
            artigosOneProps: artigosOne,
            artigosTwoProps: artigosTwo,
            artigosThreeProps: artigosThree,
            trendingProps: trending
        }
    }
}