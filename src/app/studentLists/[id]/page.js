'use client'

import React from 'react'
// import { useRouter } from 'next/router'
import { useParams, usePathname } from 'next/navigation'

const Details = () => {
    const params = useParams();
    const pathname = usePathname()
    console.log(params, 'params')
    console.log(pathname, 'pathname')
    return (
        <div>page belongs to - {params.id}  and path name - {pathname}</div>
    )
}

export default Details