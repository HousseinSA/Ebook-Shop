export const DashboardCard = ({item}) => {
  const {order} = item
  return (
    <section>
      <div className="border w-10/12 mx-auto border-opacity-60 border-gray-500 my-3 rounded p-3 ">
        <div className="flex justify-between  items-center">
          <span className="text-xs">Order ID {item.id}</span>
          <span className="text-xs">Total ${item.totalAmount}</span>
        </div>
        {order.map((orderInfo) => {
          console.log(`../../../assets/CodeImages/${orderInfo.poster}`)
          return (
            <div key={orderInfo.id} className="p-4 flex gap-5">
              <img
                className="w-20 rounded-sm"
                src={require(`../../../assets/CodeImages/${orderInfo.poster}`)}
                alt={orderInfo.name}
              />
              <div className="ml-2 text-sm self-center">
                <p className="mb-1">{orderInfo.name}</p>
                <p>${orderInfo.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
