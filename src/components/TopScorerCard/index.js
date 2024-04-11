import './index.css'

const TopScorerCard = props => {
    const {details} = props
    const {imageUrl, name, review} = details
    return (
        <li className='student-card'>
            <img src={imageUrl} alt="student" className="student-img"/>
            <h4 className='student-name'>{name}</h4>
            <p className='student-review'>{review}</p>
        </li>
    )
}

export default TopScorerCard
