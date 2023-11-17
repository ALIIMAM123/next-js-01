'use client'

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleNaviation = (routeName) => {
    router.push(routeName)
  }

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

    </main>
  )
}


