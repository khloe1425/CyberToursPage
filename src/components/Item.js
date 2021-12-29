import React, { useState } from 'react'
import { toggleShow } from '../actions/displayAction'
import { deleteTour } from '../actions/tourAction'
import Badge from './Badge'

export default function Item(props) {
    const [showDes, setShowDes] = useState(false)
    return (
        <div className='item'>
            <div className="item-image">
                <img src={props.img} alt="" />
            </div>
            <div className="item-content">
                <div className="item-content-title">
                    <p>{props.name}</p>
                    <Badge price={props.price} />
                </div>
                <div className="item-content-description">
                    {!showDes && props.des.length > 270 ? props.des.substring(0, 270) + " ..." : props.des}
                    <span
                    onClick={()=>{
                        setShowDes(!showDes)
                    }}
                    > {showDes ? 'Show less' : 'Read more'}</span>
                </div>
                <div className='item-content-btn'>
                    <button
                        onClick={() => {
                            props.deleteTour(props.idTour)
                        }}
                    >Not Interested</button>
                </div>
            </div>
        </div>
    )
}
