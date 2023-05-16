import {Link} from "react-router-dom"
import Image from "../../../assets/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg"
export const Hero = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row  lg:gap-4 dark:text-slate-100  item-center">
      <div className=" my-5">
        <h1 className="text-4xl font-bold">
          The Only Ebook Store You'll Need.
        </h1>
        <p className="text-lg my-7 px-1 dark:text-slate-300">
          CodeBook is the world's most popular Ebook store find source for
          computer science ebbks. Find ratings and access to the newest books
          digitally.
        </p>
        <button className="text-white   py-1 px-4 bg-blue-700 rounded hover:bg-blue-800 focus:ring-4">
          <Link to={"/products"}> Explore Ebooks</Link>
        </button>
      </div>
      <div className="my-5 max-w-2xl lg:max-w-xl ">
        <img src={Image} alt="Hero " className="rounded" />
      </div>
    </section>
  )
}
