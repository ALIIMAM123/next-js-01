'use client'

import React, { useState, useEffect } from 'react'

const Sibling1 = (props) => {
    const [siblin1Data, setSibling1Data] = useState([])

    useEffect(() => {
        if (props.sharedData && Object.keys(props.sharedData).length) {
            setSibling1Data(props.sharedData)
        }
    }, [props.sharedData])

    console.log(siblin1Data, 'sharedData1')
    return (
        <div className='list-main-container'>
            <h1 className='heading'>Sibling- 1</h1>
            <ul className='list-container'>
                {siblin1Data && siblin1Data.map((eachItem, index) => (
                    <div key={index} className='li-container'>
                        <div key={index} className='li-container-inner'>
                            <li className='li-elements'>{eachItem?.firstName} </li>
                            <li className='li-elements'>{eachItem?.lastName}</li>
                            <li className='li-elements' >{eachItem?.rollNo}</li>
                        </div>
                    </div>

                ))}
            </ul>

        </div>
    )
}

export default Sibling1