import React from 'react'
import Link from 'next/link'
import {TimestampTrending} from '../timestamp/timestamp'

export default function CardEmAlta (props){

    return (
        <section className="sctn_em_alt">
            <Link href={{
              pathname: '/[categoria]/[id]/[titulo]',
              query: { categoria: props.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), id: props.id, titulo: props.titulo.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'') },
            }}>
                <a className="flx" title={props.titulo}>
                    <div className="flx_cntr bx_nmr_trndng">
                        {props.index}
                    </div>
                    <div className="bx_txt_trndng">
                        <h4 className="ttl_smll_crd">{props.titulo}</h4>
                        <span className="spn_dt"><TimestampTrending data_post={props.data_post}/></span>
                    </div>
                </a>
            </Link>
        </section>
    )
}
