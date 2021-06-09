import{createStore,combineReducers} from 'redux';
import boys from './Reducers/CollectionBoys';
import babies from './Reducers/CollectionBabies';
import childhood from './Reducers/CollectionChildhood';
import shoppingCart from './Reducers/ShoppingCart'
import sum from './Reducers/ShoppingCart'

 const reducer=combineReducers({childhood,boys,babies,shoppingCart,sum});
 const store=createStore(reducer);
 window.store=store;
 export default store;