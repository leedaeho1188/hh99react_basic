import {firestore} from "../../firebase"

const rank_db = firestore.collection("rank")


const ADD_USER_NAME = "rank/ADD_USER_NAME";
const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
const ADD_RANK = "rank/ADD_RANK";
const GET_RANK = "rank/GET_RANK";
const IS_LOAD = "rank/LOAD"

const initialState = {
  user_name: "",
  user_message: "",
  user_score: "",
  score_text: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  ranking: [
    { score: 40, name: "임민영", message: "안녕 르탄아!" },
  ],
  is_loaded: false
}

export const addUserName = (user_name) => {
  return { type: ADD_USER_NAME, user_name}
}

export const addUserMessage = (user_message) => {
  return { type: ADD_USER_MESSAGE, user_message};
}

export const addRank = (rank_info) => {
  return { type: ADD_RANK, rank_info}
}

export const getRank = (rank_list)  => {
  return {type: GET_RANK, rank_list }
}

export const isLoaded = (loaded) => {
  return {type: IS_LOAD, loaded}
}

export const addRankFB = (rank_info) => {
  return function (dispatch){
    let rank_data = {
      message: rank_info.message,
      name: rank_info.name,
      score: rank_info.score,
    };
    rank_db.add(rank_data).then((docRef) => {
      rank_data = {...rank_data, id: docRef.id, current: true};
      dispatch(addRank(rank_data))
    })
  }
}

export const getRankFB = () => {
  return function (dispatch){
    rank_db.get().then((docs) => {
      let rank_data = [];

      docs.forEach((doc) => {
        rank_data = [...rank_data, {id: doc.id, ...doc.data()}]
      })
      dispatch(getRank(rank_data))
    })
  }
}

export default function reducer(state = initialState, action ={}){
  switch (action.type){

    case "rank/ADD_USER_NAME": {
      return { ...state, user_name: action.user_name };
    }

    case "rank/ADD_USER_MESSAGE": {
      return { ...state, user_message: action.user_message };
    }

    case "rank/ADD_RANK": {
      return { ...state, ranking: [...state.ranking, action.rank_info] };
    }

    case "rank/GET_RANK": {
      let ranking_data = [...state.ranking];
      const rank_ids = state.ranking.map((r, idx)=> {
        return r.id;
      })
      // console.log(ranking_data)
      const rank_data_fb = action.rank_list.filter((r, idx) => {
        if(rank_ids.indexOf(r.id) === -1){
          ranking_data = [...ranking_data, r]
        }
      })
      // console.log(ranking_data)
      return {...state, ranking: ranking_data}
    }
    case "rank/IS_LOADED": {
      return {...state, is_loaded: action.loaded}
    }
    default:
      return state
  }
}
