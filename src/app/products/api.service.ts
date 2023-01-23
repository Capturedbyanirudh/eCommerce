import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  // getAllProducts
  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }

  // addToWishlist
  addToWishlist(products:any){
    const body={
      
    id: products.id,
    title: products.title,
    price: products.price,
    description: products.description,
    image: products.image
    }
    return this.http.post('http://localhost:3000/add-to-wishlist',body)
  }

  // getWishlist
  getWishlist(){
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  // deleteFromWishlist
  deleteFromWishlist(id:any){
    return this.http.delete('http://localhost:3000/delete-item-wishlist/'+id)
  }

}
