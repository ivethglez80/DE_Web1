import axios from "axios";

export const GET_GUESTS = "GET_GUESTS"
export const PUT_ASISTE = "PUT_ASISTE"
export const POST_GUEST = "POST_GUEST"

//const guestDBUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";
const guestDBUrl = import.meta.env.VITE_BACK_DEPLOY;

 
export const getGuests = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(guestDBUrl);
            const guests = apiData.data;
            console.log(guests);
            dispatch({ type: GET_GUESTS, payload: guests });
        } catch (error) {
            console.error(error);
        }
    };
};

export const putAsiste = (id, asiste) => {
    return async function (dispatch) {
        try {
            const updtAsste = {id:id, asiste:!asiste}
            const response = await axios.put(guestDBUrl, updtAsste)
            if (response.status === 200){
                dispatch({type: PUT_ASISTE, payload: response.data});
            }else{
                console.error("error: ", response);
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }
};

export const postGuest = (payload) =>{
    return async (dispatch)=>{
        try {
            let createGuest = await axios.post(guestDBUrl, payload);
            return dispatch({
                type: POST_GUEST,
                payload: createGuest.data
            }             
            )
        } catch (error) {
            console.log(error);
        }
    }
}
