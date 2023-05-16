import React, {useEffect, useState} from "react"
import {ProductsCard} from "../../../Components/Elements/ProductsCard"
import {getFeaturedProducts} from "../../../Services/ProductServices"
import {toast} from "react-toastify"
export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  useEffect(() => {
    const fetchfeaturedProducts = async () => {
      try {
        const data = await getFeaturedProducts()
        setFeaturedProducts(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }

    fetchfeaturedProducts()
  }, [])
  console.log(featuredProducts)
  return (
    <section className="my-20">
      <h1 className="text-center text-2xl p-5 dark:text-slate-100 underline">
        Featured Products
      </h1>
      <div className="flex gap-5 justify-center flex-wrap item-center">
        {featuredProducts.map((product) => {
          return <ProductsCard key={product.id} product={product} />
        })}
      </div>
    </section>
  )
}
