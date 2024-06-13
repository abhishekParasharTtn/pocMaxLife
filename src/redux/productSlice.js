import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postData = createAsyncThunk("api/postData", async (payload) => {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  const data = await response.json();
  console.log(data);
  return data;
});
const initialState = {
  data: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
const productSlices = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        console.log(state);
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setField } = productSlices.actions;

export default productSlices.reducer;
