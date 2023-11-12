'use client'

import { useState } from 'react'

import Image from 'next/image'
import styles from './page.module.css'
import Sibling1 from './sibling1/page'
import Sibling2 from './sibling2/page'

export default function Home() {

  const [sharedData, setSharedData] = useState([])
  const [selectedName, setSelectedName] = useState({
    firstName: '',
    lastName: '',
    rollNo: ''
  })

  const parentFunction = (data) => {
    setSharedData((prev) => ([...prev, data]))
  }

  return (
    <main className='main-container'>
      <div className='inner-main-container'>
        <div className='right-section'>
          <Sibling2 parentFunction={parentFunction} />
        </div>

        <div className='left-section'>
          <div className='inner-left-section'>
            <Sibling1 sharedData={sharedData} />
          </div>

        </div>

      </div>

    </main>
  )
}


