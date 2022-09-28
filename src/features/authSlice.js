import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const initialState = {
  userEmail: null,
  userUid: null,
  isLoading: true,
  errorMessage: "",
  restaurants: [],
};
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ auth, emailUse, pass }, thunkAPI) => {
    const user = await signInWithEmailAndPassword(auth, emailUse, pass);
    console.log(user);
    const { email: emailToken } = user.user;
    console.log(emailToken);
    return emailToken;
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (auth, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user.currentUser;
  }
  //try catch
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCurrentUser(state) {
      state.userEmail = null;
      state.userUid = null;
      state.isLoading = true;
      state.errorMessage = "";
      state.restaurants = [];
    },
    assignCurrentUser(state, action) {
      state.isLoading = false;
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
      state.isLoading = false;
      state.isError = false;
      state.isAchieved = true;
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isAchieved = false;
      state.isError = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // const {email}
      // state.userEmail = action.payload.email;
      //this is the best access point - action.payload.user.email
      console.log(`${action.payload} we are in the case`);

      state.userEmail = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.message = "There was an error";
      state.isLoading = false;
    });
  },
});
export const { clearCurrentUser, assignCurrentUser } = authSlice.actions;
export default authSlice.reducer;
