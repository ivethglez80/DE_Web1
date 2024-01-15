import {GET_GUESTS, PUT_ASISTE, POST_GUEST} from "./actions";

const initialState = {
    guests : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GUESTS:
            return {...state, guests:action.payload};
        case PUT_ASISTE:
            return {...state, 
                guests: state.guests.map(guest=>
                    guest.id === action.payload.id 
                    ? {...guest, asiste:action.payload.asiste}
                    :guest
                    )
                };
        case POST_GUEST:
            return {...state,                
            };
        default:
            return {...state};
    }
};

export default rootReducer;