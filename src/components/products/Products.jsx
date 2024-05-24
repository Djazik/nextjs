"use client"
import React from 'react'
import Image from 'next/image'

const Products = ({data}) => {
    console.log(data?.products)
    let productItems = data?.products?.map(el => (
        <div className='cart__wrapper' key={el.id} >
            <Image alt={el.title} width={200} height={175} src={el.images[0]} />
            <h2>{el.title}</h2>
            <p>{el.description}</p>
        </div>
        
    ))
  return (
    <div>
        <div className="products__cart">
        {productItems}
        </div>
    </div>
  )
}

export default Products