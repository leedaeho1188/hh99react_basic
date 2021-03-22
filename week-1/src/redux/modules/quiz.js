// widgets.js

// Actions
const GET_QUIZ = "quiz/GET_QUIZ"
const ADD_ANSWER= "quiz/ADD_ANSWER"
const RESET_ANSWER = "quiz/RESET_ANSWER"
// const DELETE = "bucket/DELETE"
const initialState = {
      name: '김해지',
      score_texts: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "둘도 없는 단짝이에요! :)",
      },
      answers: [],
      quiz: [
        {question: "해지는 그림을 잘 그린다.", answer: 'O'},
        {question: "해지는 서울에 산다.", answer: 'X'},
        {question: "해지가 제일 좋아하는 음식은 칼국수이다.", answer: 'O'},
        {question: "해지의 취미는 달리기이다.", answer: 'X'},
        {question: "해지는 주식으로 돈을 벌었다.", answer: 'O'},
      ],
    }

// Action Creators
export const getQuiz = (quiz_list) => {
    return { type: GET_QUIZ, quiz_list };
}

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
}


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return {...state, answers: []};
    }

    default:
      return state;
  }
}