import Head from 'next/head'
import Header from '../Components/Header'
import TwitterProfile from '../Components/TwitterProfile'

export default function Home() {
  return (

    <>
      <Header />

      <div className="w-full">

        <img src="/images/testBanner.png" alt="banner" />

      </div>
      { /* TWITTER PROFILE*/}

      <TwitterProfile />
      {/* SIDEBAR */}




      {/* FEED */}
    </>
  )
}
