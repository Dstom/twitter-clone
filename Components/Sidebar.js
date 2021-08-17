const Sidebar = () => {
    return (
        <div className="bg-white shadow w-full max-w-[345px] p-4 mb-4 mx-auto md:mx-0 max-h-[148px] sm:max-w-[90%]">
            <ul>
                <li className="py-1 pl-1 text-sm leading-normal text-gray-600">
                    Tweets
                </li>

                <li className="py-1 pl-1 text-sm leading-normal text-gray-600">
                    Tweets & Replies
                </li>

                <li className="py-1 pl-1 text-sm leading-normal text-gray-600">
                    Media
                </li>

                <li className="py-1 pl-1 text-sm leading-normal text-gray-600">
                    Likes
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
