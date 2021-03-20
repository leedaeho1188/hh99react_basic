import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import './scss_ex.scss';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      name: '김해지',
      page: 'quiz',
      list: [
        {question: "해지는 그림을 잘 그린다.", answer: 'O'},
        {question: "해지는 서울에 산다.", answer: 'X'},
        {question: "해지가 제일 좋아하는 음식은 칼국수이다.", answer: 'O'},
        {question: "해지의 취미는 달리기이다.", answer: 'X'},
        {question: "해지는 주식으로 돈을 벌었다.", answer: 'O'},
      ],
      scoreMsg: '이정도면 애인보다 더 가까운사이네요..ㅎ',



    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);

      return (
      <div className="App">
        {this.state.page === "start" && (<Start name={this.state.name}/>)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg} />)}
        {this.state.page === "quiz" && (<Quiz list={this.state.list} />)}  
      </div>
    );
  }
}
export default App;