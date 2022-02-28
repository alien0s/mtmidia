import React from 'react';
import Menu from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const profiles = [
    {
        "nome":"tatila frança",
        "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7726e7135550849.61e988d6910e2.jpg",
        "profissão": "journalist",
        "academy": "unasp"
    },
    {
        "nome":"marcela",
        "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7726e7135550849.61e988d6910e2.jpg",
        "profissão": "journalist",
        "academy": "unasp"
    },
]

function QuemSomos() {
    return (
        <>
        <Menu/>
        <div className="pdng_tp">
        <div className="wppr_qmsms">
        <h1>Quem somos</h1>
            <div className="bx_qmsms">
                {
                    profiles.map((index,i)=>
                        <div className="bx_prfl" key={i}>
                            <div className="bx_img">
                                <img src={index.img} alt={index.nome} title={index.nome}/>
                            </div>
                            <div className="bx_info_prfl_flx">
                                <div className="bx_info_prfl">
                                    <h2>{index.nome}</h2>
                                    <p>{index.profissão}</p>
                                    <p>{index.academy}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <div className="bx_inf_vls">
                <h1>Missão</h1>
                <p>Servir a comunidade com conteúdo relevante e de qualidade, exercendo um jornalismo de verdade, com responsabilidade e que faça a diferença.</p>
            </div>
            <div className="bx_inf_vls">
                <h1>Visão</h1>
                <p>Conquistar a confiança de qualquer pessoa que tiver contato com os conteúdos produzidos pela empresa.</p>
            </div>
            <div className="bx_inf_vls">
                <h1>Valores</h1>
                <p>Prestação de serviço qualificado e diferenciado. Responsabilidade pela informação. Compromisso com a verdade.</p>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default QuemSomos;