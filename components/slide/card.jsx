import Link from "next/link"
import Pill from "../pill/pill"
import styles from '../../styles/Home.module.css'
export default function CardLanding (props){
    return (
        <Link href="#" className={styles.ctnr_crd_lndng}>
            <a>
                {/* <div className={styles.skltn || styles.skltn_crd}>
                    <div className={styles.skltn_abslt}> */}
                        <div className={styles.img_swpr} style={{backgroundImage: `url(${props.img})`}} ></div>
                        <div className="bg_img_shdw">
                        <div className={styles.bx_txt_wht}>
                            <Pill pill={props.categoria}/>
                            <h2 className={styles.h2_nws_crd_mn}>{props.title}</h2>
                        </div>
                        </div>
                    {/* </div>
                </div> */}
            </a>
        </Link>
    )
}