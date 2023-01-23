import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: any = []
  searchTerm: string = ''

  constructor(private api: ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data: any) => {
        this.allProducts = data.result

      }
    )
    this.api.searchKey.subscribe(
      (data: any) => {
        this.searchTerm = data
      }
    )
  }
  addToWishlist(products: any) {
    this.api.addToWishlist(products)
      .subscribe(
        (result: any) => {
          alert(result.message)
        },
        (result: any) => {
          alert(result.error.message)
        },
      )
  }

  addToCart(products:any){
    this.cart.addToCart(products)

  }

}
