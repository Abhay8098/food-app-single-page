import React, { useEffect, useState } from 'react'
import './shoppingCart.css'
import products from './data.json'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { width } from '@mui/system'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
export default function ShoppingCart() {
  var[product,setProduct]=useState(products)
  var [cartArr,setCartArr]=useState([])
  var[cartValue,setCartValue]=useState(0)
  var [total,setTotal]=useState(0)
  var[count,setCount]=useState(0)

  // <<-----------use effetct for total value of cart------->>
  useEffect(()=>{
    let totalPricee=0;
    cartArr.map((val)=>{
     
      totalPricee+=+val.totalPrice
    })
    setTotal(totalPricee)
  })


  // <<---------------Add to cart function ------------>>
  const addToCart=(event)=>{
       var index=event.target.id;
       var tempArr=[];
       tempArr=products[index]
     if(tempArr.quantity===0){
      tempArr.quantity++;
      tempArr.totalPrice=tempArr.price;
      setCartArr([...cartArr,tempArr])
      setCartValue(+cartValue+1);
      
     }else{
      products[index].quantity++;
      products[index].totalPrice+=products[index].price;
      setCount(+count+1)
     }

  }
  // <<-------------function when clicked on delete----------->>
  const del=(event)=>{
     let index =event.target.id;
     var tempArr=cartArr;
     cartArr[index].quantity=0;
     cartArr[index].totalPrice=0;
     tempArr.splice(index,1);
     setCartArr(tempArr)
     setCount(+count+1)
     setCartValue(+cartValue-1);
  }
  // <<------------Decresing quantity in cart----->>
  const decrement=(event)=>{
    var index=event.target.id;
    var tempArr=cartArr[index];
    if(tempArr.quantity>1){
      tempArr.quantity--;
      tempArr.totalPrice-=tempArr.price
    }
    console.log(tempArr);
    setCount(+count+1)
  }
  // <<------------increasing quantity in cart----->>
  const increment=(event)=>{
    var index=event.target.id;
    var tempArr=cartArr[index];
      tempArr.quantity++;
      tempArr.totalPrice+=tempArr.price
    setCount(+count+1)
  }
  // <<------------Empty the CartArr------------>>
  const empty=()=>{
    var tempArr=cartArr;
    tempArr.splice(0);
    setCartArr(tempArr)
    products.map((val)=>{
      val.quantity=0;
      val.totalPrice=0
    })
    setCartValue(0)
  }
  return (
    <>
    <h1 id='breakfast'>Breakfast</h1>
    <div className='main' >
      {product.map((val,i)=>{
          if(i<=3)
          return <div className='sub-main' key={val.id}> 
          <div className='sub-main-head'>
          <p>{val.name}</p>
           <p><img  src={val.vegImg} style={{height:"1vw"}} alt=""></img> Veg</p>
           <p>${val.price}</p>
           <button className='btnn'id={i} onClick={addToCart}>Add to cart</button>
          </div>
          <div className='sub-main-img'>
           <img src={val.image} alt=''></img>
          </div>
     
           </div>
      })}
    </div>
    {/* <<-----------------printing json data after index 4------->> */}
    <h1 id='lunch'>Time for Lunch</h1>
    <div className='main'>
      {product.map((val,i)=>{
          if(i>3)
          return <div className='sub-main' key={val.id}> 
          <div className='sub-main-head'>
          <p>{val.name}</p>
           <p><img  src={val.vegImg} style={{height:"1vw"}} alt=""></img> Non-Veg</p>
           <p>${val.price}</p>
           <button className='btnn' id={i} onClick={addToCart}>Add to cart</button>
          </div>
          <div className='sub-main-img'>
           <img src={val.image} alt=''></img>
          </div>
     
           </div>
           else
           return ""
      })}
      </div>
      <div id='footer'>
        <div className='foot'>
          <div><button onClick={()=>{
            let cart = document.getElementById('cart')
            if(cart.style.height===""||cart.style.height==="0px"){
              cart.style.height='auto';
            }
            else{
              cart.style.height='0px';
            }
          }} className="cart-btn"><KeyboardDoubleArrowUpIcon/></button></div>
          <div><p>Your orders : ({cartValue})</p></div>
          <div><p>SubTotal: ({total})</p></div>
          <div><button type='button' className='btn'onClick={empty}><Link to="/checkout" style={{paddingTop:"9%",paddingBottom:"9%"}}>Continue</Link></button></div>
        </div>
        <div id='cart'>
          <table className='tbl'>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Image</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total Price</td>
                <td>Action</td>
                <td><button type='button' className='btn' onClick={empty}>Empty Cart</button></td>
            
        
              </tr>
            </thead>
          </table>
        {cartArr.map((e,i)=>{
         if(1){
          return <table className='tbl' key={i}>
          <thead >
            <tr >
              <th>{e.id}</th>
              <th>{e.name}</th>
              <th><img src={e.image}  alt='' style={{height:"12vh"}}></img></th>
              <th>{e.price}</th>
              <th>{e.quantity}</th>
              <th>{e.totalPrice}</th>
              <th><button type='button' className='btnAction' id={i} onClick={decrement}>-</button> <span id='quantity'>{e.quantity} </span><button type='button' className='btnAction' id={i} onClick={increment}>+</button> </th>
              <th><button className='btn' id={i} onClick={del}>Delete</button></th>
            </tr>
          </thead>
        </table>
         }
        })}
        </div>
      </div>
      <Outlet/>
      
    </>
  )
}
