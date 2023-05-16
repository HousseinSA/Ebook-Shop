export const CartReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case "ADD_TO_CART":
      return {...state, total: payload.total, cartList: payload.products}
    case "REMOVE_FROM_CART":
      return {...state, cartList: payload.products, total: payload.total}
    case "CLEAR_CART":
      return {total: 0, cartList: []}

    default:
      return new Error("No Case Match!")
  }
}
