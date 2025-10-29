import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export interface AuthState {
  token: string;
  name: string;
  id: number | null;
}
const token = Cookies.get("token") || "";
let decodedToken:{userId: number,sub: string} | null = null;
if (token) {
  decodedToken = jwtDecode(token);
  console.log("AuthSlice initial token from cookies:", decodedToken);
}
const authSlice = createSlice({
  name: "auth",
  initialState: { token: token || "", name: "", id: decodedToken?.userId || null },
  reducers: {
    getUserInfo: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
});

export const { getUserInfo } = authSlice.actions;
export default authSlice.reducer;
