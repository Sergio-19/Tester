import React from 'react'
import './answer.scss'


export const Answer = (props) =>{
    
    return(
        <React.Fragment>
            <br/>
            <br/>
            <div className="mui--text-dark-secondary mui--text-body2 answer"
                 onClick = {()=> props.click(props.arg1, props.arg2)}   
            ><h4>{props.answer}</h4></div>
            <div className="mui-divider"></div>
            <br/>
        </React.Fragment>
        
    )
}