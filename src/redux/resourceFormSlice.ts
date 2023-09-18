import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ResourceFormState {
  title: string;
  author_id: number | null;
  url: string;
  description: string;
  stage_id: number | null;
  tag_ids: number[];
  recommendation: {
    recommendation_type_id: number | null;
    description: string;
  };
}

const initialState: ResourceFormState = {
  title: "",
  author_id: null,
  url: "",
  description: "",
  stage_id: null,
  tag_ids: [],
  recommendation: { recommendation_type_id: null, description: "" },
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
      state.recommendation.recommendation_type_id = action.payload;
    },
    updateRecommendation: (state, action: PayloadAction<string>) => {
      state.recommendation.description = action.payload;
    },
    addTag: (state, action: PayloadAction<number>) => {
      state.tag_ids.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<number>) => {
      state.tag_ids = state.tag_ids.filter((id) => id !== action.payload);
    },
    resetForm: () => initialState,
  },
});

export const {
  resetForm,
  addTag,
  removeTag,
  updateUrl,
  updateTitle,
  updateDescription,
  updateRecommendation,
  updateRecommendationId,
} = resourceFormSlice.actions;

export const selectForm = (state: RootState) => state.resourceForm;

export default resourceFormSlice.reducer;
