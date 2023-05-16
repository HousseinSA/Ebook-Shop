import {useEffect} from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `EBook-store: ${title}`
  }, [title])
  return null
}
