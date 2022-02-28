import Header from '../components/head/head'
import Menu from '../components/navbar/navbar.jsx'
import {Slide, SlideSecond} from '../components/slide/slide.jsx'
import { SlideTwoLanding } from '../components/slide/slide.jsx'
import CardDefault from '../components/slide/cardDefault'
import EmAlta from '../components/em_alta/EmAlta'
import CardEmAlta from '../components/slide/cardEmAlta'
import Footer from '../components/footer/footer'
import { url } from '../lib/vars'


const news = [
  {"title": "Trump torches Biden in 'Fox & Friends' interview, says admin ‘knowingly destroying our country'",
  "categoria":"política","img":"https://th.bing.com/th/id/R.59fdc1030d413efb8ac39e857b045610?rik=vke5Ic9R1hhvnA&riu=http%3a%2f%2fimagesmtv-a.akamaihd.net%2furi%2fmgid%3aao%3aimage%3amtv.com%3a97544%3fquality%3d0.8%26format%3djpg%26width%3d1440%26height%3d810%26.jpg&ehk=NwtrqyAzZXmVgTiuLLOjv6U9edxinhUDD7IR%2fkClCTA%3d&risl=&pid=ImgRaw&r=0"},
  {"title": "Biden jokes Fauci is around White House so much that it feels like he's actually the 'president'",
  "categoria":"política","img":"https://a57.foxnews.com/hp.foxnews.com/images/2021/12/1280/533/5b866950bbdafcc8ad76987f6d4abda8.jpg"}]
  
const news2 = [
  {"title":"Job openings climb to near-record in October as labor shortage persists",
  "categoria":"economia","img":"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/720/405/Help-Wanted-iStock.jpg?tl=1&ve=1"},
  {"title":"Lamborghini CEO bullish on brand's record sales",
  "categoria":"economia","img":"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/281/158/lambo-1.jpg?tl=1&ve=1"},
  {"title": "Fox News' Lawrence Jones on Christmas: 'The best time of year'",
  "categoria":"cultura","img":"https://a57.foxnews.com/hp.foxnews.com/images/2021/12/320/180/d2462982467e59d4f493c16bbdcafc2c.jpg?tl=1&ve=1"},
  {"title": "Inflation causing hardship for nearly half of US households, survey shows",
  "categoria":"economia","img":"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/931/523/Inflation-Gas-Prices.jpg"},
  {"title": "Trump torches Biden in 'Fox & Friends' interview, says admin ‘knowingly destroying our country'",
  "categoria":"política","img":"https://th.bing.com/th/id/R.59fdc1030d413efb8ac39e857b045610?rik=vke5Ic9R1hhvnA&riu=http%3a%2f%2fimagesmtv-a.akamaihd.net%2furi%2fmgid%3aao%3aimage%3amtv.com%3a97544%3fquality%3d0.8%26format%3djpg%26width%3d1440%26height%3d810%26.jpg&ehk=NwtrqyAzZXmVgTiuLLOjv6U9edxinhUDD7IR%2fkClCTA%3d&risl=&pid=ImgRaw&r=0"},
  {"title": "Biden jokes Fauci is around White House so much that it feels like he's actually the 'president'",
  "categoria":"política","img":"https://a57.foxnews.com/hp.foxnews.com/images/2021/12/1280/533/5b866950bbdafcc8ad76987f6d4abda8.jpg"}
]

export default function Home({firstProps,secondProps,thirdProps,trendingProps}) {
  return (
    <>
      <Header title="Bem vindo(a) ao Mt mídia | Portal de notícias"/>
      <Menu/>
      <div className="cntr pdng_tp">
        <div className="grd_mn">
          <div className="bx_mn">
            <Slide arrayOne={thirdProps} />
          </div>
          
          <div className="bx_tw_lndng">
            <div className="sbbx_lndng crd_ctnr">
              <SlideTwoLanding array={secondProps}/>
            </div>
          </div>
        </div>
        <div className="grd_scnd mt2">
          <div className="bx_rcnt">
            {thirdProps.map((index,i) => 
              <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} chamada={index.chamada}/>
            )}                 
          </div>
          <aside className="bx_smll_clmn">
            <EmAlta/>
            {
              trendingProps.map((index,i) =>
                <CardEmAlta key={i} id={index.id} titulo={index.titulo} categoria={index.categoria} data_post={index.data_post} index={i+1}/>
              )
            }
          </aside>
        </div>
      </div>
      <div className="bx_sld_scnd">
          <SlideSecond arrayTwo={thirdProps} />
      </div>
      <div className="cntr">
        <div className="grd_scnd">
            <div className="bx_rcnt">
              {thirdProps.map((index,i) => 
                <CardDefault key={i} id={index.id} categoria={index.categoria} titulo={index.titulo} img={index.img} chamada={index.chamada}/>
              )}
            </div>
            {/* <div className="bx_smll_clmn">
              <img width="90%" src="https://th.bing.com/th/id/OIP.zZdatcwezD67RsUvQYFvPAHaHa?pid=ImgDet&rs=1" />
            </div> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export async function getServerSideProps(){
  const [firstRes, secondRes, thirdRes,trendingRes] = await Promise.all([
    fetch(`${url}itenshome?page=1&items_per_page=2`),
    fetch(`${url}itenshome?page=2&items_per_page=2`),
    fetch(`${url}itenshome?page=1&items_per_page=6`),
    fetch(`${url}trending`)
  ]);

  const [first,second,third,trending] = await Promise.all([
    firstRes.json(),
    secondRes.json(),
    thirdRes.json(),
    trendingRes.json()
  ]);

  return{
    props: {
      firstProps: first.artigos,
      secondProps: second.artigos,
      thirdProps: third.artigos,
      trendingProps: trending
    }
  };
}