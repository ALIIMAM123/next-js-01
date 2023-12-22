'use client'

import React, { useState } from 'react'
import './style.css'

const StylePage = () => {
    const [changeBg, setChangeBg] = useState({ backgroundColor: "green" })

    const handleChangeBackground = () => {
        setChangeBg({ backgroundColor: "orange" })
    }
    return (
        <div>
            <h1 className='heading-style' style={changeBg}>StylePage</h1>
            <button onClick={handleChangeBackground}> Click To Change Button</button>
        </div>


    )
}

export default StylePage