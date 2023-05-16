export const Input = ({name, changeState, dispatch, title}) => {
  const {type, payload} = changeState
  return (
    <label className="flex items-center mt-2">
      <input
        type="radio"
        onClick={() =>
          dispatch({
            type: type,
            payload: payload,
          })
        }
        name={name}
        className="form-radio text-blue-600 h-4 w-4 transition duration-150 ease-in-out  !important"
      />
      <span className="ml-2 text-sm dark:text-gray-400 text-gray-700">
        {title}
      </span>
    </label>
  )
}
