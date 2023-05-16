import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import {LogOut, getUser} from "../../Services"
import {toast} from "react-toastify"
export const DropDownLogedIn = ({setDropLogin}) => {
  const handelClose = () => setDropLogin(false)
  const handelLogoutAndClose = () => {
    LogOut()
    setDropLogin(false)
  }
  const [userInfo, SetUserInfo] = useState({})
  const {email} = userInfo
  useEffect(() => {
    const UserFetch = async () => {
      try {
        const data = await getUser()
        SetUserInfo(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }
    UserFetch()
  }, [])
  return (
    <div className=" bg-white py-2 dark:bg-slate-800 select-none absolute top-20 right-12 z-20 rounded">
      <div className="border-b py-2 px-20 pl-3 font-semibold">{email}</div>
      <Link
        className="block text-left  cursor-pointer py-2 px-20 pl-3 hover:bg-gray-100 dark:hover:bg-gray-500"
        onClick={handelClose}
        to={"/products"}>
        <span>All Books</span>
      </Link>
      <Link
        onClick={handelClose}
        to={"/dashboard"}
        className="block py-2 cursor-pointer px-20 pl-3 hover:bg-gray-100 dark:hover:bg-gray-500">
        <span>Dashboard</span>
      </Link>
      <Link
        onClick={handelLogoutAndClose}
        to={"/"}
        className="block py-2 cursor-pointer px-20 pl-3 hover:bg-gray-100  text-sm dark:hover:bg-gray-500">
        <span>Logout</span>
      </Link>
    </div>
  )
}
