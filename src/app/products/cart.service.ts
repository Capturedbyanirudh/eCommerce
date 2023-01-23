import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemListArray:any=[]
  cartIemsList = new BehaviorSubject([])

  constructor() { }
  
// addToCart
addToCart(products:any){
  this.cartItemListArray.push(products)
  this.cartIemsList.next(this.cartItemListArray)
  console.log(this.cartIemsList);
  let total = this.getTotal()
  console.log(total);
  
}

// total Price
getTotal(){
  let grantSum=0
  this.cartItemListArray.map((item:any)=>{
    grantSum += item.price 

  })
  return grantSum
}

// Remove a single Items
removeCartItem(products:any){
  this.cartItemListArray.map((item:any,index:any)=>{
    if(products.id==item.id){
      this.cartItemListArray.splice(index,1)
    }

  })
  this.cartIemsList.next(this.cartItemListArray)
}

//removeAllItems
removeAllItems(){
  this.cartItemListArray=[]
  this.cartIemsList.next(this.cartItemListArray)
}


}
