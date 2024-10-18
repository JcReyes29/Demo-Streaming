
export default function Navbar() {
    return (
        <>
            <div className='w-full bg-gradient-to-b from-blue-600 to-blue-400 sm:h-16 md:h-16 shadow-lg'>
                <div className="flex justify-between mx-auto  sm:px-5 lg:px-40 h-full items-center sm:flex p-2">
                    <div className="grid sm:flex font-semibold text-3xl gap-2 text-white">
                        <h2>DEMO</h2>
                        <h2>Streaming</h2>
                    </div>
                    <div className="grid sm:flex gap-3 sm:gap-7 text-white font-medium">
                        <button className="active:border active:rounded-md px-2 active:text-gray-900">Log in</button>
                        <button className="border px-2 bg-gray-700 border-white sm:px-3 sm:py-1 rounded-md cursor-pointer active:bg-gray-500">Start your free trial</button>
                    </div>
                </div>

            </div>

        </>
    )
}
