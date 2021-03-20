// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import image from './character.jpg';
import {useDispatch, useSelector} from "react-redux";
import { addUserName } from "./redux/modules/quiz"
// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const Start = (props) => {
    
    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const name = useSelector((state) => state.quiz.name)
    const dispatch = useDispatch()
    const input_text = React.useRef()

    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
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

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default Start;