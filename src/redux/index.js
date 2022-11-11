import {configureStore} from "@reduxjs/toolkit";
import cinema from './reducers/cinema'
import series from './reducers/series'
import onefilm from "./reducers/oneFilm"

export const store = configureStore({
    reducer: {
        cinema,
        series,
        onefilm
    }
})