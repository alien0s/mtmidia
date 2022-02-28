import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Toggler from '../toggler/toggler'
import { editorias } from '../editorias'
import { username } from '../../lib/vars'

export default function Footer(){
    return(
        <footer>
            <div className="cntr pdng_tp_ftr">
                <div className="grd_scnd">
                    <div className="bx_ftr_cmpny">
                        <div id="bx_lg_ftr">
                            <Image src="/logo.svg" alt="Logo Mtmidia" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        </div>
                        <span>&copy; 2021 MT mídia e assessoria - Todos os direitos reservados</span>
                    </div>
                    <div className="bx_ftr_scnd">
                        <h4>editorias</h4>
                        <ul>
                            {editorias.map((index,i)=>
                                <li key={i}>
                                    <Link href={{
                                        pathname: '/[categoria]',
                                        query: { categoria: index.normalize('NFD').replace(/[\u0300-\u036f]/g,'') }
                                    }}>
                                        <a>{index}</a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="bx_ftr_thrd">
                        <h4>redes sociais</h4>
                            <ul>
                                <li>
                                    <a href={`https://www.facebook.com/${username}`} target="_blank" rel="noopener noreferrer">facebook</a>
                                </li>
                                <li>
                                    <a href={`https://www.instagram.com/${username}`} target="_blank" rel="noopener noreferrer">instagram</a>
                                </li>
                            </ul>
                    </div>
                    <div className="bx_ftr_lst">
                        <h4>Empresa</h4>
                        <ul>
                            <li>contato@mtmidia.com</li>
                            <Link href="/quem-somos">
                                <a title="quem somos">
                                    quem somos
                                </a>
                            </Link>
                            <li>lorem ipsum</li>
                        </ul>
                        <Toggler/>
                    </div>
                </div>
            </div>
            <div id="bx_pwrdby">
                desenvolvido por <a href="https://alien0s.xyz">@alien0s</a>
            </div>
        </footer>
    )
}