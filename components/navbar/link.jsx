import { useRouter } from "next/router"
import Link from "next/link"
export default function LinkMenu(props){
    const router = useRouter()
    const {categoria} = router.query
    const li = ["editorias","saúde","cultura","política","economia","entrevistas","quem somos"]
    return(
        <ul className="ul_nav">
            {li.map((index,i)=>
                <li key={i} id={index}>
                    <Link href={`/${index.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ /g,'-')}` }>
                        <a className={`${categoria === index.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ /g,'-') ? 'actv':'ff'}`}>
                            {index}
                            <span></span>
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    )
}