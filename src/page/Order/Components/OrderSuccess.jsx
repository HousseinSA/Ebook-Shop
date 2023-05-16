import {useEffect, useState} from "react"
import {Cart, Check2Circle} from "react-bootstrap-icons"
import {Link} from "react-router-dom"
import {getUser} from "../../../Services"
import {toast} from "react-toastify"
import { v4 as uuid4 } from "uuid"

export const OrderSuccess = () => {
  const [user, setUser] = useState({})
  const {email, name, id} = user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser()
        setUser(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }
    fetchUser()
  }, [])
  return (
    <main>
      <div className="my-4 border w-10/12 mx-auto flex flex-col items-center p-4 border-gray-500 rounded">
        <Check2Circle color="green" size={100} />
        <div className="mt-3 text-center md:text-left">
          Thanks you {name} for your order!
        </div>
        <div className="mt-3 text-center md:text-left">Your Order ID:{id}</div>
        <div className="mt-6 text-center md:text-left">
          Your order is confirmed
        </div>
        <div className="mt-3 text-center md:text-left">
          Please Check ({email}) for your Ebooks.
        </div>
        <div className="mt-6 text-center md:text-left">
          Payment ID:{uuid4()}
        </div>
        <Link
          to={"/products"}
          className=" text-white block  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Shop for More
          <Cart className=" ml-2 inline-block" />
        </Link>
      </div>
    </main>
  )
}
