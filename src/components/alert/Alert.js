import React, {useContext} from 'react'
import './alert.scss'
import MainContext from '../../context/MainContext';



export const Alert = () =>{
    const {state, isAlert} = useContext(MainContext)

    const cls = ['alert']

    const showAlert = () =>{
      cls.push('show_alert')
        setTimeout(()=> isAlert(), 500)
     
        
      } 

    if(state.showAlert){
        showAlert()
    }

    return(
        <div className = {cls.join(' ')}><h2>Ошибка!</h2></div>
    )
}