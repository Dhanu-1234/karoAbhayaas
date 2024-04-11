import './index.css'

const ReviewCard = props => {
    const {details} = props
    const {name, review} = details
    return (
        <li className="review-card">
            <h4 className="customer-name">{name}</h4>
            <p className="review">{review}</p>
        </li>
    )
}

export default ReviewCard
