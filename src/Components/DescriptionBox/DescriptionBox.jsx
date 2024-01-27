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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium expedita non maiores. Doloribus deleniti repudiandae, libero hic optio quasi velit provident, sint laudantium natus soluta veritatis sed totam esse, excepturi ab? Quam quidem distinctio sint molestias cum, ipsum reprehenderit ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui iste consectetur corporis ducimus quam velit minus exercitationem voluptas provident!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox