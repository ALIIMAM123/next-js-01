import React from 'react'
import { NextResponse } from 'next/server';

const Middleware = (request) => {
    return (
        NextResponse.redirect(new URL("/login", request.url))
    )
}

export default Middleware


export const config = {
    matcher: ["/about/:path", "/studentLists/:path"]
}

