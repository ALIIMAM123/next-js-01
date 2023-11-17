import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='main-container'>
            <h1>About page</h1>
            <Link href='/login'>
                Go To Login Page
            </Link>
            <br />
            <Link href='/about/aboutstudent'>Go to About student</Link>
            <br />
            <Link href='/about/aboutcollege'>Go to College student</Link>
        </div>


    )
}

export default About