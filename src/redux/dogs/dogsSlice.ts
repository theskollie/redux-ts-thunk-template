import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Generated pending, fulfilled or rejected action types
const fetchDogImages = createAsyncThunk("dogs/fetchDogImages", async () => {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
  return response.data;
});

interface DogsState {
  loading: boolean;
  images: [] | string[];
  error: string | undefined;
}

const initialState = {
  loading: false,
  images: [],
  error: "",
} as DogsState;

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDogImages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDogImages.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload.message;
    });
    builder.addCase(fetchDogImages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default dogsSlice.reducer;
export { fetchDogImages };
