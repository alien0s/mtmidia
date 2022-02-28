import React, { useEffect, useState } from 'react'
import SwiperCore, { Parallax, Navigation, Mousewheel, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Autoplay,Parallax,Pagination,Mousewheel,Navigation])
import options from './options'
import Link from 'next/link'
import Pill from '../pill/pill'
import styles from '../../styles/Home.module.css'
import CardDefault from './cardDefault'
import CardSlide from './cardSlide'
import CardTwoLanding from './cardTwoLanding'
import { url } from '../../lib/vars'

function Slide(props){

    return(
        <Swiper className="mySwiper" speed={600} parallax={true} loop={true} pagination={{"clickable": true}} navigation={true} 
            // autoplay={{"disableOnInteraction": true}}
        >
            {props.arrayOne.map((index,i) =>
             <SwiperSlide key={i} data-swiper-autoplay="6000">
                <Link href={{
                    pathname: '/[categoria]/[id]/[titulo]',
                    query: { categoria: index.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), id: index.id, titulo: index.titulo.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'') },
                }}>
                    <a className={styles.ctnr_crd_lndng} title={index.titulo}>
                        <div className={styles.skltn_sldr}>
                            <div className={styles.img_swpr} style={{backgroundImage: `url(${index.img})`}} ></div>
                        </div>    
                            <div className="bg_img_shdw">
                                <div className={styles.bx_txt_wht}>
                                    <div data-swiper-parallax="-900">
                                        <Pill pill={index.categoria}/>
                                        <h2 className={styles.h2_nws_mn}>{index.titulo}</h2>
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
                    <CardSlide id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img}/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

function SlideNavbar(){

    const [trending,setTrending] = useState([])

    useEffect(()=>{
        fetch(`${url}trending`)
        .then(response => response.json())
        .then(data => setTrending(data))
    },[])

    return(
        <Swiper direction={'vertical'} loop={true} slidesPerView={1} 
            autoplay={{"disableOnInteraction": false}} 
            speed={900}
            className="mySwiper" id="wrppr_sld_tpbr"
        >
            {trending.map((index,i)=>
                <SwiperSlide key={i}>
                    <div className="sld_tpbr">
                        <p>{index.titulo}</p>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

function SlideTwoLanding(props){
    return(
        <Swiper direction={'vertical'} loop={true} slidesPerView={2} 
        // autoplay={{"disableOnInteraction": true}} 
        speed={900} spaceBetween={15} hashNavigation={true}
        className="mySwiper">
            {
                props.array.map((index,i)=>
                    <SwiperSlide key={i}>
                        <CardTwoLanding id={index.id} titulo={index.titulo} categoria={index.categoria} img={index.img}/>
                    </SwiperSlide>
                )
            }
            
        </Swiper>
    )
}

export {Slide, SlideSecond, SlideNavbar,SlideTwoLanding}