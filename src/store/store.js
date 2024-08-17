import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon'
import { todoApi } from './apis'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
    pokemons:pokemonSlice.reducer,
    [todoApi.reducerPath]:todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todoApi.middleware)
})