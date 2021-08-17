import { ChatAltIcon, HeartIcon, BookmarkIcon, RefreshIcon, PhotographIcon } from '@heroicons/react/outline'


const TwitterCard = () => {
    return (
        <div className="bg-white max-w-[345px] w-full p-4 shadow md:flex-grow">
            <div className="flex items-center gap-4 mb-3">
                <img src="/images/profileTwitterCard.jpg" className="w-10 h-10 rounded" />
                <div>
                    <h1 className="font-medium text-base">Peyton Lyons</h1>
                    <span className="text-gray-600 text-xs">24 August at 20:43</span>
                </div>
            </div>

            <p className="text-gray-900 mb-3">
                Traveling – it leaves you speechless, then turns you into a storyteller.
            </p>

            <img src="/images/imageCard.png" className="w-full rounded mb-3" />

            <div className="flex gap-4 text-xs text-gray-400 items-center justify-end mb-2">
                <span>449 Comments</span>
                <span>59k Retweets</span>
                <span>234 Saved</span>
            </div>

            <div className="border-t border-b border-gray-200 flex items-center justify-evenly text-gray-700 mb-3">
                <div className="py-3 px-5 rounded hover:bg-gray-200">
                    <ChatAltIcon className="h-4 w-4" />
                </div>

                <div className="py-3 px-5 rounded hover:bg-gray-200">
                    <RefreshIcon className="h-4 w-4" />
                </div>

                <div className="py-3 px-5 rounded hover:bg-gray-200">
                    <HeartIcon className="h-4 w-4" />
                </div>

                <div className="py-3 px-5 rounded hover:bg-gray-200">
                    <BookmarkIcon className="h-4 w-4" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <img src="/images/chatProfile.jpg" className="h-10 w-10 rounded" />
                <div className="relative w-full">
                    <PhotographIcon className="h-4 w-4 absolute right-0"/>
                    <input placeholder="Tweet your reply"
                     className="w-full bg-gray-100 h-full p-2 rounded"/>
                </div>
            </div>
        </div>
    )
}

export default TwitterCard
