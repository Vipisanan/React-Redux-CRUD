import {GET} from "../constance/ActionType";

const INIT_STATE = {
    getDataSummaryInReducer: {},
    alterMessage:'',
    showMessage:false,
};

export default (state = {INIT_STATE}, action) => {

    switch (action.type) {
        case GET :
            return {
                ...state,
                getDataSummaryInReducer: action.payload
            };
        default :
            return state;
    }
}
