import React from 'react'
import Link from 'next/link'

export default function CardEmAlta (props){
    return (
        <section className="sctn_em_alt">
            <Link href="#">
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
