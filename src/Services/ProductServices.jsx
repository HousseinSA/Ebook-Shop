export const getProductsList = async (getSearch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/Products?q=${getSearch ? getSearch : ""}`
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}
export const getProduct = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/Products/${id}`
  )
  if (!response.ok) {
    if (!response) {
      throw new Error(response.statusText)
    }
    const data = await getFeaturedProducts(id)
    return data
  }
  const data = await response.json()
  return data
}

export const getFeaturedProducts = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featuredproducts/${id ? id : ""}`
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}
