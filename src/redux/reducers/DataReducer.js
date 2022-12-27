import { createSlice } from "@reduxjs/toolkit";

const initialState = { leftColumnData: [], rightColumnData: [] };

const slice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.leftColumnData = action.payload.leftColumn;
      state.rightColumnData = action.payload.rightColumn;
    },
  },
});

export const { updateData } = slice.actions;
export const dataReducer = slice.reducer;
