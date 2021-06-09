import React from 'react';
import {connect} from 'react-redux'


function mapStateToProps(state){
    return {
shoppingCart:state.shoppingCart.shoppingCart,
sum:state.sum.sum

}

}


export default connect(mapStateToProps)(function SummaryAndPayment(props) {

const{shoppingCart,sum}=props;

    return (
    <>
    <div className="container-fluid mt-5" style={{minHeight:"60vh"}}>
                {shoppingCart.map((item) =>(
                <div key={item.id}  >
                <div className="row border-top" >
                    <div className="col-1"></div>
                <div className="col-2"><h5 className="card-title mt-5" >$ {item.price} </h5></div> 
                <div className="col-2"><h5 className="card-title mt-5">{item.name}</h5></div> 
                <div className="col-2 mt-5 card-title">product code: {item.id}</div>
                <div className="col-2 mt-5 card-title">amount: {item.amount}</div>
                <div className="col-2"><img className="mt-2" src={item.image} style={{height:"10vh"}} alt=""/></div> 
                <div className="col-1"></div>
                </div> </div>
                 ))}
<div className="row"><h1 className="text-center  mt-5">Total payment:  $ {sum} </h1></div>
<button className="btn-secondary mt-3" >To be paid by credit card</button>
</div>
        </>

)
})

  

  