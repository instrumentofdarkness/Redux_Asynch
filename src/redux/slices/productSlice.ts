import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productList",
  initialState: productList,
  reducers: {},
});

export const productActions = productSlice.actions;
export default productList;
