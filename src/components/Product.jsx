import './Product.css';

function Product ({ product }) {
  return (
    <div className='product-card'>
       <div className='product-image'>
         <img src={product.img} alt={product.name} className='product-image'/>
            <h4>{product.name}</h4>
            </div>
            <p className='discount'>Discount: {product.discount}%</p>
        <div className='product-details'>
            <p className='product-rating'>{product.rating}/5</p>
            < div className='price-container'>
              <p className='product-price'>${product.price.toFixed(2)}</p>
              <p className='original-price'>${product.originalPrice.toFixed(2)}</p>
            </div>
            
            <button className='add-to-cart'>Add to Cart</button>
            
        </div>
    </div>
  )
}

export default Product;