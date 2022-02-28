import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import style from './Nvbr.module.css'
import { url,username } from '../../lib/vars';
import Pill from '../pill/pill';

// export const data = [
//     "Asparagus",
//     "Beetroot",
//     "Broccoli",
//     "Cabbage", 
//     "Carrot", 
//     "Cauliflower", 
//     "Celery", 
//     "Corn", 
//     "Eggplant", 
//     "Lettuce", 
//     "Mushroom", 
//     "Onion", 
//     "Parsnip", 
//     "Pea", 
//     "Potato", 
//     "Pumpkin", 
//     "Radish", 
//     "Spinach",    
//     "Tomato", 
//     "Turnip", 
//   ];

const AutoComplete = () => {
    
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length >= 2) {
        fetch(`${url}pesquisa?q=${query}`)
        .then((res) => res.json())
        .then(({ itens }) => {
            const data = itens
            // const filterSuggestions = data.filter(
            //     (suggestion) =>
            //         suggestion.toLowerCase().indexOf(query) > -1
            // );

            setSuggestions(data);
            setSuggestionsActive(true);
        })
        
    }
    else {
        setSuggestions([])
        setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1)
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions.titulo);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="sggstns">
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? "active" : ""}
              key={index}
              onClick={handleClick}
            >
                <Link href={{
                    pathname: '/[categoria]/[id]/[titulo]',
                    query: { categoria: suggestion.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,''), id: suggestion.id, titulo: suggestion.titulo.normalize('NFD').replace(/[\u0250-\u036f]/g,'').replace(/ /g,'-').replace(/,/g,'') },
                }}>
                    <a title={suggestion.titulo}>
                        <div className="bx-sggstns">
                            {suggestion.titulo}
                            <div>
                                <Pill pill={suggestion.categoria}/>
                            </div>
                        </div>
                    </a>
                </Link>
              
            </li>
          );
        })}
      </ul>
    );
  }

  const [focusInput,setFocusInput]=useState(false)
  const handleFocus = () => {
      setFocusInput(true)
  }

  const onSubmit = values => console.log(values)

  return (
    <>
    <a className="nvbr-svg" id={style.icn_fb} href={`https://www.facebook.com/${username}`} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132">
                    <path d="M66 0c37,0 66,30 66,66 0,35 -26,63 -60,66l0 -43 18 0c1,-2 0,-3 1,-5 0,-2 0,1 0,-3l2 -12c0,-1 0,-1 0,-1 -1,-1 -18,0 -21,0 0,-4 0,-8 0,-11 0,-8 1,-12 11,-12 2,0 9,0 11,0 0,-3 0,-11 0,-14 0,-6 2,-5 -10,-6 -3,0 -8,0 -11,0 -11,2 -17,7 -21,17 -2,7 -1,19 -1,26l-18 0c0,1 0,20 0,21 1,0 12,0 16,0l1 0c1,0 1,2 1,3 0,5 0,26 0,39 -29,-7 -51,-33 -51,-65 0,-36 30,-66 66,-66z"/>
                </svg>
            </a>
            <a className="nvbr-svg" href={`https://www.instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 87">
                    <path fillRule="evenodd" clipRule="evenodd" d="M87.0001 43.5C87.0001 67.5243 67.5245 86.9999 43.5001 86.9999C19.4757 86.9999 0.00012207 67.5243 0.00012207 43.5C0.00012207 19.4756 19.4757 0 43.5001 0C67.5245 0 87.0001 19.4756 87.0001 43.5ZM29.2308 19H58.7692C63.8974 19 68 23.1026 68 28.2308V57.7692C68 62.8975 63.8974 67 58.7692 67H29.2308C24.1025 67 20 62.8975 20 57.7692V28.2308C20 23.1026 24.1025 19 29.2308 19ZM62.4615 24.5385H61.4359H54.2564V32.7436H62.4615V24.5385ZM44 34.5897C41.3333 34.5897 38.6667 36.0256 37.2308 38.077C36.2051 39.5128 35.5897 41.1539 35.5898 43C35.5898 47.718 39.4872 51.4103 44 51.4103C48.5128 51.4103 52.4103 47.7179 52.4103 43C52.4103 41.1539 51.7949 39.5128 50.7692 38.077C49.3334 36.0256 46.6667 34.5897 44 34.5897ZM58.7692 62.2821C61.2308 62.2821 63.2821 60.2308 63.2821 57.7692L63.282 38.077H56.1025C56.7179 39.5128 57.1282 41.359 57.1282 43C57.1282 50.1795 51.1795 56.1282 44 56.1282C36.8205 56.1282 30.8718 50.1795 30.8718 43C30.8718 41.359 31.282 39.5128 31.8974 38.077H24.7179V57.7692C24.7179 60.2308 26.7693 62.2821 29.2308 62.2821H58.7692Z"/>
                </svg>
            </a>
      <form onSubmit={onSubmit} className="frm-srch">
        <input
            id="inpt-srch"
            type="text"
            name="q"
            placeholder="Pesquisar"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={suggestions.length >= 1 ? 'sggsT':'sggsF'}
        />
        {suggestionsActive && <Suggestions />}
        <svg id="icnSrch" className="srch-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </form>
    </>
  );
  
};

export default AutoComplete;