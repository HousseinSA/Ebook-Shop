import {Link} from "react-router-dom"
import {StarComponent} from "./StarComponent"
import {ArrowRight, Trash} from "react-bootstrap-icons"
import {useHandleProduct} from "../../hooks/useHandleProduct"
import {useState} from "react"
export const ProductsCard = ({product}) => {
  const [addproduct, setAppProduct] = useState(false)
  const {handleProduct} = useHandleProduct(product, addproduct, setAppProduct)
  const {id, name, overview, price, poster, best_Seller, rating, in_stock} =
    product

  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative max-w-full">
        {best_Seller && (
          <div className="absolute top-2 left-2.5 rounded bg-orange-400 text-sm text-white py-1 px-2">
            Best Seller
          </div>
        )}
        <Link to={`/products/${id}`}>
          <img
            className=" rounded-t-lg"
            src={require(`../../assets/CodeImages/${poster}`)}
            alt="logo"
          />
        </Link>
      </div>
      <div className="px-2 pb-4 py-2">
        <Link to={`/products/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="my-3I">{overview}</p>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <StarComponent rating={rating} />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {addproduct ? (
            <button
              className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={handleProduct}>
              Remove from Cart <Trash className="inline" />
            </button>
          ) : (
            <button
              onClick={handleProduct}
              disabled={!in_stock && true}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to Cart <ArrowRight className="inline-block" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
