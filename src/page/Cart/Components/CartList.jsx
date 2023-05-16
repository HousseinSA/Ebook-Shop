import {CartCard, Checkout} from "./index"
import {Link} from "react-router-dom"
import {ArrowRight} from "react-bootstrap-icons"
import {useState} from "react"
import {useCart} from "../../../Context/CartContext"
import {useTitle} from "../../../hooks"
export const CartList = () => {
  const {cartList: Products, total} = useCart()
  const [orderModal, setOrderModal] = useState(false)
  const handelOrder = () => setOrderModal(!orderModal)
  useTitle(`Cart:${Products.length}`)
  return (
    <>
      <div className="p-1 m-auto py-5 px-20   dark:text-white">
        <div className="text-2xl font-semibold text-center underline">
          <h1>MY Cart ({Products.length})</h1>
        </div>
        <div className=" flex flex-col  items-center ">
          {Products.map((product) => {
            return <CartCard key={product.id} product={product} />
          })}
        </div>
        <div className="border-b px-10 py-5 border-gray-500">
          <div className="flex justify-between  items-center">
            <h1 className="font-semibold">Total Amount</h1>
            <p className="font-semibold">${total}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <Link
              onClick={handelOrder}
              className=" text-white block  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Place Order
              <ArrowRight className=" ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>
      {orderModal && <Checkout setOrderModal={setOrderModal} />}
    </>
  )
}
