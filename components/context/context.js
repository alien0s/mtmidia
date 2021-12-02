import {createContext, useState, useEffect} from 'react'

export const Tema = createContext({})

export const TemaContexto = ({children}) => {
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
      {children}
    </Tema.Provider>
    )
}

