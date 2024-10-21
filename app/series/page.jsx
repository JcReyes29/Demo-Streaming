'use client'
import axios from "axios";

export async function CallApi() {
    // Llamada archivo json
    const res = await fetch('sample.json');
    const posts = await res.json();

    return posts
}


const Picture = ({ item }) => (

    <div key={item.title} className='flex flex-col gap-1'>
        <img width={130} className='cursor-pointer hover:opacity-85 hover:border-2 hover:border-white' src='' alt='' />
        <h2 className='font-bold text-gray-950 text-center cursor-pointer'>{item.images.PosterArt.url}</h2>
    </div>
)

export default function Series({ }) {
    axios.get('sample.json').then(({ data }) => console.log(data)).catch((error) => console.log(error.message))
    const posts = []

    return (
        <>
            <header className="bg-gray-700 sm:h-14 md:h-14 shadow-xl mx-auto grid justify-center sm:justify-start sm:px-5 lg:px-40 items-center sm:flex p-2">
                <h1 className="text-white font-medium text-2xl">Popular Series</h1>
            </header>
            <menu className='tall mx-4 md:mx-40 my-8 overflow-y-auto'>
                <div className='flex flex-wrap justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 gap-3'>
                    {
                        posts.map(item => (
                            <Picture key={item.title} item={item} />
                        ))
                    }

                </div>
            </menu>

        </>

    )
}
