import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import reducer from "./slices/authSlices";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { useDispatch } from "react-redux";

function createPersistConfig(key: string) {
  return {
    key,
    storage,
  };
}

const persistConfigAuth = createPersistConfig("reducer");

const persistedAuthReducer = persistReducer(persistConfigAuth, reducer);

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
