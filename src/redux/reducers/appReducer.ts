import { Reducer } from "redux"

export type InitialState = {
  
}

const initialState: InitialState = {
  
}

export const appReducer: Reducer<InitialState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
