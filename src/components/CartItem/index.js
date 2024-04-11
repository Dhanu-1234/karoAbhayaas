import './index.css'
import { FaRupeeSign } from "react-icons/fa"

const CartItem = props => {
    const {details, onRemoveItem} = props
    const {id, name, imageUrl, price, description} = details

    const onClicked = () => {
        onRemoveItem(id)
    }

    return (
        <>
            <li className='cart-product-item'>
                <div className='cart-product-img-container'>
                    <img src={imageUrl} alt="product" className='cart-product-img'/>
                </div>
                <div className='cart-product-details-container'>
                    <div className='cart-product-title-container'>
                        <h3 className='cart-product-name'>{name}</h3>
                        <p className='cart-product-description'>{description}</p>
                    </div>
                    <div>
                        <p className='cart-product-price'><FaRupeeSign />{price}</p>
                        <button className='cart-delete-btn' onClick={onClicked}>DELETE</button>
                    </div>
                </div>
            </li>
            <hr className='line-styles'/>
        </>
    )
}

export default CartItem
