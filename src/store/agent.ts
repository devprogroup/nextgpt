import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  identity: {
    firstName: '',
    lastName: '',
    role: '',
    organization: '',
    organizationDescription: '',
    llm: ''
  },
  task: {
    purpose: '',
    activities: '',
    typeOfAgent: ''
  }
};

const appSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step= action.payload
    },
    setIdentity: (state, action) => {
      state.identity = {
        ...state.identity,
        ...action.payload
      }
    },
    setTask: (state, action) => {
      state.task = {
        ...state.identity,
        ...action.payload
      }
    },: 
  },
});

export const { setStep, setIdentity, setTask } = appSlice.actions;
export default appSlice.reducer;
