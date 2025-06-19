import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
           <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
          <p>Welcome to our eCommerce store, your go-to destination for a wide range of quality products at unbeatable prices. Whether you're shopping for the latest fashion trends, must-have electronics, home essentials, or lifestyle accessories, we’ve got everything you need in one place. Our goal is to provide a smooth and secure shopping experience, with fast delivery, easy returns, and 24/7 customer support. Explore our carefully curated collections and enjoy a seamless online shopping journey, trusted by thousands of happy customers.</p>
          <p>At our store, we believe shopping should be simple, enjoyable, and convenient. That’s why we continuously update our collections to bring you the best products at great value. Every item is handpicked for quality, style, and affordability to match your needs and lifestyle. From everyday essentials to special finds, we’re here to help you discover more and stress less. Shop with confidence, knowing your satisfaction is our top priority.</p>
        </div>
    </div>
  )
}

export default DescriptionBox