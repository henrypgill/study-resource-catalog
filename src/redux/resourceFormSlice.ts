import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ResourceCandidate } from "../core/requests/resources";

type ResourceFormState = ResourceCandidate;

const initialState: ResourceFormState = {
  title: "",
  url: "",
  description: "",
  tag_names: [],
  owner_id: -1,
  recommendation_type_id: -1,
  recommendation_content: "",
};

export const resourceFormSlice = createSlice({
  name: "resourceForm",
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    updateUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    updateRecommendationId: (state, action: PayloadAction<number>) => {
      state.recommendation_type_id = action.payload;
    },
    updateRecommendation: (state, action: PayloadAction<string>) => {
      state.recommendation_content = action.payload;
    },
    addFormTag: (state, action: PayloadAction<string>) => {
      if (!state.tag_names.includes(action.payload)) {
        state.tag_names.push(action.payload);
      }
    },
    removeFormTag: (state, action: PayloadAction<string>) => {
      state.tag_names = state.tag_names.filter((tag) => tag !== action.payload);
    },
    resetForm: () => initialState,
  },
});

export const {
  resetForm,
  addFormTag,
  removeFormTag,
  updateUrl,
  updateTitle,
  updateDescription,
  updateRecommendation,
  updateRecommendationId,
} = resourceFormSlice.actions;

export const selectForm = (state: RootState) => state.resourceForm;

export default resourceFormSlice.reducer;
