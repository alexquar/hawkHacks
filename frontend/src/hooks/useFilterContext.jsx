import { FilterContext } from "../context/FilterContext";
import { useContext } from "react";

export const useFilterContext = ()=>{
    const context= useContext(FilterContext)

    if(!context){
        throw new Error('useFilterContext use inside FilterContextProvider')
    }

    return context
}