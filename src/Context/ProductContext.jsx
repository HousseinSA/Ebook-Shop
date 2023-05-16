import {createContext, useContext, useReducer} from "react"
import {FilterReducer} from "../Reducer/FilterReducer"
const initialValues = {
  productsList: [],
  inStockOnly: false,
  BestSellerOnly: false,
  rating: null,
  sortBy: null,
}
const CreateContextFilter = createContext(initialValues)
export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(FilterReducer, initialValues)
  function productStateChanger(products) {
    dispatch({
      type: "Product_List",
      payload: {
        products: products,
      },
    })
  }
  const productSortBy = (products) => {
    if (state.sortBy === "LowToHigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price))
    }
    if (state.sortBy === "HighToLow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price))
    }
    return products
  }
  const ProductRating = (products) => {
    if (state.rating === "4StarsABove") {
      return products.filter((product) => product.rating >= 4)
    }
    if (state.rating === "3StarsABove") {
      return products.filter((product) => product.rating >= 3)
    }
    if (state.rating === "2StarsABove") {
      return products.filter((product) => product.rating >= 2)
    }
    if (state.rating === "1StarABove") {
      return products.filter((product) => product.rating >= 1)
    }
    return products
  }
  const productBestSeller = (products) => {
    return state.BestSellerOnly
      ? products.filter((product) => product.best_Seller === true)
      : products
  }
  const productInStuck = (products) => {
    return state.inStockOnly
      ? products.filter((product) => product.in_stock === true)
      : products
  }
  const filterProductList = ProductRating(
    productInStuck(productSortBy(productBestSeller(state.productsList)))
  )

  const value = {
    productStateChanger,
    products: filterProductList,
    state,
    dispatch,
    initialValues,
  }
  return (
    <CreateContextFilter.Provider value={value}>
      {children}
    </CreateContextFilter.Provider>
  )
}
export const useProductContext = () => useContext(CreateContextFilter)
