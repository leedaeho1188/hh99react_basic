import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking'
import './scss_ex.scss';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";
// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import { connect } from "react-redux";

const mapStateTopProps = (state) => ({
  ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    
  },
  
});


// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {




    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);

      return (
      <div className="App">
        <Route exact path="/" exact component={Start} />
        <Route exact path="/score" exact component={Score} />
        <Route exact path="/quiz" exact component={Quiz} /> 
        <Route exact path="/message" exact component={Message} /> 
        <Route exact path="/ranking" exact component={Ranking} /> 
      </div>
    );
  }
}
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));