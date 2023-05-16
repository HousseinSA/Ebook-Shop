import { Cart, XCircle} from "react-bootstrap-icons"
import {Link} from "react-router-dom"
export const OrderFail = () => {
  return (
    <main>
      <main>
        <div className="my-4 border mx-auto w-10/12 flex flex-col items-center p-4 border-gray-500 rounded">
          <XCircle color="red" size={100} />
          <div className="mt-3 text-center md:text-left">
            Sorry,There was an Error Checking out!
          </div>
          <Link
            to={"/Cart"}
            className=" text-white block  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Check Cart Again
            <Cart className="ml-2 inline-block" />
          </Link>
        </div>
      </main>
    </main>
  )
}
