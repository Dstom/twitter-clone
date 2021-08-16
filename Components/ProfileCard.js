const ProfileCard = () => {
    return (

        <div className="relative">

            <div className="rounded-lg shadow flex flex-col  gap-4 items-center mx-auto text-center transform  p-4 relative -top-4 bg-white w-full
            max-w-xs md:max-w-5xl md:flex-row
        ">


                <img
                    className="w-[116px] rounded-lg border-4 border-white -mt-12 "
                    src="/images/twitterProfile.png"
                    alt="Twitter Profile " />

                <div>
                    <h1>Daniel Jensen</h1>
                    <p>2,589 Following 10.8K Followers </p>

                    <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>

                </div>
                <buton className="md:ml-auto px-6 py-2 bg-blue-700 text-white rounded-lg">Follow</buton>

            </div>
        </div>

    )
}

export default ProfileCard
