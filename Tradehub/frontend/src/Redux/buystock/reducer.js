import React from 'react'
import { BUY_STOCK } from './actiontype';

const initialstate={
    stockSymbol:"",
    averagePrice:"",
    quantity:""
}
const reducer =(state=initialstate,action)=>{
    switch (action.type) {
        case BUY_STOCK:
            
           return{...state,
        
        }
    
        default:
            return state;
    }
}

export default reducer