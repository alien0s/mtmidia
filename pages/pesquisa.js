import React from 'react';
import Header from '../components/head/head'
import Menu from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer'
import CardDefault from '../components/slide/cardDefault'
import CardEmAlta from '../components/slide/cardEmAlta';
import EmAlta from '../components/em_alta/EmAlta'
import { upperCaseFirst } from 'upper-case-first';
import { useRouter } from 'next/router'
import { url } from '../lib/vars';

export default function Pesquisa({pesquisaProps,trendingProps}){

    const router = useRouter()
    const {q} = router.query

    return (
        <>
            <Header title={`Resultados da pesquisa "${upperCaseFirst(q)}"`}/>
            <Menu/>
            <div className="cntr pdng_tp">
                <div className="grd_scnd mt2">
                    <div className="bx_rcnt">
                        {pesquisaProps.map((index,i) => 
                            <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} chamada={index.chamada}/>
                        )}
                    </div>
                    <aside className="bx_smll_clmn">
                        <EmAlta/>
                        {
                        trendingProps.map((index,i) =>
                            <CardEmAlta key={i} id={index.id} titulo={index.titulo} categoria={index.categoria} data_post={index.data_post} index={i+1}/>
                        )}
                    </aside>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export async function getServerSideProps(context){

    const [pesquisaRes,trendingRes] = await Promise.all([
        fetch(`${url}pesquisa?q=${context.query.q}`),
        fetch(`${url}trending`)
    ])

    const [pesquisa,trending] = await Promise.all([
        pesquisaRes.json(),
        trendingRes.json()
    ])

    return{
        props: {
            pesquisaProps: pesquisa.itens,
            trendingProps: trending
        }
    }
}