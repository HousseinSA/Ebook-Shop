export const Login = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken))
    sessionStorage.setItem("UserId", JSON.stringify(data.user.id))
  }
  return data
}
export const Register = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken))
    sessionStorage.setItem("UserId", JSON.stringify(data.user.id))
  }
  return data
}
export const LogOut = () => {
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("UserId")
}
