import Header from '../../../components/head/head'
import {useRouter} from 'next/router'
import Menu from '../../../components/navbar/navbar'
import Artigo from '../../../components/artigo/artigo'
import Footer from '../../../components/footer/footer'
import EmAlta from '../../../components/em_alta/EmAlta'
import CardEmAlta from '../../../components/slide/cardEmAlta'

import { url } from '../../../lib/vars'

export default function Item({artigoProps,artigosSugestoesProps,trendingProps}) {

    const router = useRouter()
    const { titulo,id,categoria } = router.query

    return(
        <>
            <Header 
                title={artigoProps.titulo}
                autor={artigoProps.autor}
                keywords={artigoProps.tags}
                description={artigoProps.chamada}
                img={artigoProps.img}
                time={artigoProps.data_post}
                categoria={artigoProps.categoria}
            />
            <Menu/>
            <div className="cntr pdng_tp">
                <div className="grd_scnd">
                    <Artigo 
                        id={artigoProps.id}
                        titulo={artigoProps.titulo}
                        chamada={artigoProps.chamada}
                        img={artigoProps.img}
                        data_post={artigoProps.data_post}
                        autor={artigoProps.autor}
                        creditos={artigoProps.creditos_img}
                        legenda={artigoProps.legenda_img}
                        artigo={artigoProps.artigo_conteudo}
                        tags={artigoProps.tags}
                        categoria={artigoProps.categoria}
                        sugestoes={artigosSugestoesProps}
                    />
                    <div className="bx_smll_clmn">
                        <EmAlta categoria={`${artigoProps.categoria} `}/>
                        {
                            trendingProps.map((index,i) =>
                                <CardEmAlta key={i} id={index.id} titulo={index.titulo} categoria={artigoProps.categoria} data_post={index.data_post} index={i+1}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context){

    const [artigoRes,trendingRes] = await Promise.all([
        fetch(`${url}artigo/${context.params.id}`),
        fetch(`${url}trending/${context.params.categoria}`)
    ])

    const [artigo,trending] = await Promise.all([
        artigoRes.json(),
        trendingRes.json()
    ])

    return{
        props:{
            artigoProps: artigo.artigo,
            artigosSugestoesProps: artigo.artigo_suggestions,
            trendingProps: trending
        }
    }
}