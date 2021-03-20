import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {addUserInfo} from "./redux/modules/quiz"

const Message = (props) => {
  const name = useSelector((state) => state.quiz.name)
  const dispatch = useDispatch();
  const input_text = React.useRef();
  const user_name = useSelector((state) =>state.quiz.user_name)


  return (
    <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="outter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            padding: "0px 2vw",
            boxSizing: "border-box",
            maxWidth: "400px",
            margin: "0px auto",
          }}
        >
          
          <h1 style={{ fontSize: "1.5em", margin: "0px", lineHeight: "1.4" }}>
            <span
              style={{
                backgroundColor: "#fef5d4",
                padding: "5px 10px",
                borderRadius: "30px",
              }}
            >
              {name}
            </span>
            에게 한마디
          </h1>
          <input
            ref ={input_text}
            type="text"
            style={{
              padding: "10px",
              margin: "24px 0px",
              border: "1px solid #dadafc",
              borderRadius: "30px",
              width: "100%",
            }}
            placeholder="한 마디 적기"
          />
          <button
            onClick = {()=>{
              let user_info ={
                name: user_name,
                message: input_text.current.value
              }
              dispatch(addUserInfo(user_info))
              props.history.push('/ranking')
            }}
            style={{
              padding: "8px 24px",
              backgroundColor: "#dadafc",
              borderRadius: "30px",
              border: "#dadafc",
            }}
          >
            한마디하고 랭킹 보러 가기
          </button>
        </div>
      </div>
  );
};


export default Message;