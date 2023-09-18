import { createSlice } from "@reduxjs/toolkit/dist";

export const counterSlice = createSlice({
    name: 'Bloger',
    initialState: {
                item:[],view:false,Token:"",Modal:false
    },  
    reducers: {
            admin:(state,action)=>{
                state.item=action.payload
            },
            edit:(state,action)=>{
                state.view=action.payload
               
            },
            token:(state,action)=>{
                state.Token=action.payload
            },
            modal:(state,action)=>{
                state.Modal=action.payload
            }
           
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { admin,edit,token,modal} = counterSlice.actions
  
  export default counterSlice.reducer