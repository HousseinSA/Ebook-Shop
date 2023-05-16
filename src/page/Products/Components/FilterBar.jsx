import {ArrowClockwise} from "react-bootstrap-icons"
import {useProductContext} from "../../../Context"
import {Input} from "./Input"
export const FilterBar = ({setShow}) => {
  const handleClose = () => setShow(false)

  const {state, dispatch} = useProductContext()
  return (
    <section className="absolute transition-all top-0  lg:-top-3 md:-left-8 p-5">
      <div className="w-full max-w-sm mx-auto dark:text-white rounded-md shadow-md overflow-hidden">
        <div className="bg-white px-4  dark:bg-slate-900  py-5 sm:p-6">
          <div className="flex justify-between ">
            <h3 className="text-lg leading-6 font-medium dark:text-white text-gray-900">
              Filter By
            </h3>
            <button onClick={handleClose}>
              <ArrowClockwise />
            </button>
          </div>
          <div className="mt-4">
            <div>
              <h2 className="font-xl font-semibold mb-2">Sort by</h2>
              <div>
                <Input
                  name={"price"}
                  dispatch={dispatch}
                  title={"High-To-Low"}
                  changeState={{
                    type: "HighToLow",
                    payload: {filter: "HighToLow"},
                  }}
                />
                <Input
                  name={"price"}
                  dispatch={dispatch}
                  title={"Low-To-High"}
                  changeState={{
                    type: "LowToHigh",
                    payload: {filter: "LowToHigh"},
                  }}
                />
              </div>
            </div>
            <div>
              <h2 className="font-xl font-semibold my-2">Rating</h2>

              <Input
                name={"rating"}
                dispatch={dispatch}
                title={"4 Stars & Above"}
                changeState={{type: "Rating", payload: {filter: "4StarsABove"}}}
              />

              <Input
                name={"rating"}
                dispatch={dispatch}
                title={"3 Stars & Above"}
                changeState={{type: "Rating", payload: {filter: "3StarsABove"}}}
              />

              <Input
                name={"rating"}
                dispatch={dispatch}
                title={"2 Stars & Above"}
                changeState={{type: "Rating", payload: {filter: "2StarsABove"}}}
              />

              <Input
                name={"rating"}
                dispatch={dispatch}
                title={"1 Stars & Above"}
                changeState={{type: "Rating", payload: {filter: "StarsABove"}}}
              />
            </div>
            <div>
              <h2 className="font-xl font-semibold my-2">Other</h2>
              <label className="flex items-center mt-2">
                <input
                  defaultChecked={state.BestSellerOnly}
                  type="checkbox"
                  onChange={() =>
                    dispatch({
                      type: "Best_seller",
                      payload: {filter: !state.BestSellerOnly},
                    })
                  }
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-400">
                  Best Seller Only
                </span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({
                      type: "In_Stock_only",
                      payload: {filter: !state.inStockOnly},
                    })
                  }
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-400">
                  INSTOCK Only
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                dispatch({
                  type: "Clear",
                })
              }>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
