// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import image from './character.jpg';
import {useDispatch, useSelector} from "react-redux";
import { addUserName } from "./redux/modules/rank"

const Start = (props) => {
    
    
    const name = useSelector((state) => state.quiz.name)
    const dispatch = useDispatch()
    const input_text = React.useRef()

    console.log(props);
    
    return (
        <div className="container">
          <img src={image} style={{width:'80%'}}/>
          <div className="containerBlock">
            <p className="question">나는 <span className="name">{name}</span> 에 대해서 </p>
            <p className="question"> 얼마나 알고 있을까? </p>
          </div>
          <input type="text" placeholder="내 이름" className="inputName" ref={input_text} />
          <button className="startBtn" onClick = {() => {
            dispatch(addUserName(input_text.current.value))
            props.history.push("/quiz")
          }}>시작하기</button>
        </div>
    );
}


export default Start;