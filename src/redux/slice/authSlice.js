import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!token,   //set true if token exists
  token: token || null,
  status: "idle",
  error: null,
};

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${loginKey}`, {
//         email,
//         password,
//       });
//       console.log("api responce", response.data);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data.message);
//       }
//       return rejectWithValue("Something went wrong");
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // login: (state) => {
    //   state.isAuthenticated = true;
    //   console.log("from login slice",state);

    // },

    login: (state, ) => {
      state.status = 'loading';
    },

    loginSuccess: (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },

    loginFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.status = "";
      state.token = null;
      localStorage.removeItem("token");
      console.log("logout state from dialogcompoent", state);

    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.status = "loading";
  //       state.error = null;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.isAuthenticated = true;
  //       state.token = action.payload.token;
  //       localStorage.setItem("token", action.payload.token);
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.payload;
  //     });
  // },
});

export const { login, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
