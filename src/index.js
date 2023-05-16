import {StrictMode} from "react"
import ReactDom from "react-dom/client"
import {App} from "./App"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import {BrowserRouter} from "react-router-dom"
import {ContextProvider} from "./Context/ProductContext"
import {CartContext} from "./Context/CartContext"
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <CartContext>
      <ContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </ContextProvider>
    </CartContext>
  </StrictMode>
)
