import React from "react"
import {Link} from "react-router-dom"
import img from "../../src/assets/CodeImages/erik-mclean-sxiSod0tyYQ-unsplash.jpg"
export const PageNotFound = () => {
 return (
    <main>
      <div className="p-3 m-auto text-4xl text-center ">
        Sorry Page Not Found
      </div>
      <img
        className="max-w-lg h-50 rounded block m-auto "
        src={img}
        alt="not found"
      />
      <button className=" rounded py-2 block mt-4 m-auto px-4 bg-blue-700 text-white hover:bg-blue-400">
        <Link to={"/"}>Home</Link>
      </button>
    </main>
  )
}
