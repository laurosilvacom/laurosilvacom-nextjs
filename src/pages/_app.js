import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({Component, pageProps}) {
  return (
    <div className="antialiased">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />

      <div className="relative max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </div>
  )
}
