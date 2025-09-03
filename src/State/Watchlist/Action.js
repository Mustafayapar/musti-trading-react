import api from "@/config/api";
import * as types from './ActionType';
 

export const getUserWatchlist=(jwt)=>async (dispatch)=>{

    dispatch({type: types.GET_USER_WATCHLIST_REQUEST});
console.log(types.GET_USER_WATCHLIST_SUCCESS);
console.log("JWT:", localStorage.getItem("jwt"));

      try {
        const response=await api.get(
            `/api/watchlist/user`,{
                headers:{
                Authorization:`Bearer ${jwt}`,
                },
              } );

        console.log("watchlist--", response.data)

        dispatch({
            type: types.GET_USER_WATCHLIST_SUCCESS,
            payload: response.data,
        })
        
    } catch (error) {
        dispatch({
            type:types.GET_USER_WATCHLIST_FAILURE,
            error: error.message,
        })
        
    }
}

export const addItemToWatchlist=({coinId,jwt})=>async(dispatch)=>{
        dispatch({type: types.ADD_COIN_TO_WATCHLIST_REQUEST});
      try {
        const response=await api.post(
            `/api/watchlist/add/coin/${coinId}`,{},{
                headers:{
                Authorization:`Bearer ${jwt}`,
                },
              }        );
        console.log("add watchlist --", response.data)

        dispatch({
            type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
            payload: response.data,
        })
        
    } catch (error) {
        dispatch({
            type:types.ADD_COIN_TO_WATCHLIST_FAILURE,
            error: error.message,
        })
        
    }
}