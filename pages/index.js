import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSA Malaysia Chapter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cloud Security Alliance!" />
        <p className="description">
           This is Cloud Security Alliance Malaysian Chapter .. We are Coming soon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
