import React from 'react'
import Pill from '../pill/pill'

export default function CardSmall(props){
    return(
        <div className="crd_smll">
            <div className="bx_img_crd">
                <img src={props.img}/>
            </div>
            <div className="bx_txt_crd">
                <Pill pill={props.categoria} />
                <h4 className="ttl_smll_crd">{props.title}</h4>
            </div>
        </div>
    )
}