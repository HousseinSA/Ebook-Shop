import {useEffect, useState} from "react"
import {useProductContext} from "../Context"
export const useFetch = (url) => {
  const [data, setData] = useState([])
  const {clickedAdd} = useProductContext()
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((apiData) => setData(apiData))
  }, [url, clickedAdd])
  return {data}
}
