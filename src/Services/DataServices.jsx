export const getUser = async () => {
  const token = JSON.parse(sessionStorage.getItem("token"))
  const userId = JSON.parse(sessionStorage.getItem("UserId"))
  const requestoptions = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    },
  }
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${userId}`,
    requestoptions
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}
export const createOrder = async (order) => {
  const token = JSON.parse(sessionStorage.getItem("token"))
  const requestoptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    },
    body: JSON.stringify(order),
  }
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestoptions
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}
export const getOrder = async () => {
  const token = JSON.parse(sessionStorage.getItem("token"))
  const userId = JSON.parse(sessionStorage.getItem("UserId"))
  const methodOptions = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    },
  }
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${userId}`,
    methodOptions
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}
