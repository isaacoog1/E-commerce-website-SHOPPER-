import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((product) => (
                <Item key={product.id} id={product.id} name={product.name} image={product.image} old_price={product.old_price} new_price={product.new_price} />
            ))}
        </div>
    </div>
  )
}

export default Popular