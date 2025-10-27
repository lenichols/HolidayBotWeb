export default function NavBar() {
    return (
        <div className="flex w-full pr-16">
            <div className="w-1/2">
                <h1 className="text-4xl text-white text-shadow-5xs text-start">
                    <span className="font-black underline">Holiday</span>
                        Bot
                    <sup className="text-red-800">AI</sup>
                </h1>
            </div>
            <div className="w-1/2 text-end">
                Other Navbar Stuff
            </div>
        </div>)
}