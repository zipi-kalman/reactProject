import produce from 'immer';
import execHandler from './ReducerUtils';
const initialState ={
    shoppingCart:[  
    ],
    sum:0
}
const shoppingCart = {
    addProduct(state, action) {
        if (state.shoppingCart.find(x => x.id === action.payLoad.id)) {
            state.shoppingCart.find(x => x.id === action.payLoad.id).amount++;
            state.sum+=(action.payLoad.price);
        }
        else{
            state.shoppingCart.push(action.payLoad)
state.sum+=(action.payLoad.price)
        }
        
    },
    updateProduct(state, action) {
        state.shoppingCart.find(x => x.id === action.payLoad.id).name = action.payLoad
    },
    plus(state, action) {
        state.shoppingCart.find(x => x.id=== action.payLoad.id).amount++
        state.sum+=(action.payLoad.price)
    },
    minus(state, action) {
        let x=state.shoppingCart.find(x => x.id=== action.payLoad.id)
        x.amount--
        if (x.amount<1) {x.amount=1
        

        }
        else{state.sum-=(action.payLoad.price)}
    },
    removeProduct(state, action) {
        state.shoppingCart=state.shoppingCart.filter((item) => item.id !== action.payLoad.id);
        state.sum-=(action.payLoad.amount*action.payLoad.price)
    },
    
   
}

export default produce((state, action) => {
    execHandler(state, action, shoppingCart)
}, initialState)


