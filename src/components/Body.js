import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Body.css'

export default function Body() {
  const [items, setItem] = useState([])
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response) => {
        console.log(response.data.meals)
        setItem(response.data.meals)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const itemslist = items.map((obj) => {
    return (
      <div className='col-md-4'>
        <p style={{ fontWeight: 'bold' }}>{obj.strMeal}</p>
        <img src={obj.strMealThumb} alt='' className='img-fluid' />
        <p style={{ fontWeight: 'bold' }}>{obj.idMeal}</p>
      </div>
    )
  })
  return (
    <div>
      <div className='row'>{itemslist}</div>
    </div>
  )
}
