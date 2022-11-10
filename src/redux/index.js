import {configureStore} from "@reduxjs/toolkit";
import cinema from './reducers/cinema'
import series from './reducers/series'

export const store = configureStore({
    reducer: {
        cinema,
        series
    }
})