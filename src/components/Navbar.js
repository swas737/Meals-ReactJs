import React from 'react'

export default function Navbar() {
  return (
    <div
      className='row'
      style={{ backgroundColor: 'brown', flexDirection: 'row' }}
    >
      <div>
        <h1>React Meals</h1>
      </div>
      <div>
        <a href='' style={{ margin: '10px', color: 'white' }}>
          Home
        </a>
        <a href='' style={{ margin: '10px', color: 'white' }}>
          Order
        </a>
        <a href='' style={{ margin: '10px', color: 'white' }}>
          Contact Us
        </a>
      </div>
    </div>
  )
}
