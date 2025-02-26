import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
     data: [],
     oneTenantData: null, 
    },
  reducers: {
    getData: (state, action) => { 
        state.data = action.payload; 
    },
    getOneTenantData: (state, action) => { 
      state.oneTenantData = action.payload; 
  },
    putData: (state, action) => { 
      state.data.map((item) => item.icno === action.payload.icno ? {...item, isActive: action.payload.isActive} : item) 
  },
  },
});

export const { getData, getOneTenantData, putData } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectOneTenantData = (state) => state.data.oneTenantData;
export default dataSlice.reducer;