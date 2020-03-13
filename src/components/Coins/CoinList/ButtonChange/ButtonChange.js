import React from 'react'
import changeImg from './change.png'
import './style.scss'

export default function ButtonChange(props) {
    return (
        <div 
          className="btn-change"
          onClick={(e, data) => props.onClick(e, data)}>
            <img src={changeImg}></img>
        </div>
    )
}
