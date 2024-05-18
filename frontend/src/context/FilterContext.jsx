import { createContext, useReducer } from 'react'

export const FilterContext = createContext()


export const filterReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return { ...state, filter: action.payload }
      default:
        return state
    }
  }


export const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, { 
      filter: null,
    })
    
    return (
      <FilterContext.Provider value={{...state, dispatch}}>
        { children }
      </FilterContext.Provider>
    )
  
  }