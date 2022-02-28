import React from 'react'
import Link from "next/link"
import styles from './Artigo.module.css'
import style from '../../styles/Home.module.css'
import CardDefault from "../slide/cardDefault"
import { news2 } from "../data"
import {useRouter} from "next/router"
import {Timestamp} from "../timestamp/timestamp"
import useLocalStorageState from 'use-local-storage-state'
import {url} from '../../lib/vars'

export default function Artigo (props){

    const router = useRouter()
    const urlArtigo = router.asPath

    const [listaIds,setListaIds] = useLocalStorageState("listaIds",[])

    React.useEffect(()=>{
        const compara = () => {
            if(listaIds.indexOf(props.id) > -1){
                return true
            }else{
                return false
            }
        }

        if(compara() == false){
            fetch(`${url}atualizar_views/${props.id}`, {method: "PUT"})
            setListaIds([...listaIds, props.id])
        }
    },[])

    console.log(listaIds)

    return (
        <main className={styles.bx_wrppr_pst}>
            <article>
                    <header>
                        <h1 className="h1_artcl">{props.titulo}</h1>
                        <p className="p_chmd">{props.chamada}</p>
                        <div className="flx spc_btwn">
                            <p className="inf_artcl"><i>por</i><span id={styles.autor}>{props.autor}</span><Timestamp data_post={props.data_post}/></p>
                            <p className="icns_shr">
                                <a target="_blank" rel="noopener noreferrer" alt="Logo Facebook" title="Compartilhar no Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mtmidia.com${urlArtigo}`}><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 132 132"><path d="M66 0c37,0 66,30 66,66 0,35 -26,63 -60,66l0 -43 18 0c1,-2 0,-3 1,-5 0,-2 0,1 0,-3l2 -12c0,-1 0,-1 0,-1 -1,-1 -18,0 -21,0 0,-4 0,-8 0,-11 0,-8 1,-12 11,-12 2,0 9,0 11,0 0,-3 0,-11 0,-14 0,-6 2,-5 -10,-6 -3,0 -8,0 -11,0 -11,2 -17,7 -21,17 -2,7 -1,19 -1,26l-18 0c0,1 0,20 0,21 1,0 12,0 16,0l1 0c1,0 1,2 1,3 0,5 0,26 0,39 -29,-7 -51,-33 -51,-65 0,-36 30,-66 66,-66z"/></svg></a>
                                <a target="_blank" rel="noopener noreferrer" alt="Logo Whatsapp" title="Compartilhar no Whatsapp" href={`https://wa.me/?text=https://www.mtmidia.com${urlArtigo}`}><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fillRule="evenodd" clipRule="evenodd" d="M35.31 384L0 512L130.648 476.69C168.607 497.876 210.979 512 255.117 512C395.476 512 512 393.709 512 254.234C512 114.759 395.475 0 255.117 0C114.759 0 0 114.759 0 254.234C0 300.138 12.359 344.276 35.31 384ZM151.311 112L171.651 113.07C175.933 113.07 179.144 116.278 180.216 119.488L211.26 189.014C212.33 192.223 211.26 196.502 209.119 199.71L183.427 228.59C181.285 230.729 181.285 233.938 182.356 237.147C215.542 301.324 276.561 326.995 294.76 333.413C297.971 334.482 301.182 333.413 303.324 331.273L330.086 297.045C333.297 292.767 338.65 291.697 342.932 293.837L410.374 324.856C414.656 326.995 416.798 332.343 415.727 336.622L412.516 351.597C409.304 367.642 399.67 382.616 384.682 392.243C365.413 404.008 341.861 409.357 311.888 400.8C217.684 374.059 164.159 312.021 136.325 273.514C108.492 235.008 96.7165 196.502 104.21 164.413C108.492 143.019 124.549 126.975 134.184 118.418C138.466 114.14 144.888 112 151.311 112Z"/></svg></a>
                            </p>
                        </div>
                    </header>
                    <section className={styles.sctn_artcl}>
                        <div className={style.skltn}>
                            <div className={style.skltn_abslt}>
                                <div className={style.img_swpr} style={{backgroundImage: `url(${props.img})`}} ></div>
                            </div>
                        </div>
                        <div className="dscrptn_img">{props.legenda} {props.creditos}</div>
                        <section className="bx_artcl" dangerouslySetInnerHTML={{__html: props.artigo}}></section>
                        <div className={styles.bx_tgs}>
                            <h5>Tags</h5>
                                {props.tags.map((index,i)=>
                                    <Link href={`/tag/${index.normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} key={i}>
                                        <a>
                                            <span>{index}</span>
                                        </a>
                                    </Link>
                                )}
                        </div>
                    </section>
                </article>
                    <h2 className="ttl_bxs">Relacionados</h2>
                    <div className="bx_rcnt">
                        {props.sugestoes.map((index,i) => 
                        <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} />
                        )}
                    </div>
        </main>   
    )
}