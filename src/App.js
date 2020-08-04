import React from 'react';
import './app.scss';
import { Layout } from './components/layout/Layout';
import MainContext from './context/MainContext';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questions: {},

  questionList: [],
  currentNum: 0,
  yes: 0,
  no: 0,
  test: 'start' ,
  showAlert: false  

    }
  }

  genQuestionList(){
    const questionList = []
    Object.keys(this.state.questions).forEach((question)=>{
      questionList.push(this.state.questions[question])
    })
    this.setState({questionList})
  }


  

  nextQuestionHandler = (id, right) =>{
          
        this.setState({currentNum: this.state.currentNum === this.state.questionList.length -1 ? this.state.currentNum : this.state.currentNum + 1,
                        test: this.state.currentNum === this.state.questionList.length -1 ? 'finish' : 'road',
                        yes: id === right ? this.state.yes + 1 : this.state.yes,
                        no: id !== right ? this.state.no + 1 : this.state.no,
                        showAlert: id !== right ? true : false})
                        
   
  }

 testHandler = () =>{
   this.setState({test: this.state.test === 'start' ? 'road' : 'start',
                  currentNum: 0,
                  yes: 0,
                  no: 0
  
  })
 }


 fetchQuestions = async () =>{
 await  fetch('https://testsobes-e3d4f.firebaseio.com/questions.json')
   .then((response)=> response.json()).then((response)=> this.setState({questions: response}))
 }


isAlert = () =>{
  this.setState({showAlert: false})
}





async  componentDidMount(){
    
  await  this.fetchQuestions()
    this.genQuestionList.call(this)
    
  }

  render(){

   

    return(
      <MainContext.Provider value = {{state: this.state, 
                                      nextQuestionHandler: this.nextQuestionHandler,
                                      testHandler: this.testHandler,
                                      isAlert: this.isAlert
                                      }}>
        <Layout/>
       
      </MainContext.Provider>
      
    )
  }
}

export default App;
