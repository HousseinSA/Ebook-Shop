import {useParams} from "react-router-dom"
import {StarComponent} from "../Components/Elements/StarComponent"
import {useTitle} from "../hooks/useTitle"
import {useEffect, useState} from "react"
import {ArrowRight, Trash} from "react-bootstrap-icons"
import {getProduct} from "../Services"
import {useHandleProduct} from "../hooks/useHandleProduct"
import {toast} from "react-toastify"
export const ProductDetail = () => {
  const [addproduct, setAppProduct] = useState(false)
  const {id} = useParams()
  useTitle("Product-Details")
  const [productDetails, setProductDetails] = useState({})
  const {handleProduct} = useHandleProduct(
    productDetails,
    addproduct,
    setAppProduct
  )
  const {name, rating, poster, price, size, in_stock, best_Seller} =
    productDetails
  useTitle("Product Details")
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id)
        setProductDetails(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }
    fetchProduct()
  }, [id, poster])

  return (
    <main>
      {productDetails && (
        <div className="flex flex-col flex-wrap h-full dark:text-white justify-center items-center gap-2">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-semibold text-2xl">{name}</h1>
            <span className="text-gray-400">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              repellat!
            </span>
          </div>
          <div className="flex mt-5 justify-center gap-7 flex-wrap items-center">
            <div className="max-w-md">
              <img
                className="rounded "
                src={poster&&require(`../assets/CodeImages/${poster}`)}
                alt={name}
              />
            </div>
            <div className="w-full text-center  md:text-left md:w-1/2">
              <span className="text-xl font-semibold">${price}</span>
              <div className="flex justify-center gap-1 md:justify-start items-center mt-2.5 mb-5">
                <StarComponent rating={rating} />
              </div>
              <div className="my-4">
                {in_stock ? (
                  <span className="font-semibold py-1 px-2 rounded w-25 border bg-green-200 text-green-500">
                    IN Stock
                  </span>
                ) : (
                  <span className="font-semibold py-1 px-2 rounded w-25 border bg-red-300 text-red-500">
                    Out of Stock
                  </span>
                )}
                {best_Seller && (
                  <span className=" ml-2 font-semibold py-1 px-2 rounded w-25 border bg-yellow-200 text-yellow-500">
                    best Seller
                  </span>
                )}
                <span className=" ml-2 font-semibold py-1 px-2 rounded w-25 border bg-blue-200 text-blue-500">
                  {size} MB
                </span>
              </div>
              {addproduct ? (
                <button
                  onClick={handleProduct}
                  className=" inline-block text-white my-4  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Remove from Cart <Trash className=" ml-1 mb-1 inline" />
                </button>
              ) : (
                <button
                  onClick={handleProduct}
                  disabled={!in_stock && true}
                  className=" inline-block text-white my-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart <ArrowRight className=" ml-1 mb-1 inline" />
                </button>
              )}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam ipsa a dolorem aliquid nulla accusantium. Consequuntur
                laboriosam saepe tempore ratione dolor beatae dignissimos
                eveniet placeat aliquam reiciendis, deleniti, optio itaque.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
