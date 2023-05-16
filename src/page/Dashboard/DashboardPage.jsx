import {useEffect, useState} from "react"
import {DashboardCard, DashboardEmpty} from "./Components"
import {getOrder} from "../../Services"
import {useTitle} from "../../hooks"
import {toast} from "react-toastify"

export const DashboardPage = () => {
  useTitle("Dashboard")
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const data = await getOrder()
        setOrders(data)
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        })
      }
    }
    getUserOrder()
  }, [])
  return (
    <main>
      <section>
        <h1 className="text-center underline font-semibold text-2xl">
          Dashboard
        </h1>
        <section className="mt-2">
          {!orders && <DashboardEmpty />}
          {orders &&
            orders.map((orderCard) => {
              return <DashboardCard key={orderCard.id} item={orderCard} />
            })}
        </section>
      </section>
    </main>
  )
}
