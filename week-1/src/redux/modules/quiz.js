// widgets.js

// Actions
const LOAD = "quiz/LOAD"
const ADD_USER_NAME= "quiz/ADD_USER_NAME"
const ADD_USER_INFO = "quiz/ADD_USER_INFO"
// const DELETE = "bucket/DELETE"
const initialState = {
      name: '김해지',
      user_info: [

      ],
      user_comment: "",
      page: 'quiz',
      list: [
        {question: "해지는 그림을 잘 그린다.", answer: 'O'},
        {question: "해지는 서울에 산다.", answer: 'X'},
        {question: "해지가 제일 좋아하는 음식은 칼국수이다.", answer: 'O'},
        {question: "해지의 취미는 달리기이다.", answer: 'X'},
        {question: "해지는 주식으로 돈을 벌었다.", answer: 'O'},
      ],
      scoreMsg: '이정도면 애인보다 더 가까운사이네요..ㅎ',
    }

// Action Creators
export const loadQuiz = (quiz) => {
    return { type: LOAD, quiz };
}

export const addUserName = (user_name) => {
    return {type: ADD_USER_NAME, user_name};
}

export const addUserInfo = (user_info) => {
  return {type: ADD_USER_INFO, user_info};
}

// export const deleteBucket = (bucket) => {
//     return {type: DELETE, bucket};
// }
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/LOAD":{
      return state;
    }

    case "quiz/ADD_USER_NAME":{
      return { ...state, user_name: action.user_name };
    }

    case "quiz/ADD_USER_INFO":{
      return { ...state, user_info: [...state.user_info, action.user_info]}
    }

    // case "bucket/DELETE":{
    //   const bucket_list = state.list.filter((l, idx) => {
    //     if(idx !== action.bucket){
    //       return l;
    //     }
    //   });
    //   return {list: bucket_list};
    // }

    default:
      return state;
  }
}