import {useLocation} from "react-router-dom"
import {OrderFail} from "./Components/OrderFail"
import {OrderSuccess} from "./Components/OrderSuccess"
import { useTitle } from "../../hooks"
export const OrderPage = () => {
  useTitle("Order")
  const token = JSON.parse(sessionStorage.getItem("token"))
  const {state} = useLocation()
  return state.status && token ? <OrderSuccess /> : <OrderFail />
}
