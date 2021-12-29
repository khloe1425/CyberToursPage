import React from 'react'

export default function Badge(props) {
    return (
        <div className='badge'>
            <p>$ {props.price}</p>
        </div>
    )
}
