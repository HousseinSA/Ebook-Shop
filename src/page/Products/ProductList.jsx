import {ThreeDotsVertical} from "react-bootstrap-icons"
import {ProductsCard} from "../../Components/Elements/ProductsCard"
import {FilterBar} from "./Components/FilterBar"
import {useEffect, useState} from "react"
import {useSearchParams} from "react-router-dom"
import {useTitle} from "../../hooks/useTitle"
import {getProductsList} from "../../Services"
import {useProductContext} from "../../Context"
import {toast} from "react-toastify"
export const ProductList = () => {
  const {products, productStateChanger} = useProductContext()
  const [show, setShow] = useState(false)
  const [searchParams] = useSearchParams()
  const getSearch = searchParams.get("q")
  const handleShow = () => setShow(!show)
  useTitle("EBook-Store: Products")

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getProductsList(getSearch)
        productStateChanger(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }
    getProducts()
  }, [getSearch]) // eslint-disable-line

  return (
    <>
      <main className="dark:text-white relative">
        <section>
          <>
            <div className="py-3 px-5 mb-5 flex justify-between items-center">
              <h1 className="text-2xl font-somibold">
                ({products.length}) Ebooks
              </h1>
              <button className="cursor-pointer" onClick={handleShow}>
                <ThreeDotsVertical fontSize={20} />
              </button>
            </div>
            <div className="py-3 flex justify-center items-start flex-wrap gap-4">
              {products.map((product) => {
                return <ProductsCard key={product.id} product={product} />
              })}
            </div>
          </>
        </section>
        {show && <FilterBar setShow={setShow} />}
      </main>
    </>
  )
}
