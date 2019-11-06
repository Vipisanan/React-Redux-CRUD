import {GET} from "../constance/ActionType";

export const getDataInAction = (dataFromComponent) =>{
    console.log(dataFromComponent,"action.payload");
    return{
        type:GET,
        payload:dataFromComponent
    }
}
