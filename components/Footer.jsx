export default function Footer() {
    return (
        <>
            <footer className='bg-gray-800 w-full '>
                <div className="text-white sm:mx-auto  md:mx-10 lg:mx-40 p-2 text-sm sm:gap-4 md:py-10 grid gap-4">
                    <div className="sm:flex  sm:gap-3">
                        <h2>Home</h2>
                        <hr />
                        <h2>Terms and Conditions</h2>
                        <hr />
                        <h2>Privacy Policy</h2>
                        <hr />
                        <h2>Collection Statement</h2>
                        <hr />
                        <h2>Help</h2>
                        <hr />
                        <h2>Manage Account</h2>
                    </div>
                    <p>Copyright 2016 DEMO Streaming All Rights Reserved.</p>
                    <div className="flex justify-between">
                        <div className="flex md:gap-5 items-center gap-5 mx-10 sm:mx-0">
                            <img className="cursor-pointer" width={16} src='/icons/facebook-white.svg' alt="" />
                            <img className="cursor-pointer" width={26} src="icons/twitter-white.svg" alt="" />
                            <img className="cursor-pointer" width={24} src="icons/instagram-white.svg" alt="" />
                        </div>
                        <div className="grid gap-1 sm:gap-3 mx-10 sm:flex sm:mx-0">
                            <img className="cursor-pointer" width={125}  src="icons/app-store.svg" alt="" />
                            <img className="cursor-pointer" width={125} src="icons/play-store.svg" alt="" />
                            <img className="cursor-pointer" width={100} src="icons/windows-store.svg" alt="" />
                        </div>
                    </div>
                </div>
            </footer>

        </>

    )
}
