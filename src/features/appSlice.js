import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
    logout: (state) => {
      state.app = null;
    },
  },
});

export const { setChannelId, logout } = appSlice.actions;

export const selectChannelId = (state) => state.app.ChannelId;
export const selectChannelName = (state) => state.app.ChannelName;

export default appSlice.reducer;
