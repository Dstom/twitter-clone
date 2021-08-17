import Head from 'next/head'
import Header from '../Components/Header'
import ProfileCard from '../Components/ProfileCard'
import Sidebar from '../Components/Sidebar'
import TwitterCard from '../Components/TwitterCard'

export default function Home() {
  return (

    <>
      <Header />

      <div className="w-full">

        <img
          className="w-full h-40 md:h-72 object-cover object-center-bottom"
          src="/images/testBanner.png" alt="banner" />

      </div>
      { /*PROFILE CARd*/}
      <ProfileCard />
      <div className="flex flex-col md:flex-row md:max-w-5xl mx-auto">
        <Sidebar />
        <TwitterCard />
      </div>

      {/* SIDEBAR */}






      {/* FEED */}
    </>
  )
}
