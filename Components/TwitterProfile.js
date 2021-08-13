const TwitterProfile = () => {
    return (
        <div className="rounded-lg shadow flex flex-col justify-between gap-4 items-center max-w-xs mx-auto text-center
        ">


            <div className="bg-white w-[116px] h-[116px] ">
                <img className="w-[116px]   border-2" src="/images/twitterProfile.png" alt="Twitter Profile border" />

            </div>
            <div>
                <h1>Daniel Jensen</h1>
                <p>2,589 Following 10.8K Followers </p>

                <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>

            </div>
            <div>
                <buton className="px-6 py-2 bg-blue-700 text-white rounded-lg">Follow</buton>

            </div>
        </div>
    )
}

export default TwitterProfile
