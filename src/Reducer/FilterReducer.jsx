export const FilterReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case "Product_List":
      return {...state, productsList: [...payload.products]}
    case "Best_seller":
      return {...state, BestSellerOnly: payload.filter}
    case "In_Stock_only":
      return {...state, inStockOnly: payload.filter}
    case "Rating":
      return {...state, rating: payload.filter}
    case "HighToLow":
      return {...state, sortBy: payload.filter}
    case "LowToHigh":
      return {...state, sortBy: payload.filter}
    case "Clear":
      return {
        ...state,
        inStockOnly: false,
        rating: null,
        BestSellerOnly: false,
        sortBy: null,
      }
    default:
      throw new Error()
  }
}
