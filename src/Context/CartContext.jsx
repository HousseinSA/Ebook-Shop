import {createContext, useContext, useReducer} from "react"
import {CartReducer} from "../Reducer/CartReducer"
const intialCartValues = {
  cartList: [],
  total: 0,
}
const CreateCartContext = createContext(intialCartValues)
export const CartContext = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, intialCartValues)
  const addTocart = (product) => {
    const updatedCart = state.cartList.concat(product)
    const updateTotal = state.total + product.price
    dispatch({
      type: "ADD_TO_CART",
      payload: {products: updatedCart, total: updateTotal},
    })
  }

  const removeFromCart = (product) => {
    const filterProduct = state.cartList.filter(
      (item) => item.id !== product.id
    )
    const updateTotal = state.cartList.find((item) => item.id === product.id)
      ? state.total - product.price
      : state.total
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {products: filterProduct, total: updateTotal},
    })
  }
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    })
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addTocart,
    removeFromCart,
    clearCart,
  }
  return (
    <CreateCartContext.Provider value={value}>
      {children}
    </CreateCartContext.Provider>
  )
}

export const useCart = () => useContext(CreateCartContext)
