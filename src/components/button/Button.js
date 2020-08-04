import React from 'react'
import './button.scss'



export const Button = (props) =>{
    return(
        <button className="mui-btn mui-btn--accent" onClick = {props.click}>{props.text}</button>
    )
}