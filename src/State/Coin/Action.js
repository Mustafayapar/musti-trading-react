import axios from "axios";
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_LIST_FAILURE, FETCH_TOP_50_LIST_REQUEST, FETCH_TOP_50_LIST_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS } from "./ActionType";
import api, { API_BASE_URL } from "@/config/api";


export const getCoinList =(page=1) => async(dispatch)=>{

    dispatch({type:FETCH_COIN_LIST_REQUEST})

    const baseUrl="http://localhost:5454"
   
      try{        
        const response = await axios.get(`${baseUrl}/coins/?page=${page}`);
         
        console.log("coin list: ", response);

        dispatch({type: FETCH_COIN_LIST_SUCCESS,  payload: response.data})
 
    }catch(error){
        dispatch({type:FETCH_COIN_LIST_FAILURE, payload:error.message});

        console.log(error);

    }
}
/*
export const getTopCoinList=()=>async(dispatch)=>{
    dispatch({type: FETCH_TOP_50_LIST_REQUEST});

    try {
        const response =await axios.get(`${API_BASE_URL}/coins/top50`);
        dispatch({type: FETCH_TOP_50_LIST_SUCCESS, payload: response.data});
        console.log("top 50 ", response.data);

        
    } catch (error) {
        console.log("error : ", error)
        dispatch({type: FETCH_TOP_50_LIST_FAILURE, payload: error.message});

    }

}*/


export const getTop50CoinList=()=>async(dispatch)=>{
    dispatch({type: FETCH_TOP_50_LIST_REQUEST});

    try {
        const response =await axios.get(`${API_BASE_URL}/coins/top50`);
        dispatch({type: FETCH_TOP_50_LIST_SUCCESS, payload: response.data});
        console.log("top 50 ", response.data);

        
    } catch (error) {
        console.log("error : ", error)
        dispatch({type: FETCH_TOP_50_LIST_FAILURE, payload: error.message});

    }

};


export const fetchMarketChart= ({coinId, days,jwt}) => async(dispatch)=>{

    dispatch({type: FETCH_MARKET_CHART_REQUEST});

    if (!coinId) {
        console.error("coinId undefined!");
        return;
    }
    try {
        const response = await api.get(`/coins/${coinId}/chart?days=${days}`,{

             headers:{
            Authorization:`Bearer ${jwt} `
        }
        
        });
        dispatch({type :FETCH_MARKET_CHART_SUCCESS, payload: response.data});
       
    } catch (error) {
        console.log("error :",error)
        dispatch({type: FETCH_MARKET_CHART_FAILURE, payload: error.message})
        
    }

}

export const fetchCoinById= ({coinId}) => async(dispatch)=>{

    dispatch({type: FETCH_COIN_BY_ID_REQUEST});

    try {
        const response = await api.get(`${API_BASE_URL}/coins/${coinId}` );
           
        dispatch({type :FETCH_COIN_BY_ID_SUCCESS, payload: response.data});
       console.log("coin byid", response.data)
    } catch (error) {
        console.log("error :",error)
        dispatch({type: FETCH_COIN_BY_ID_FAILURE, payload: error.message})
        
    }

}

export const fetchCoinDetails= ({coinId, jwt}) => async(dispatch)=>{

    dispatch({type: FETCH_COIN_DETAILS_REQUEST});

    try {
        const response = await api.get(`/coins/details/${coinId}`,{

             headers:{
            Authorization:`Bearer ${jwt} `
        }
        
        });
        dispatch({type :FETCH_COIN_DETAILS_SUCCESS, payload: response.data});
       console.log("coins details: " , response.data)
    } catch (error) {
        console.log("error :",error)
        dispatch({type: FETCH_COIN_DETAILS_FAILURE, payload: error.message})
        
    }

    

}

export const searchCoin= (keyword) => async(dispatch)=>{

    dispatch({type: SEARCH_COIN_REQUEST});

    try {
        const response = await api.get(`/coins/search?q=?${keyword}`);
        dispatch({type :SEARCH_COIN_SUCCESS, payload: response.data});
       
        console.log("search coin", response.data);

    } catch (error) {
        console.log("error :",error)
        dispatch({type: SEARCH_COIN_FAILURE, payload: error.message})
        
    }

}

