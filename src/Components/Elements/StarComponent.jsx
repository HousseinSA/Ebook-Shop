import {Star, StarFill} from "react-bootstrap-icons"
export const StarComponent = ({rating}) => {
  function handleStarsRating(rating) {
    const starRating = []
    for (let i = 0; i < 5; i++) {
      let star
      if (i < rating) {
        star = <StarFill color="yellow" />
      } else {
        star = <Star color="yellow" />
      }
      starRating.push(star)
    }
    return starRating
  }
  return (
    <>
      {handleStarsRating(rating).map((star, index) => {
        return <div key={index}>{star}</div>
      })}
    </>
  )
}
