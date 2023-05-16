import Logo from "../../assets/ebook store -logos_transparent.png"
import {Link} from "react-router-dom"
import {Cart, PersonCircle, Search} from "react-bootstrap-icons"
import {useEffect, useState} from "react"
import {MoonFill, SunFill} from "react-bootstrap-icons"
import {Search as SearchActive} from "../Sections/Search"
import {DropDownNewUser, DropDownLogedIn} from "../index"
import {useCart} from "../../Context/CartContext"
export const Header = () => {
  const {cartList} = useCart()
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  )
  const token = JSON.parse(sessionStorage.getItem("token"))
  const [search, setSearch] = useState(false)
  const [userDropDown, setUserDropDown] = useState(false)
  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])
  const dropDownUser = () => setUserDropDown(!userDropDown)
  const iconColor = isDark ? "white" : ""
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-slate-900 rounded">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to={"/"} className="flex items-center ">
            <img src={Logo} className="w-20 " alt="Webiste Logo" />
            <span className=" text-2xl whitespace-nowrap relative -left-2 dark:text-white">
              Ebook-Store
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {isDark ? (
              <MoonFill
                className="cursor-pointer"
                onClick={() => setIsDark(!isDark)}
              />
            ) : (
              <SunFill
                className="cursor-pointer"
                onClick={() => setIsDark(!isDark)}
              />
            )}
            <Search
              onClick={() => setSearch(!search)}
              color={iconColor}
              className="cursor-pointer"
              size={20}
            />
            <div className="relative">
              <div className="absolute flex justify-center items-center -top-3 left-2 text-center w-5 h-5 text-xs rounded-full bg-red-600 text-white">
                {cartList.length}
              </div>
              <Link to={"/cart"}>
                <Cart color={iconColor} className="cursor-pointer" size={20} />
              </Link>
            </div>
            <PersonCircle
              onClick={dropDownUser}
              color={iconColor}
              className="cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </nav>
      {search && <SearchActive searchBar={setSearch} />}
      {userDropDown &&
        (token ? (
          <DropDownLogedIn setDropLogin={setUserDropDown} />
        ) : (
          <DropDownNewUser setDropLogin={setUserDropDown} />
        ))}
    </header>
  )
}
