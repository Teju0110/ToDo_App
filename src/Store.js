import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const intialState=[
    {id:1,todo:"Yoga"},
    {id:2,todo:"Drink Water"}
]

const reducer=(state = intialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        state=[...state, action.payload];
            return state;
  
      case "REMOVE_TODO":
        const filterState=state.filter(todo=>todo.id === action.payload ? null : todo )
            state=filterState;
            return state;
      
  
      default : 
          return state;
    }
  };



const middleware=[thunk]

const strore =createStore(
    reducer,
    intialState,    
    composeWithDevTools( applyMiddleware(...middleware))
)

export default strore;