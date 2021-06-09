import produce from 'immer';
import execHandler from './ReducerUtils';
import StripedSweater from '../../image/Striped sweater.jpg'
import YellowSweater from '../../image/Yellow sweater.jpg'
import BlueSweater from '../../image/Blue sweater.jpg'
import GrayPants  from '../../image/Gray pants.jpg'
import GuinnessPants from '../../image/Guinness pants.jpg'
import BlackPants from '../../image/Black pants.jpg'
import StripedShirt from '../../image/Striped shirt.jpg'
import PinkShirt from '../../image/Pink shirt.jpg'
import RedShirt from '../../image/Red shirt.jpg'
import GraySweater from '../../image/Gray sweater.jpg'
import GrayShirt from '../../image/Gray shirt.jpg'
import GreenPants from '../../image/Green pants.jpg'



const initialState ={
    boys:[
        {name:"Striped sweater",id:"8551PRB",price:50,amount:1,image:StripedSweater},
        {name:"Yellow sweater",id:"8651PRB",price:35,amount:1,image:YellowSweater},
        {name:"Blue sweater",id:"8851PRB",price:28,amount:1,image:BlueSweater},
        {name:"Gray sweater",id:"8535PRB",price:31,amount:1,image:GraySweater},
        {name:"Gray pants",id:"8881PRB3",price:15,amount:1,image:GrayPants},
        {name:"Guinness pants",id:"8573PRB",price:15,amount:1,image:GuinnessPants},
        {name:"Black pants",id:"8598PRB",price:18,amount:1,image:BlackPants},
        {name:"Green pants",id:"8559PRB",price:41,amount:1,image:GreenPants},
        {name:"Striped shirt",id:"8524PRB",price:18,amount:1,image:StripedShirt},
        {name:"Pink shirt",id:"8522PRB",price:17,amount:1,image:PinkShirt},
        {name:"Red shirt",id:"8555PRB",price:10,amount:1,image:RedShirt},
        {name:"Gray shirt",id:"8556PRB",price:16,amount:1,image:GrayShirt}
     

    ]
}

const boys = {
    addNewProdut(state, action) {
        state.babies.push(action.payLoad)
    },
    updateProduct(state, action) {
        state.babies.find(x => x.id === action.payLoad.id).name = action.payLoad
    }
}

export default produce((state, action) => {
    execHandler(state, action, boys)
}, initialState)


