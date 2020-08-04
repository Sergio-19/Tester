import React from 'react'
import './question.scss'



export const Question = (props) =>{
    return(
        <React.Fragment>
          <div className="mui--text-dark-secondary mui--text-body2"><h2>{props.question}</h2></div>
            <div className="mui-divider"></div>
            <br/>  
        </React.Fragment>
        
    )
}