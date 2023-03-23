import React from 'react'

import pp from "assets/pp.jpg"

const SingleOrder: React.FC = () => {
  return (
    <div className='single-order'>
        <div className='single_order_details'>
          <img src={pp} alt={pp} />
          <div>
            <p>Name</p>
            <p>Order Number</p>
            <p>Date</p>
            <p>Address</p>
            <p>Time ordered</p>
            <p>Total Orders</p>
            <p>Completed Orders</p>
            <p>Rejected Orders</p>
          </div>
        </div>
        <button>Delete</button>
    </div>
  )
}

export default SingleOrder