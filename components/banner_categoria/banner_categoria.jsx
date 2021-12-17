import styles from './Banner.module.css'
export default function BannerCategoria(props){
    return(
        <div className="pdng_tp">
            <div className={styles.cntr_bnnr_ctgr}>
                <header id={styles.categoria_banner} className={props.categoria}>
                    <h1>{props.categoria}</h1>
                </header>
            </div>
        </div>
    )
}