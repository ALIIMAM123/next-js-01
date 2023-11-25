'use client'

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [productList, setProductList] = useState([])
  const router = useRouter()

  const handleNaviation = (routeName) => {
    router.push(routeName)
  }

  const fetchDataFromApi = async () => {
    let data = await fetch('https://fakestoreapi.com/products');
    data = await data.json();
    setProductList(data)

  }

  console.log(productList)

  return (
    <main className='main-container'>
      <h1>Basic Routing</h1>
      <Link href='/login'>
        Go To Login Page
      </Link>
      <br />
      <Link href='/about'>
        Go To About Us Page
      </Link>

      <button onClick={() => handleNaviation('/login')}>
        Go to Login Page
      </button>
      <button onClick={() => handleNaviation('/about')}>
        Go to About Page
      </button>

      <br />

      <button onClick={fetchDataFromApi}>
        Fetch Data from API
      </button>

      <p>
        {productList && productList.map((eachItem) => (
          <h1>{eachItem.title}</h1>
        ))}
      </p>

    </main>
  )
}


