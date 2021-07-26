export const processReducers=(state={},action)=>{
    switch(action.type){
        case"PROCESS":return{
            ...action.payload
        };
        default:return state;
    }
}