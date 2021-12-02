import '../styles/globals.css'
import { TemaContexto } from '../components/context/context'

function MyApp({ Component, pageProps }) {
  return (
    <TemaContexto>
      <Component {...pageProps} />
    </TemaContexto>
  )
}

export default MyApp
