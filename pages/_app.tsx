import './styles/tailwind.css'
import './styles/main.css'
import OGlobalHeader from '@/components/organisms/OGlobalHeader'
import OGlobalFooter from '@/components/organisms/OGlobalFooter'

export default function App({ Component, pageProps }) {
  return (
    <>
      <OGlobalHeader />
      <div className="app-main">
        <div className="mx-auto max-w-screen-md pb-32">
          <Component {...pageProps} />
        </div>
      </div>
      <OGlobalFooter />
    </>
  )
}
