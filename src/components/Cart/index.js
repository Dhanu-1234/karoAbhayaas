import { FaRupeeSign } from "react-icons/fa"
import './index.css'
import CoursesContext from '../../context/CoursesContext'
import CartItem from '../CartItem'

const Cart = () => (
    <CoursesContext.Consumer>
        {
            value => {
                const {cartItemsList, removeItem} = value
                let sum = 0;
                cartItemsList.map(eachObj => {
                    sum = sum + eachObj.price
                    return sum
                })

                const onRemoveItem = id => {
                    const sortedProducts = cartItemsList.filter(eachObj => eachObj.id === id)
                    const productDetails = sortedProducts[0]
                    removeItem(productDetails)
                }
                
                return (
                    <div className='cart-container'>
                        <div className='cart-details-container'>
                            <div className='cart-summary'>
                                <div>
                                    <h2 className='cart-total-price'>TOTAL : <FaRupeeSign className="rupee-icon"/>{sum}</h2>
                                </div>
                                <button className='checkout-btn'>CHECKOUT</button>
                            </div>
                            <hr className='cart-line'/>
                            <ul className='cart-products-list'>
                                {cartItemsList.map(eachObj => <CartItem key={eachObj.id} details={eachObj} onRemoveItem={onRemoveItem}/>)}
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    </CoursesContext.Consumer>
)

export default Cart
