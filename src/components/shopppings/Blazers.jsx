import React from 'react'
import CardItem from '../CardItem'
const blazers =[
  {
    title : 'Blazer 1',
    imageUrl: '',
    price: 23
  }
]

function Blazers() {
  return (
    <div>
      {
        blazers.map((blazer, index)=>(
          <CardItem key={index} title={blazer.title} price={blazer.price}/>
        ))
      }
    </div>
  )
}

export default Blazers