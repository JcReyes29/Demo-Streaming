
export default function Picture() {
    return (
        <>
            <div className='flex flex-col gap-1'>
                <img width={130} className='cursor-pointer hover:opacity-85 hover:border-2 hover:border-white' src='' alt='' />
                <h2 className='font-bold text-gray-950 text-center cursor-pointer'>Title</h2>
            </div>
        </>
    )
}
