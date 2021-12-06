import React from 'react'
import SwiperCore, { Parallax, Navigation, Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Parallax,Pagination,Mousewheel,Navigation])
import Link from 'next/link'
import Pill from '../pill/pill'
import styles from '../../styles/Home.module.css'

export default function Slide(props){
    return(
        <Swiper className="mySwiper" speed={600} parallax={true} pagination={{"clickable": true}} navigation={true}>
            {props.array.map((index,i) =>
             <SwiperSlide key={i}>
                <Link href="#">
                    <a>
                        <div className={styles.skltn}>
                            <div className={styles.skltn_abslt}>
                                <div className={styles.img_swpr} style={{backgroundImage: `url(${index.img})`}} ></div>
                                <div className="bg_img_shdw">
                                <div className={styles.bx_txt_wht}>
                                    <div data-swiper-parallax="-900">
                                        <Pill pill={index.categoria}/>
                                        <h2 className={styles.h2_nws_mn}>{index.title}</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
             </SwiperSlide>
            )}
        </Swiper>
    )
}
