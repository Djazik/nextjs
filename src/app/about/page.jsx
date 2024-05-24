import Products from '@/components/products/Products'
import React from 'react'

async function getData() {
    const res = await fetch('https://dummyjson.com/products?limit=4')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const About = async() => {
    let data = await getData()
    const firstThreeProducts = data.products.slice(0, 3);
    console.log(data)
  return (
    <div className="container popular__wrapper">
        <h2>Popular blogs</h2>
        <Products data={data}/>
    </div>
  )
}

export default About