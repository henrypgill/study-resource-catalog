import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface FilterState {
  searchTerm: string;
  selectedTags: string[];
}

const initialState: FilterState = {
  searchTerm: "",
  selectedTags: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addTag: (state, action: PayloadAction<string>) => {
      state.selectedTags.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.selectedTags = state.selectedTags.filter(
        (tag) => tag !== action.payload
      );
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { resetFilters, updateSearch, addTag, removeTag } =
  filterSlice.actions;

export const selectSearch = (state: RootState) => state.filter.searchTerm;
export const selectTags = (state: RootState) => state.filter.selectedTags;

export default filterSlice.reducer;
