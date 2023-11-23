'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const Lecture = () => {
    const params = useParams()
    const firstSegment = params.lecture[0]
    const secondSegment = params.lecture[1]
    const thirdSegment = params.lecture[2]
    console.log(firstSegment, 'firtstSegmant')

    console.log(params, "newParams")
    return (
        <div>
            <h1>Segment 1 -{firstSegment ? firstSegment : ''} </h1>
            <h1>Segment 2 -{secondSegment ? secondSegment : ''} </h1>
            <h1>Segment 3 -{thirdSegment ? thirdSegment : ''} </h1>
        </div>
    )
}

export default Lecture