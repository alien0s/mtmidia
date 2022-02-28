import Head from 'next/head'
import { upperCaseFirst } from "upper-case-first";
import { useRouter } from 'next/router';

export default function Header(props){

    const router = useRouter()
    const url = router.asPath
    const site_name = "MT Mídia - Portal de notícias autazense"
    return(
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={props.description}/>
            <meta name="author" content={props.autor}/>
            <meta name="keywords" content={props.keywords}/>
            <meta name="robots" content="index,follow"/>
            {/* <meta httpEquiv="content-type" content="text/html;charset=utf-8"/> */}
            <title>{upperCaseFirst(props.title)}</title>
            {/* twt */}
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:url" content={`https://www.mtmidia.com${url}`}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:image" content={props.img}/>
            {/* fb */}
            <meta property="og:locale" content="pt_BR"/>
            <meta property="og:title" content={props.title}/>
            <meta property="og:type" content="article"/>
            <meta property="og:site_name" content={site_name}/>
            <meta property="og:description" content={props.description}/>
            <meta property="article:author" content={props.autor}/>
            <meta property="og:image" content={props.img}/>
            <meta property="og:image:url" content={props.img}/>
            <meta property="og:image:secure_url" content={props.img}/>
            <meta property="og:url" content={`https://www.mtmidia.com${url}`}/>
            <meta property="article:section" content={props.categoria}/>
            <meta property="article:published_time" content={props.time}/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}