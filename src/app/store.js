import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});
