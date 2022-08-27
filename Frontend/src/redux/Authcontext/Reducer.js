import { POST_AUTH_ERROR, POST_AUTH_LOADING, POST_AUTH_SUCCES } from "./Actiontype";


const productInitalState = {
  loading: false,
  error: false,
  data: [],
  auth:false
};

const Reducer = (state = productInitalState,action) => {
  const {type,payload} = action
  switch(type){
    case POST_AUTH_LOADING :
      return {
        ...state,
        loading:true
      }
    case POST_AUTH_SUCCES :
      return {
          ...state,
          data:[...state.data,payload],
          auth:true
      }
    case POST_AUTH_ERROR :
      return {
        ...state,
        error:true
      }
  }
  return state;
};

export default Reducer;
