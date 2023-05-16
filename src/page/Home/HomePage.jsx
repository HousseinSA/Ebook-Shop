import {useTitle} from "../../hooks/index"
import {Hero, FeaturedProducts, Testemonial, Faq} from "./Components"
export const HomePage = () => {
  useTitle("Home")
  
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testemonial />
      <Faq />
    </main>
  )
}
