import {useCart} from "../../Context/CartContext"
import { useTitle } from "../../hooks"
import {CartList, CartEmpty} from "./Components/index"
export const CartPage = () => {
  useTitle("Cart") 
  const {cartList} = useCart()
  return <main>{cartList.length === 0 ? <CartEmpty /> : <CartList />}</main>
}
