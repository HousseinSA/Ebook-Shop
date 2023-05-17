import {Trash} from "react-bootstrap-icons"
export const CartCard = ({product}) => {
  const { price, name, poster} = product
  return (
    <div className="flex p-10 border-b border-gray-500 justify-between gap-5 items-center w-full">
      <div>
        <div className="flex gap-4 items-center">
          <img className=" max-w-xs rounded" src={require(`../../../assets/CodeImages/${poster}`)} alt={name} />
          <div>
            <h1 className="text-xl font-thin">{name}</h1>
            <button className="block mt-4 ml-2 py-1 px-2 hover:bg-red-300 rounded text-sm bg-red-500 text-white">
              remove <Trash className="inline" />
            </button>
          </div>
        </div>
      </div>
      <p className="font-semibold"> ${price}</p>
    </div>
  )
}
