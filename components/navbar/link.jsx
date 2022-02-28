import { useRouter } from "next/router"
import Link from "next/link"
import { editorias } from "../editorias"
import { upperCaseFirst } from "upper-case-first";

export default function LinkMenu(){
    const router = useRouter()
    const {categoria} = router.query
    return(
        <ul className="ul_nav">
            {editorias.map((index,i)=>
                <li key={i} id={index.normalize('NFD').replace(/[\u0300-\u036f]/g,'')}>
                    <Link href={`/${index.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ /g,'-')}` }>
                        <a className={`${categoria === index.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ /g,'-') ? 'actv':'ff'}`} title={upperCaseFirst(index)}>
                            {index}
                            <span></span>
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    )
}