import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = []
  grantTotal: any = 0
  updatedTotal: any;
  discount: any;

  constructor(private cart: CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartIemsList.subscribe(
      (data) => {
        console.log(data);
        this.cartItems = data
      
      }
    )
    let total = this.cart.getTotal()
    this.grantTotal = total.toFixed(2)
  }

  // removeItem(products)
  removeItem(products: any) {
    this.cart.removeCartItem(products)
    let total = this.cart.getTotal()
    this.grantTotal = total.toFixed(2)
  }
// removeAll
removeAll(){
  this.cart.removeAllItems()
}

//discount3per
discount3per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 3)/100
  let discountTotal = this.grantTotal-discount
  this.updatedTotal = discountTotal.toFixed(2)

}

//discount5per
discount5per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 5)/100
  let discountTotal = this.grantTotal-discount
  this.updatedTotal = discountTotal.toFixed(2)

}

//discount10per
discount10per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 10)/100
  let discountTotal = this.grantTotal-discount
  this.updatedTotal = discountTotal.toFixed(2)
}

//discount50per
discount50per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 50)/100
  let discountTotal = this.grantTotal-discount
  this.updatedTotal = discountTotal.toFixed(2)
}

proceed(){
  this.removeAll()
  alert('Your order is placed Successfully')
  this.router.navigateByUrl("")
}

}
