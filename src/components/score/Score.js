import React from 'react'
import './score.scss'
import {Button} from '../button/Button'


export const Score = (props) =>{

    return(
        <div className = 'score'>
            <h2>{props.head}</h2>
            <p>{props.body}</p>
            <br/>
            <br/>
            <br/>
            <Button text = {props.btnTxt} click = {props.click}/>
        </div>
    )
}