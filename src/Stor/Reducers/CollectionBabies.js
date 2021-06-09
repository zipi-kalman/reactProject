import produce from 'immer';
import execHandler from './ReducerUtils';
import Bibigro1 from '../../image/Bibigro1.jpg'
import Bibigro2 from '../../image/Bibigro2.jpg'
import Bibigro3 from '../../image/Bibigro3.jpg'
import JinsHat  from '../../image/Jins hat.jpg'
import PinkHat from '../../image/Pink hat.jpg'
import RedShoes from '../../image/Red shoes3.jpg'
import BrownShoes from '../../image/Brown shoes1.jpg'
import BlueShoes from '../../image/Blue shoes2.jpg'
import StripedHat from '../../image/Striped hat.jpg'
import BibigroGray from '../../image/Bibigro  gray.jpg'
import GrayShoes from '../../image/Gray shoes.jpg'
import Grayhat from '../../image/Gray hat.jpg'
const initialState ={
    babies:[
        {name:"Blue bibigro",id:"7551PRB",price:50,amount:1,image:Bibigro1},
        {name:"Striped bibigro",id:"7651PRB",price:35,amount:1,image:Bibigro2},
        {name:"Pink bibigro",id:"7851PRB",price:28,amount:1,image:Bibigro3},
        {name:"Gray bibigro",id:"7555PRB",price:20,amount:1,image:BibigroGray},
        {name:"Jins hat",id:"7881PRB3",price:15,amount:1,image:JinsHat},
        {name:"Pink hat",id:"7573PRB",price:15,amount:1,image:PinkHat},
        {name:"Striped hat",id:"7598PRB",price:10,amount:1,image:StripedHat},
        {name:"Grayhat",id:"7565PRB",price:25,amount:1,image:Grayhat},
        {name:"Red shoes",id:"7524PRB",price:18,amount:1,image:RedShoes},
        {name:"Brown shoes",id:"7522PRB",price:31,amount:1,image:BrownShoes},
        {name:"Blue shoes",id:"7557PRB",price:28,amount:1,image:BlueShoes},
        {name:"Gray shoes",id:"7585PRB",price:42,amount:1,image:GrayShoes}

        
    ]
}

const babies = {
    addNewProdut(state, action) {
        state.babies.push(action.payLoad)
    },
    updateProduct(state, action) {
        state.babies.find(x => x.id === action.payLoad.id).name = action.payLoad
    }
}

export default produce((state, action) => {
    execHandler(state, action, babies)
}, initialState)
