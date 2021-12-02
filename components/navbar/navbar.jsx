import React, { useEffect, useState } from 'react'
import AutoSuggest from './search.jsx'
import Image from 'next/image'

export default function Menu(){
    const [toggler,setToggler] = useState(false)
    const li = ["editorias","saúde","cultura","política","economia","entrevistas","quem somos"]

    return(
        <div className="nav">
            <div className="container">
                <div id="bx-lft">
                  <a href="#" className="brand">
                      <Image src="/logo.svg" alt="Logo Mtmidia" width="100%" height="100%" layout="responsive" objectFit="contain" />
                  </a>
                </div>
                <button className={toggler? "opened":"closed"} id="button_toggler" onClick={() => setToggler(!toggler)}>
                    <span><svg id="menu_open_icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM4 18h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM20 6H4c-.55 0-1 .45-1 1v.01c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"/></svg></span>
                    <span><svg id="menu_close_icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg></span>
                </button>
                <div id="navbar_collapse" className={toggler? "show":"hidden"}>
                    <ul className="ul_nav">
                        {li.map((index,i)=><li key={i} id={index}>{index}
                            <span></span>
                        </li>)}
                    </ul>
                </div>
                <div className="form-inline">
                  <AutoSuggest/>
                </div>
            </div>
        </div>
    )
}
