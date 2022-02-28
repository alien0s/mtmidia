import Link from "next/link"
import Pill from "../pill/pill"
import styles from '../../styles/Home.module.css'
export default function CardTwoLanding (props){
    return (
        <Link href={{
            pathname: '/[categoria]/[id]/[titulo]',
            query: { categoria: props.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), id: props.id, titulo: props.titulo.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'') },
        }}>
            <a className={styles.ctnr_crd_lndng} title={props.titulo}>
                <div className={styles.skltn_sldr}>
                    <div className={styles.img_swpr} style={{backgroundImage: `url(${props.img})`}} ></div>
                </div>
                <div className="bg_img_shdw">
                    <div className={styles.bx_txt_wht}>
                        <Pill pill={props.categoria}/>
                        <h2 className={styles.h2_nws_crd_mn}>{props.titulo}</h2>
                    </div>
                </div>
            </a>
        </Link>
    )
}