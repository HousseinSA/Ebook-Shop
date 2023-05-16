import {Cart2 ,ArrowRight} from "react-bootstrap-icons"
import {Link} from "react-router-dom"

export const DashboardEmpty = () => {
  return (
    <div className="my-4 border w-10/12 mx-auto flex flex-col items-center p-4 border-gray-500 rounded">
    <Cart2 color="green" size={100} />
    <div className="mt-3 text-center md:text-left">
      Opps.looks like your Dashboard is empty!
    </div>
    <Link
      to={"/products"}
      className=" text-white block  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
     Order Here 
      <ArrowRight className=" ml-2 inline-block" />
    </Link>
  </div>
  )
}
