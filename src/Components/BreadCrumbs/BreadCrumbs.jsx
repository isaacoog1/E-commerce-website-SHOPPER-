import React from 'react'
import './BreadCrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrumbs = ({ product }) => {
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrumbs