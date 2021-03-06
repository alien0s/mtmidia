import React from "react"
import { SlideNavbar } from "../slide/slide"
import styles from "./topbar.module.css"
import Link from 'next/link'

export default function Topbar(){
    
    const [prevScroll,setPrevScroll] = React.useState(0)
    const [show, setShow] = React.useState(false)

    const controlNavbar = () => {
        const currentScroll = window.scrollY

        if (currentScroll > prevScroll ) {
            setShow(true)
        }else{
            setShow(false)
        }
        setPrevScroll(currentScroll)
    }

    React.useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [controlNavbar])

    return(
        <div id={show ? "hddnDv":"shwDv"}>
            <div id={styles.menu}>
                <div className={styles.rght}>
                    <span>Trending<svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="#fff"><g><path d="M14.0032645,5.5 L21,5.5 C21.5128358,5.5 21.9355072,5.88604019 21.9932723,6.38337887 L22,6.5 L22,13.5 C22,14.0522847 21.5522847,14.5 21,14.5 C20.4871642,14.5 20.0644928,14.1139598 20.0067277,13.6166211 L20,13.5 L19.9991911,8.914 L12.7071068,16.2071068 C12.3468442,16.5673694 11.7800337,16.595316 11.387728,16.2907811 L11.2935076,16.2077206 L8.99750169,13.9156993 L3.70941085,19.2054798 C3.31894894,19.5960664 2.68578397,19.5961676 2.2951973,19.2057057 C1.93465576,18.8452793 1.90683563,18.2780527 2.21179785,17.8857127 L2.29497141,17.7914921 L8.28955518,11.794993 C8.64980094,11.4346322 9.21668432,11.4066349 9.60903604,11.7111972 L9.70326731,11.7942662 L11.9993862,14.0864003 L18.5841911,7.5 L14.0032645,7.5 C13.4904287,7.5 13.0677574,7.11395981 13.0099923,6.61662113 L13.0032645,6.5 C13.0032645,5.98716416 13.3893047,5.56449284 13.8866434,5.50672773 L14.0032645,5.5 L21,5.5 L14.0032645,5.5 Z"/></g></svg></span>
                    <SlideNavbar/>
                </div>
                <div className={styles.lft}>
                    <Link href="/quem-somos">
                        <a>
                            Quem somos
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}