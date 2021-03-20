import React from "react"
import styled from "styled-components"

const Quiz = (props) => {
  
  const [num, setNum] = React.useState(0);

  const onClick_O = () =>{
    console.log(text_O.current.innerHTML)
    {props.list.map((l, idx) => {
      if (num === idx) {
        if (l.answer === text_O.current.innerHTML) {
          setNum(num +1)
        } else {
          window.alert("틀렸습니다.")
        }
      }
    })}
  }
  const onClick_X = () =>{
    {props.list.map((l, idx) => {
      if (num === idx) {
        if (l.answer === text_X.current.innerHTML) {
          setNum(num +1)
        } else {
          window.alert("틀렸습니다.")
        }
      }
    })}
  }
  const text_O = React.createRef();
  const text_X = React.createRef();

  if (num > 4) {
    return <div>퀴즈 끝!</div>
  }

  return (
    <QuizContainer>
      <p>
        <span>{num + 1}번 문제</span>
      </p>
      {props.list.map((l, idx) => {
        if (num === idx) {
          return <Question key={idx}>{l.question}</Question>
        }
      })}
      <AnswerZone>
        <Answer ref={text_O} onClick ={onClick_O}>O</Answer>
        <Answer ref={text_X} onClick ={onClick_X}>X</Answer>
      </AnswerZone>
    </QuizContainer>
  )
}


const QuizContainer = styled.div`
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    // border-bottom: 3px solid #ffd6aa;
    border-radius: 30px;
  }
  & > p {
    text-align: center
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const AnswerZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 70vh;
`;

const Answer = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 600;
  color: #dadafc77;
  background-color: white;
  border: none;
  outline: none;
`;


export default Quiz