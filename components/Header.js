import Link from "next/link"
import Web3Blog from "./Web3Blog"
import { MenuIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full sm:px-10 sm:py-5 p-2.5 md:px-0 max-w-2xl bg-white z-30 absolute inset-x-0 mx-auto">
        <div>
          <Web3Blog />
        </div>
        <div className="hidden space-x-5 md:block">
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Home</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Blog</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Tags</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Projects</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Contributors</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">About</Link>
        </div>
        <button className="md:hidden" onClick={() => document.querySelector(".nav").classList.toggle("-translate-y-full")}><MenuIcon className="w-12 h-12" /></button>
      </div>
      <div className="absolute inset-x-0 top-0 mt-12 w-full -translate-y-full transition duration-500 bg-white flex flex-col space-y-2.5 pt-5 sm:pt-10 z-20 items-center nav">
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Home</Link>
          <Link href="/" className="text-lg font-semibold hover:text-blue-500">Blog</Link>
        <Link href="/" className="text-lg font-semibold hover:text-blue-500">Tags</Link>
        <Link href="/" className="text-lg font-semibold hover:text-blue-500">Projects</Link>
        <Link href="/" className="text-lg font-semibold hover:text-blue-500">Contributors</Link>
        <Link href="/" className="text-lg font-semibold hover:text-blue-500">About</Link>
      </div>    
    </div>

  )
}

export default Header