import React from 'react'
import Link from 'next/link'

export default function CardEmAlta (props){
    return (
        <section className="sctn_em_alt">
            <Link href={{
              pathname: '/[categoria]/[title]',
              query: { categoria: props.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), title: props.title.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'') },
            }}>
                <a className="flx">
                    <div className="flx_cntr bx_nmr_trndng">
                        {props.index}
                    </div>
                    <div className="bx_txt_trndng">
                        <h4 className="ttl_smll_crd">{props.title}</h4>
                        <span className="spn_dt">12/03</span>
                    </div>
                </a>
            </Link>
        </section>
    )
}
