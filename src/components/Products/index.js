import './index.css'
import { IoIosSearch } from "react-icons/io"
import { IoFilter } from "react-icons/io5"
import CoursesContext from '../../context/CoursesContext'
import ProductItem from '../ProductItem'

const productsList = [
    {
        id: 1,
        name: 'NEET Guide',
        imageUrl: 'https://mtgpublicwp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/05/06152942/2021_neet_guide_bio_9789390931835-scaled.jpg',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel. Sit amet dictum sit amet justo. Egestas quis ipsum suspendisse ultrices gravida. Volutpat lacus laoreet non curabitur gravida. Malesuada proin libero nunc consequat. Urna duis convallis convallis tellus id interdum velit. Tellus elementum sagittis vitae et leo duis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Senectus et netus et malesuada fames ac.'
    },
    {
        id: 2,
        name: 'NEET Botany',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.RpYpe1ItTygtXM82JlBibQHaJh&pid=Api&P=0&h=180',
        price: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel. Sit amet dictum sit amet justo. Egestas quis ipsum suspendisse ultrices gravida. Volutpat lacus laoreet non curabitur gravida. Malesuada proin libero nunc consequat. Urna duis convallis convallis tellus id interdum velit. Tellus elementum sagittis vitae et leo duis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Senectus et netus et malesuada fames ac.'
    },
    {
        id: 3,
        name: 'NEET Physics',
        imageUrl: 'https://www.schandpublishing.com/uploads/bookimages/schand-books/9789352531905.jpg',
        price: 2500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel. Sit amet dictum sit amet justo. Egestas quis ipsum suspendisse ultrices gravida. Volutpat lacus laoreet non curabitur gravida. Malesuada proin libero nunc consequat. Urna duis convallis convallis tellus id interdum velit. Tellus elementum sagittis vitae et leo duis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Senectus et netus et malesuada fames ac.'
    }
]

const Products = () => (
    <CoursesContext.Consumer>
        {
            value => {
                const {addItem} = value

                const onAddItem = id => {
                    const sortedProducts = productsList.filter(eachObj => eachObj.id === id)
                    const prodcutDetails = sortedProducts[0]
                    addItem(prodcutDetails)
                }

                return (
                    <div className='products-container'>
                        <div className='search-bar'>
                            <IoIosSearch className='search-bar-icons'/>
                            <input className='search-input'/>
                            <IoFilter className='search-bar-icons'/>
                        </div>
                        <ul className='products-list'>
                            {productsList.map(eachObj => <ProductItem key={eachObj.id} details={eachObj} onAddItem={onAddItem}/>)}
                        </ul>
                    </div>
                )
            }
        }
    </CoursesContext.Consumer>
)

export default Products
