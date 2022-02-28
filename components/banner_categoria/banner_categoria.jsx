import React from 'react'
import styles from './Banner.module.css'

const BannerCategoria = (props) => <h1 id={styles.ctgr_ttl} className={props.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,'')}>{props.categoria}</h1>

export default BannerCategoria