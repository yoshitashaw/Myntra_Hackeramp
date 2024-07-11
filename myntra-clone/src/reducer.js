export const initialState ={
    basket: [],
};

function reducer(state, action) {
    console.log(action);  //to see in the console what action is been passes V.IMP Step
    
    switch(action.type ){
        case 'ADD_TO_BASKET':
            //Logic to add items to basket
            return{
                ...state,  //returns all the product's properties
                basket: [...state.basket, action.item]   //returning th ebasket with all the properties of the product, and the action taken ADD or REMOVE
            };

        case 'REMOVE_FROM_BASKET':
            //Logic to add items to basket, removes the item fro the basket array
            
            //cloning the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){  //if index == -1, means no Product in the basket
               //item exist in the basket
               newBasket.splice(index, 1);  //go to that index and cut it/remove it
            }  
            else{
               console.warn(
                 `Cant remove product (id: ${action.id}) as it doest not exist`
               );
            }            
            return {...state, basket:newBasket,};  //change the basket to newBasket after removing the item
        
        default:
            return state;
    }
};
export default reducer;