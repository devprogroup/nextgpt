import { configureStore } from "@reduxjs/toolkit";
import agentReducer from "./agent"; // Import reducer

export const store = configureStore({
  reducer: {
    agent: agentReducer, // Add reducer to store
  },
});
