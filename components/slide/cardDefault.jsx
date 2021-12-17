import Link from "next/link"
import Pill from "../pill/pill"
import styles from '../../styles/Home.module.css'
export default function CardDefault (props){
    return (
        <Link href="#">
            <a className={styles.ctnr_crd_lndng}>
                <div className={styles.skltn_flx}>
                    <div className={styles.img_swpr} style={{backgroundImage: `url(${props.img})`}} ></div>
                </div>
                <div className={styles.bx_txt_wht}>
                    <div>
                        <Pill pill={props.categoria}/>
                        <h4 className="ttl_smll_crd">{props.title}</h4>
                        <p className="p_sb_txt_crd">lorem ispum dolor sit amep consectur adisiping</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}