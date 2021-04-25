import './styles/tailwind.css'
import './styles/main.css'
import OGlobalHeader from '@/components/organisms/OGlobalHeader'

export default function App({ Component, pageProps }) {
  return (
    <>
      <OGlobalHeader />
      <div className="app-main">
        <div className="mx-auto max-w-screen-md py-8">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
