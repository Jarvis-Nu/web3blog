import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/solid"

const Post = ({ title, id, description, thumbnail, date }) => {
  return (
    <div className="flex flex-col items-center w-full py-5 px-2.5 sm:px-10">
      <div className="flex flex-col md:flex-row w-full max-w-2xl md:space-x-5">
        <div className="relative w-[300px] h-full min-h-[200px]">
          <Image src={thumbnail} layout="fill" alt="image" />
        </div>
        <div className="flex-1 space-y-1.5 pt-2.5 md:pt-0">
          <h3 className="text-2xl md:text-3xl font-semibold">{title.length > 35 ? title.substring(0, 35) + "..." : title}</h3>
          <h5 className="text-lg md:text-xl font-semibold">{date}</h5>
          <p className="text-lg">{description.length > 80 ? description.substring(0, 80) + "..." : description}</p>
          <Link href={`/posts/${id}`} className="flex items-center space-x-1">
            <p className="h-8 text-lg font-semibold text-blue-500">Read more</p>
            <ArrowRightIcon className="w-5 h-5 text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post