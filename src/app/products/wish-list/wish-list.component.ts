import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: any
  eMsg: string = ''



  constructor(private api: ApiService, private router:RouterModule,private cart:CartService) { }


  ngOnInit(): void {

    this.api.getWishlist()
      .subscribe(
        // success response
        (data: any) => {
          this.wishList = data.result
          if(this.wishList.length==0){
            this.eMsg='empty wishlist'
          }
          
        },
        // client error
        (data: any) => {
          this.eMsg = data.error.result
        },
      )
  }
      // deleteFromList
      deleteFromWishlist(products:any){
        this.api.deleteFromWishlist(products.id)
        .subscribe(
          (result:any)=>{
            this.wishList = result.wishList
            if(this.wishList.length==0){
              this.eMsg='empty wishlist'
            }
          },
          (result:any)=>{
            alert(result.error.message)
          }
        )
      }

      // addToCart(Products)
      addToCart(products:any){
        this.cart.addToCart(products)
        this.deleteFromWishlist(products)

      }



}
