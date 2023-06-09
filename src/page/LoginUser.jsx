import {useNavigate} from "react-router-dom"
import {Login} from "../Services"
import {toast} from "react-toastify"
import {useTitle} from "../hooks"
import {useRef} from "react"
export const LoginUser = () => {
  const navigate = useNavigate()
  useTitle("Login")
  const emailRef = useRef()
  const passwordRef = useRef()
  const handelLogin = async (e) => {
    e.preventDefault()
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
      const data = await Login(user)
      data.accessToken
        ? navigate("/products")
        : toast.error(data, {position: "top-center"})
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      })
    }
  }
  const handleLoginGuest = async () => {
    const user = {
      email: emailRef.current.value ="guest@gmail.com",
      password: passwordRef.current.value="guest",
    }
    try {
      const data = await Login(user)
      data.accessToken
        ? navigate("/products")
        : toast.error(data, {position: "top-center"})
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      })
    }
  }
  return (
    <main>
      <h1 className="font-semibold text-center underline text-2xl">Login</h1>
      <form onSubmit={handelLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="bg-gray-50  focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </form>
      <button
        onClick={handleLoginGuest}
        className="text-white mt-2 block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login As Guest
      </button>
    </main>
  )
}
