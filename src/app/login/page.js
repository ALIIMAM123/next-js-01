'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter()
    const handleNavigate = (routeName) => {
        router.push('/login/' + routeName)

    }
    return (
        <div className='main-container'>
            <h1>Login Page</h1>
            <button onClick={() => handleNavigate('loginstudent')}>Go To student Login page</button>
            <br />
            <button onClick={() => handleNavigate('loginteacher')}>Go To Teacher Login page</button>
        </div>
    )
}

export default Login