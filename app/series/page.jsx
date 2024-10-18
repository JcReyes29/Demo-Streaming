import React from 'react'

export default function Series() {
    return (
        <>
            <header className="bg-gray-700 sm:h-14 md:h-14 shadow-xl mx-auto grid justify-center sm:justify-start sm:px-5 lg:px-40 items-center sm:flex p-2">
                <h1 className="text-white font-medium text-2xl">Popular Series</h1>
            </header>
            <menu className='tall mx-4 md:mx-40 my-8 overflow-y-auto'>
                <div className='flex flex-wrap justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 gap-3'>
                    <div className='flex flex-col gap-1'>
                        <img width={130} className='' src='https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg' alt='' />
                        <h2 className='font-bold text-gray-950 text-center'>Program title</h2>
                    </div>
                </div>
            </menu>

        </>

    )
}
