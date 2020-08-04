import React, {useContext} from 'react'
import { Question } from '../question/Question';
import { Answer } from '../answer/Answer';
import MainContext from '../../context/MainContext';


export const Post = () =>{

    const {state, nextQuestionHandler} = useContext(MainContext)
        let question = ''
        let answerList = {}
        let rightAnswer = 0
        let arrLength = 0

    if(state.questionList.length > 0){
      question = (state.questionList[state.currentNum].question) 
      answerList = {...state.questionList[state.currentNum].answers}
      rightAnswer = state.questionList[state.currentNum].rightAnswer
      arrLength = state.questionList.length
    }
    console.log(question)
    return(
        <React.Fragment>
        <div className="mui-row">
<div className="mui-col-sm-10 mui-col-sm-offset-1 post">
<br/>
<br/>
<br/>
<br/>
 <Question question = {question}/>
    {Object.keys(answerList).map((answer, i)=>{
       
        return(
            <Answer answer = {answerList[answer].text} key = {i} click = {nextQuestionHandler} arg1 = {answerList[answer].id} arg2 = {rightAnswer}/>
        )
    })}
</div>


</div>
<br/>
<br/>
<br/>
<div className="mui-panel panel" style = {{textAlign: 'center'}}>

  <h3 style = {{color: '#526680'}}>Вопрос {state.currentNum + 1} из {arrLength}</h3>
</div>
    </React.Fragment>
    )
}