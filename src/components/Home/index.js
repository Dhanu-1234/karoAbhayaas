import Slider from 'react-slick'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TopScorerCard from '../TopScorerCard'
import ReviewCard from '../ReviewCard'
import Footer from '../Footer'


const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const topScorerDetails = [
    {
        id: 1,
        name: 'Amit',
        imageUrl: 'https://thumbs.dreamstime.com/b/happy-indian-student-sitting-stairs-showing-thumb-up-working-laptop-university-campus-technology-education-117129486.jpg',
        review: 'The product quality consistently surpasses my expectations, leaving me astonished each time'
    },
    {
        id: 2,
        name: 'Ankush',
        imageUrl: 'https://t3.ftcdn.net/jpg/04/67/95/62/360_F_467956231_iXvs5RPoUVza2rYkSXAKldT9vIOHBPbK.jpg',
        review: 'The product quality consistently surpasses my expectations, leaving me astonished each time'
    },
    {
        id: 3,
        name: 'Sushma',
        imageUrl: 'https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=170667a&w=0&k=20&c=QF03IsAU2c5TdLEAxK0Z926zRgVebRBVsl_3I6aabNI=',
        review: 'The product quality consistently surpasses my expectations, leaving me astonished each time'
    }
]

const Home = () => (
    <div className='home-bg'>
        <div className='slider'>
            <Slider {...settings}>
                <div>
                    <img src='https://www.flizzindia.com/wp-content/uploads/2020/02/neet_banner-11-768x256.jpg' alt='banner1' className='banner-img'/>
                </div>
                <div>
                    <img src='https://www.narayanacoachingcenters.in/crashcourse/images/neet.jpg' alt='banner2' className='banner-img'/>
                </div>
                <div>
                    <img src='https://blog.mtg.in/wp-content/uploads/2023/05/blog-banner-neet-eligibility-2024-768x323.jpg' alt='banner3' className='banner-img'/>
                </div>
            </Slider>
        </div>
        <h2 className='top-students-heading'>Top Students</h2>
        <ul className='ul-list'>
            {topScorerDetails.map(eachObj => <TopScorerCard key={eachObj.id} details={eachObj} />)}
        </ul>
        <h2 className='top-students-heading'>Reviews</h2>
        <ul className='ul-list'>
            {topScorerDetails.map(eachObj => <ReviewCard key={eachObj.id} details={eachObj} />)}
        </ul>
        <Footer />
    </div>
)

export default Home
