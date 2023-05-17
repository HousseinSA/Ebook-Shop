import {CreditCard, XLg, Lock} from "react-bootstrap-icons"
import {useCart} from "../../../Context/CartContext"
import {useNavigate} from "react-router-dom"
import {createOrder, getUser} from "../../../Services"
import {useEffect, useState} from "react"

export const Checkout = ({setOrderModal}) => {
  const {cartList, total, clearCart} = useCart()
  const userId = JSON.parse(sessionStorage.getItem("UserId"))
  const navigate = useNavigate()
  const [User, SetUser] = useState({})
  const {name, email} = User
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser()
      SetUser(data)
    }
    fetchUser()
  }, [])
  const handelCheckout = async (e) => {
    e.preventDefault()
    const order = {
      user: {name: name, email: email, id: userId},
      order: cartList,
      totalAmount: total,
      itemsCount: cartList.length,
    }
    const response = await createOrder(order)
    if (response.ok) {
      navigate("/order-details", {state: {status: true}})
      clearCart()
    } else {
      navigate("/order-details", {state: {status: false}})
    }
  }
  return (
    <div className="flex flex-col m-5 items-center justify-center min-h-screen">
      (
      <div className="fixed z-10 inset-0 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative dark:bg-slate-800 dark:text-white  bg-white w-full max-w-md mx-auto rounded-lg shadow-lg">
            <div className="mx-3 mt-3 font-semibold">
              <CreditCard className="inline mr-1" size={20} />
              <h1 className="inline"> CARD PAYMENT</h1>
            </div>
            <XLg
              onClick={() => setOrderModal((prev) => !prev)}
              className=" absolute dark:text-white top-3 right-5 cursor-pointer "
              size={20}
            />
            <form className="p-6" onSubmit={handelCheckout}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={name || ""}
                  disabled
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="email"
                  value={email || ""}
                  type="email"
                  disabled
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Card Number
                </label>
                <input
                  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Card Number"
                  maxLength={"16"}
                  value={4783974928723423 || ""}
                  disabled
                />
              </div>
              <div className="flex justify-around gap-3">
                <div>
                  <label className="block mb-2 text-sm font-medium text-center  text-gray-900 dark:text-white">
                    Expire Date
                  </label>
                  <div className="flex gap-2">
                    <div className="mb-4">
                      <input
                        className="bg-gray-50  border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        maxLength={"1"}
                        value={3 || ""}
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        maxLength={"2"}
                        value={23 || ""}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium  text-center text-gray-900 dark:text-white">
                    Security Number
                  </label>
                  <input
                    className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    maxLength={"3"}
                    value={583 || ""}
                    disabled
                  />
                </div>
              </div>
              <div className="flex my-3 mx-auto rounded w-1/2  justify-center p-2  text-blue-500 font-semibold text-2xl ">
                ${total}
              </div>
              <div className="flex justify-center w-full">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  <Lock className="inline mr-2" size={20} />
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    </div>
  )
}
