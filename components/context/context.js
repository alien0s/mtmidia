import {createContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export const Tema = createContext({})

export const TemaContexto = ({children}) => {

    const router = useRouter()
    const [theme,setTheme] = useState("light")

    function toggleTheme() {
        if (theme === "light") {
          window.localStorage.setItem("theme", "dark");
          setTheme("dark");
        } else {
          window.localStorage.setItem("theme", "light");
          setTheme("light");
        }
      };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    },[])

    return (
    <Tema.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        {children}
      </div>
    </Tema.Provider>
    )
}

