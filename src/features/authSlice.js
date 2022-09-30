import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const initialState = {
  userEmail: null,
  userUid: null,
  errorMessage: "",

  isError: false,

};
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ auth, emailUse, pass }, thunkAPI) => {
    const user = await signInWithEmailAndPassword(auth, emailUse, pass);
    const { email: emailToken } = user.user;
    return emailToken;
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ auth, email, passReg }, thunkAPI) => {
    const regUser = await createUserWithEmailAndPassword(auth, email, passReg);

    const obj = { uid: regUser.user.uid, email: regUser.user.email };
    console.log(obj);
    return obj;
  }
  
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCurrentUser(state) {
      state.userEmail = null;
      state.userUid = null;
      state.errorMessage = "";
      state.restaurants = [];
    },
    assignCurrentUser(state, action) {
      const { email, uid } = action.payload;
      state.userEmail = email;
      state.userUid = uid;
    },
    assignErrorStatus(state, action) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isError = false;
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
    });
    builder.addCase(registerUser.pending, (state) => {});
    builder.addCase(registerUser.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // const {email}
      // state.userEmail = action.payload.email;
      //this is the best access point - action.payload.user.email
      console.log(`${action.payload} we are in the case`);

      state.userEmail = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {});
    builder.addCase(loginUser.rejected, (state) => {
      state.message = "There was an error";
    });
  },
});
export const { clearCurrentUser, assignCurrentUser } = authSlice.actions;
export default authSlice.reducer;
