import React from "react"
import styled from "styled-components"
import Score from "./Score"
import {useDispatch, useSelector} from "react-redux";
import {addAnswer} from "./redux/modules/quiz"

const Quiz = (props) => {
  const quiz = useSelector((state) => state.quiz.quiz)
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers)
  const num = answers.length;

  const onClick_O = () =>{
    {quiz.map((l, idx) => {
      if (num === idx) {
        if (l.answer === text_O.current.innerHTML) {
          dispatch(addAnswer(true))
        } else {
          dispatch(addAnswer(false))
        }
      }
    })}
  }
  const onClick_X = () =>{
    {quiz.map((l, idx) => {
      if (num === idx) {
        if (l.answer === text_X.current.innerHTML) {
          dispatch(addAnswer(true))
        } else {
          dispatch(addAnswer(false))
        }
      }
    })}
  }
  const text_O = React.useRef();
  const text_X = React.useRef();

  if (num > 4) {
    window.alert("문제를 다 푸셨습니다.😀")
    props.history.push("/message")
  }

  return (
    <QuizContainer>
      <p>
        <span>{num + 1}번 문제</span>
      </p>
      {quiz.map((l, idx) => {
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
  cursor: pointer;
`;


export default Quiz