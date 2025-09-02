import api from "@/config/api";
import * as types from "./ActionType"
 
export const payOrder=({jwt,orderData, amount})=>async(dispatch)=>{

    dispatch({type:types.PAY_ORDER_REQUEST});

    try {
        const response=await api.post(
            `/api/orders/pay`,orderData,{
                headers:{
                Authorization:`Bearer ${jwt}`,
                },
            }
        );
        console.log(" pay order--", response.data)

        dispatch({
            type: types.PAY_ORDER_SUCCESS,
            payload: response.data,
            amount
        })
        console.log("order success :", response.data)
        
    } catch (error) {
        console.log("error pay order",error)
        dispatch({
            type:types.PAY_ORDER_FAILURE,
            error: error.message,
        });
        
    }
}

export const getOrderById =(jwt,orderId) => async(dispatch)=>{
    dispatch({type : types.GET_ORDER_REQUEST});

    try {
        const response=await api.get(
            `/api/orders/${orderId}`,{
                headers:{
                Authorization:`Bearer ${jwt}`,
                },
            }
        );
        console.log(" pay order--", response.data)

        dispatch({
            type: types.GET_ORDER_SUCCESS,
            payload: response.data,
            
        })
        console.log("get order  :", response.data)
        
    } catch (error) {
        console.log("error pay get order",error)
        dispatch({
            type:types.GET_ORDER_FAILURE,
            error: error.message,
        });
        
    }
}


export const getAllOrdersForUser=({jwt,orderType,assetSymbol})=> async(dispatch)=>{
    dispatch({type:types.GET_ALL_ORDERS_REQUEST});

    try {
        const response= await api.get(
            `/api/orders/`,{
                headers:{
                Authorization:`Bearer ${jwt}`,
                },
                params:{
                    order_type: orderType,
                    asset_symbol: assetSymbol,
                },
            }
        );
        console.log(" pay order--", response.data)

        dispatch({
            type: types.GET_ALL_ORDERS_SUCCESS,
            payload: response.data,
            
        })
        console.log("get all order  :", response.data)
        
    } catch (error) {
        console.log("error pay get all order",error)
        dispatch({
            type:types.GET_ALL_ORDERS_FAILURE,
            error: error.message,
        });        
    }
}
