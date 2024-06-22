import { createSlice } from "@reduxjs/toolkit";
import { exportLiveCount } from "../constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatMessages: []
    },
    reducers: {
        addChatMessage : (state,action) => {
            if(state.chatMessages.length>exportLiveCount){
                state.chatMessages.splice(0,1);
            }
            state.chatMessages.push(action.payload);
        },
    }
})


export const {addChatMessage} = chatSlice.actions;
export default chatSlice.reducer;
