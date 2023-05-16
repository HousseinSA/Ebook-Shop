import {Link} from "react-router-dom"
export const DropDownNewUser = ({setDropLogin}) => {
  const handelClose = () => {
    setDropLogin(false)
  }
  return (
    <div className=" bg-white py-2 dark:bg-slate-800 select-none absolute top-20 right-12 z-20 rounded">
      <Link
        className="block text-left  cursor-pointer py-2 px-20 pl-3 hover:bg-gray-100 dark:hover:bg-gray-500"
        onClick={handelClose}
        to={"/products"}>
        <span>All Books</span>
      </Link>
      <Link
        onClick={handelClose}
        to={"/register"}
        className="block py-2 cursor-pointer px-20 pl-3 hover:bg-gray-100 dark:hover:bg-gray-500">
        <span>Register</span>
      </Link>
      <Link
        onClick={handelClose}
        to={"/login"}
        className="block py-2 cursor-pointer px-20 pl-3 hover:bg-gray-100  text-sm dark:hover:bg-gray-500">
        <span>Login</span>
      </Link>
    </div>
  )
}
