import React from "react"
import {AllRoutes} from "./Routes/AllRoutes"
import {Header, Footer} from "./Components"
import { ScrollFromTop } from "./Components"
export const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Header />
      <ScrollFromTop/>
      <AllRoutes />
      <Footer />
    </div>
  )
}
