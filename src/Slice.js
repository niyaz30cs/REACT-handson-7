import{createSlice} from "@reduxjs/toolkit";
const MySlice=createSlice(
    {
        name:"MySlice",
        initialState:[
        {name:"Niyaz",Age:22,Course:"MERN",Batch:"February"},
        {name:"Doe",Age:25,Course:"MERN",Batch:"November"},
        {name:"Biden",Age:26,Course:"MERN",Batch:"September"},
        {name:"Barar",Age:22,Course:"MERN",Batch:"September"},
        {name:"Christ",Age:23,Course:"MERN",Batch:"October"},
        {name:"Elent",Age:24,Course:"MERN",Batch:"November"},
    ],
    reducers:
    {
        editData:(state,action)=>{
            state[action.payload.index]=action.payload.currData;
            console.log(state)
            return(state)
        },
        addUser:(state,action)=>{
            console.log(action.payload);
            state[state.length]=action.payload
            // state.push(action.payload.newObj)
            return(state)
        }
        
    }
    }
)
export const {editData}=MySlice.actions;
export const {addUser}=MySlice.actions
export default MySlice.reducer;