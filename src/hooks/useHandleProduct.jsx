import {useCart} from "../Context/CartContext"

export const useHandleProduct = (product, addproduct, setAddProduct) => {
  const {addTocart, removeFromCart} = useCart()
  const handleProduct = () => {
    setAddProduct((prev) => !prev)
    if (!addproduct) {
      addTocart(product)
    } else {
      removeFromCart(product)
    }
  }
  return {handleProduct}
}
