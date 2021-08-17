
const Header = () => {
    return (
        <header className="py-5 px-4 flex justify-between items-center">
            <img src="/images/tweeter-small.svg" alt="Logo" />
            <div className="flex gap-4 text-gray-500">
                <a>Home</a>
                <a>Explore</a>
                <a>Bookmarks</a>
            </div>


            <img
                className="rounded-lg w-10 h-10"


                src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1629676800&Signature=YCvm7M4RVPtp8qvNd19fvFeFyoDv7GcmP8TrGdazxwRfjfnsDrkP38KQ7VKo9JrtLQ1hZAy-SWaSURPvUL1IAzoDrA02QmhTpdHKy2Jgm0Dgl70VqJwFDdHXSXynmsQ8Fc39un93oBHDK2XiXMmO4FwP7QuVwuL2GsBfPpFFmrZEYKwb11s82Xk~H9FsyAKkMZulFljGlBFQB1DIycSem~RnBzsHPi2QEmB0W5qCR1r~sMz-2XuaQ98QT1LEW9rPDnl8zzBBz8C8iRkJkmUaPE3Z3wwy1wlNgOI1-tFCTE4eQyC312ToU5vX4tVqvXDSDsX1hu~jQhPnrLIRYdtCyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </header>
    )
}

export default Header
