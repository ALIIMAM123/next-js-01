'use client'


import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

let personArray = [
    { id: 1, firstName: 'ali', lastName: 'imam' },
    { id: 2, firstName: 'rohan', lastName: 'kumar' },
    { id: 3, firstName: 'danish', lastName: 'imam' },
    { id: 4, firstName: 'bhupesh', lastName: 'kumar' }

]

const personList = () => {

    const router = useRouter()

    const handlePassId = (id) => {


        router.push(`/studentLists/${id}`)
    }
    return (
        <div>
            <h1>List of person</h1>
            <ul>

                {
                    personArray.map((eachPerson) => (
                        < div className='list-items' key={eachPerson.id}>
                            <li>{eachPerson.id}</li>
                            <li>{eachPerson.firstName}</li>
                            <li>{eachPerson.lastName}</li>
                            <button onClick={() => handlePassId(eachPerson.id)}>Click</button>
                        </div>

                    ))
                }

                {/* <Link href='/studentLists/1'>ali</Link> */}

            </ul>
        </div>
    )
}

export default personList