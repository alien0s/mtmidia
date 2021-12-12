import React from 'react'
import Image from 'next/image'
import Toggler from '../toggler/toggler'
export default function Footer(){
    return(
        <footer>
            <div className="grd_scnd">
                <div className="bx_ftr_cmpny">
                    <div id="bx_lg_ftr">
                        <Image src="/logo.svg" alt="Logo Mtmidia" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                    <span>&copy; 2021 Todos os direitos reservados</span>
                </div>
                <div className="bx_ftr_scnd">
                    <h4>Contato</h4>
                    <ul>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                </div>
                <div className="bx_ftr_lst">
                    <h4>Contato</h4>
                    <ul>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                    <Toggler/>
                </div>
            </div>
        </footer>
    )
}