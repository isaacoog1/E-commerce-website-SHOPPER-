import React from 'react'
import Item from '../Item/Item'
import './RelatedProducts.css'
import data_products from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1> 
        <hr />
        <div className="relatedproducts-item">
            {
                data_products.map((product, index) => {
                    return <Item key={product.id} id={product.id} name={product.name} image={product.image} old_price={product.old_price} new_price={product.new_price} />
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts