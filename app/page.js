import Link from "next/link";
export default function Home() {
  return (
    <>
      <>
        <div className="flex-grow">
          <header className="bg-gray-700 sm:h-14 md:h-14 shadow-xl mx-auto grid justify-center sm:justify-start sm:px-5 lg:px-40
items-center sm:flex p-2">
            <h1 className="text-white
font-medium text-2xl">Popular Titles</h1>
          </header>
          <menu className="mx-4 grid sm:grid-cols-3 md:mx-40 my-8 tall">
            <div className="flex gap-4 justify-center sm:justify-center md:justify-start">
              <div className="cursor-pointer flex flex-col gap-2">
                <Link href="/series" className="active:bg-gray-700 bg-[url('/icons/images/placeholder.png')] bg-gray-900 rounded-md bg-cover bg-center h-44 w-28 flex place-content-center items-center">
                  <h2 className="text-2xl text-white font-medium">SERIES</h2>
                </Link>
                <h2 className="text-sm font-medium text-center">Popular Series</h2>
              </div>
              <div className="cursor-pointer flex flex-col gap-2">
                <Link href="/movies" className="active:bg-gray-700 bg-[url('/icons/images/placeholder.png')] bg-gray-900 rounded-md bg-cover bg-center h-44 w-28 flex place-content-center items-center">
                  <h2 className="text-2xl text-white font-medium">MOVIES</h2>
                </Link>
                <h2 className="text-sm font-medium text-center">Popular Movies</h2>
              </div>
            </div>
          </menu>
        </div>
      </>
    </>
  );
}
