import Link from "next/link"
import Pill from "../pill/pill"
import styles from '../../styles/Home.module.css'

export default function CardSlide (props){
    
    return (
        <Link href={{
            pathname: '/[categoria]/[id]/[titulo]',
            query: { categoria: props.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), id: props.id, titulo: props.titulo.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'')}
          }}>
            <a className={styles.ctnr_crd_lndng} title={props.titulo}>
                <div className={styles.skltn_flx}>
                    <div className={styles.img_swpr} style={{backgroundImage: `url(${props.img})`}} ></div>
                </div>
                <div className={styles.bx_txt_crd}>
                    <Pill pill={props.categoria}/>
                    <h4 className="ttl_smll_crd">{props.titulo}</h4>
                    <p className="p_sb_txt_crd">{props.chamada}</p>
                </div>
            </a>
        </Link>
    )
}