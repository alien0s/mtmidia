import React from 'react'
import SwiperCore, { Parallax, Navigation, Mousewheel, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Autoplay,Parallax,Pagination,Mousewheel,Navigation])
import options from './options'
import Link from 'next/link'
import Pill from '../pill/pill'
import styles from '../../styles/Home.module.css'

function Slide(props){
    return(
        <Swiper className="mySwiper" speed={900} parallax={true} pagination={{"clickable": true}} navigation={true} autoplay={{
            "disableOnInteraction": true
          }} pagination={true}>
            {props.arrayOne.map((index,i) =>
             <SwiperSlide key={i} data-swiper-autoplay="6000">
                <Link href="#">
                    <a className={styles.ctnr_crd_lndng}>
                                <div className={styles.img_swpr} style={{backgroundImage: `url(${index.img})`}} ></div>
                                <div className="bg_img_shdw">
                                <div className={styles.bx_txt_wht}>
                                    <div data-swiper-parallax="-900">
                                        <Pill pill={index.categoria}/>
                                        <h2 className={styles.h2_nws_mn}>{index.title}</h2>
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
function SlideSecond(param){
    return(
        <Swiper {...options} className="mySwiper">
            {param.arrayTwo.map((index,i)=> 
                <SwiperSlide key={i}>
                    <Link href="#">
                    <a className={styles.ctnr_crd_lndng}>
                        <div className={styles.skltn}>
                            <div className={styles.skltn_abslt}>
                                <div className={styles.img_swpr} style={{backgroundImage: `url(${index.img})`}} ></div>
                                <div className="bg_img_shdw">
                                <div className={styles.bx_txt_wht}>
                                    <div>
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

export {Slide, SlideSecond}
