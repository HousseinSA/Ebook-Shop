import {Routes, Route} from "react-router-dom"
import {
  HomePage,
  ProductList,
  ProductDetail,
  RegisterUser,
  LoginUser,
  CartPage,
  OrderPage,
  DashboardPage,
  PageNotFound
} from "../page"
import {ProtectedRoute} from "./ProtectedRoute"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="login" element={<LoginUser />} />
      <Route path="Register" element={<RegisterUser />} />
      <Route path="order-details" element={<OrderPage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}
