import {createSlice} from "@reduxjs/toolkit";

// {
//     id:12
//     name:"margherita pizza"
//     category:slicer,
//     // we added quantity
//     quantity:1
    
// }
const cart = createSlice({
    name : 'cartSlicer',
    initialState: {
        items:[],                        // items array ke ander item hai // we r applying find on that item // action.payload ke ander item wala swiggy object gaya h 
        count:0                         // action. payload consists of object that is passed by the swiigy api in form of object we introduced a new feild quantity in it
    },                                  
    reducers:{
        addItems:(state,action)=>{      // new item add krna h
            state.items.push({...action.payload , quantity:1})
            state.count++
        },

        incrementItems:(state,action)=>{  // same item add krna h multiple time
            const element=state.items.find(item=>item.id===action.payload.id)  // ye item items se dhundega   // ye payload wala swiggy object se 
            element.quantity+=1
            state.count++;
            
        },

        decrementItems:(state,action)=>{  // handles both reset and decrease items
            const element=state.items.find(item=>item.id===action.payload.id)
            if(element.quantity>1){
                element.quantity-=1;
            }
            else{
                state.items = state.items.filter(item=>item.id!=action.payload.id)
            }   

            state.count--;
        },
    }

   
    

});

export const {addItems,incrementItems,decrementItems} = cart.actions;
export default cart.reducer;