import React, {useContext} from 'react'
import './layout.scss'
import { Post } from '../post/Post';
import { Score } from '../score/Score';
import MainContext from '../../context/MainContext';
import { Alert } from '../alert/Alert';



export const Layout = () =>{

    const {state, testHandler} = useContext(MainContext)

    
    return(

        state.test === 'start' ?

        <React.Fragment>
        <div id="sidebar">
            <div className="mui--text-light mui--text-display1 mui--align-vertical">React JS <br/> тест</div>
        </div>
        <div id="content" className="mui-container-fluid">
            <Score head = 'Проверь свои знания React JS' body = {`Тест состоит из ${state.questionList.length} вопросов`} btnTxt = 'Начать тест' click = {testHandler}/>
        </div>
    </React.Fragment> :

    state.test === 'finish' ? 

    <React.Fragment>
    <div id="sidebar">
        <div className="mui--text-light mui--text-display1 mui--align-vertical">React JS <br/> тест</div>
    </div>
    <div id="content" className="mui-container-fluid">
    <Score head = 'Тест завершен' body = {`Вы ответили правильно на ${Math.round(100/state.questionList.length*state.yes)}% вопросов, оценка ${Math.round(100/state.questionList.length*state.yes) > 50 && Math.round(100/state.questionList.length*state.yes) < 85 ? 'Хор.' : Math.round(100/state.questionList.length*state.yes) <= 50 && Math.round(100/state.questionList.length*state.yes) > 45 ? 'Удовл.' : Math.round(100/state.questionList.length*state.yes) > 85  ? 'Отл.' : 'Неуд.'} `} 
    
            btnTxt = 'Начать сначала' click = {testHandler}/>
    <br/>
    <br/>
    <br/>
    <div className = 'link'>
        <div>
            <a href = 'http://www.blitzscript.ru/'>На главную...</a>
        </div>
    </div>
    </div>
</React.Fragment> :

<React.Fragment>
<div id="sidebar">
    <div className="mui--text-light mui--text-display1 mui--align-vertical">React JS <br/> тест</div>
</div>
<div id="content" className="mui-container-fluid">
    <Alert/>
    <Post/>
</div>
</React.Fragment>
        
        

 


                
                
               

    )
}