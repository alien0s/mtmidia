import React from 'react';
import Header from '../../components/head/head'
import Menu from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer'
import CardDefault from '../../components/slide/cardDefault'
import CardEmAlta from '../../components/slide/cardEmAlta'
import EmAlta from '../../components/em_alta/EmAlta'
import { upperCaseFirst } from 'upper-case-first';
import { url } from '../../lib/vars';

function tag({artigosTagProps,trendingProps}) {

    const categoriaString = artigosTagProps.tag

    return (
        <>
            <Header title={`Tag ${upperCaseFirst(categoriaString)}`}/>
            <Menu/>
            <div className="cntr pdng_tp">
            <div className="grd_scnd mt2">
                <div className="bx_tgs">
                    <h2 id="tg_h1" className="cptlz ttl_bxs">tag {categoriaString}</h2>
                    <div className="bx_rcnt">
                        {artigosTagProps.artigos.map((index,i) =>
                            <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} chamada={index.chamada}/>
                        )}                 
                    </div>
                </div>
                <div className="bx_smll_clmn">
                    <EmAlta/>
                    {trendingProps.map((index,i) =>
                        <CardEmAlta key={i} id={index.id} titulo={index.titulo} categoria={index.categoria} data_post={index.data_post} index={i+1}/>
                    )}
                </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default tag

export async function getServerSideProps(context){

    const [artigosTagRes,trendingRes] = await Promise.all([
        fetch(`${url}tag/${context.params.tag}`),
        fetch(`${url}trending`)
        
    ])

    const [artigosTag,trending] = await Promise.all([
        artigosTagRes.json(),
        trendingRes.json()
    ])

    return{
        props:{
            artigosTagProps: artigosTag,
            trendingProps: trending
        }
    }
}