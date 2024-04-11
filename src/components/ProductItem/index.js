import './index.css'
import { FaRupeeSign } from "react-icons/fa"

const ProductItem = props => {
    const {details, onAddItem} = props
    const {id, name, imageUrl, price, description} = details

    const onClicked = () => {
        onAddItem(id)
    }

    return (
        <>
            <li className='product-item'>
                <div className='product-img-container'>
                    <img src={imageUrl} alt="product" className='product-img'/>
                </div>
                <div className='product-details-container'>
                    <div className='product-title-container'>
                        <h3 className='product-name'>{name}</h3>
                        <p className='product-description'>{description}</p>
                    </div>
                    <div>
                        <p className='product-price'><FaRupeeSign />{price}</p>
                        <button className='add-btn' onClick={onClicked}>ADD TO CART</button>
                    </div>
                </div>
            </li>
            <hr className='line-styles'/>
        </>
    )
}

export default ProductItem
