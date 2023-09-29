import React, { useState, useEffect } from "react";

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

export default function Quiz() {
  const [data,setData]=useState([]);
  const [chosenAnswers,setChosenAnswers]=useState([]);
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  // Write your code here.
  useEffect(()=>{
    //console.log("in useeffect")
    getData();
  },[])

  async function getData(){
    const res=await fetch(QUIZ_API_BASE_URL);
    const data=await res.json();
    //console.log(data);
    await setData(data); 
    
  }
  const currentQuestion=data[currentQuestionIndex];
  //console.log(currentQuestion);

  const updateChosenAnswers=(currentQuestionIndex,optionIndex)=>{
    console.log("=====");
    console.log(chosenAnswers);
    console.log("=====");
    const newChosenAnswer=[...chosenAnswers];
    console.log("++++++");
    console.log(newChosenAnswer);
    console.log("++++++");
    newChosenAnswer[currentQuestionIndex]=optionIndex;
    setChosenAnswers(newChosenAnswer);
    
  }
  return (
    <>
      <div>
        <h1>{currentQuestion?.question}</h1>
        <div>
          {currentQuestion?.answers.map((options,index)=> 
            {
                const chAns=chosenAnswers[currentQuestionIndex];
                let className='answer';
                if(chAns===index){
                    className+=' correct'
                }
                else
                    className+=' incorrect' 
                return(
                    <h2 className='answer'
                     onClick={
                        ()=>{
                                if(chAns!=null) return;
                                updateChosenAnswers(currentQuestionIndex,index)
                            }
                        }> {options} </h2> )
            }
         )} 
        </div>
        
       
      </div>

    </>
  );
}