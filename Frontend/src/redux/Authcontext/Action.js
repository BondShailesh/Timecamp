import { POST_AUTH_ERROR, POST_AUTH_LOADING, POST_AUTH_SUCCES } from "./Actiontype"

const postauthloading = ()=>{
   return {type:POST_AUTH_LOADING}
}

const postauthsucces = (payload)=>{
  return {type :POST_AUTH_SUCCES,payload}
}

const postautherror = ()=>{
  return {type :POST_AUTH_ERROR}
}

export {postauthloading,postauthsucces,postautherror}