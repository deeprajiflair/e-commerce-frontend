import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { CartService } from 'src/app/state/cart/cart.service';
import { ProductService } from 'src/app/state/product/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  cart:any = []; 
  cartitems : any ;
  deep:any

  constructor(private productService: ProductService,private dialog: MatDialog,private route:Router , private cartService : CartService , private store : Store<AppState>){
  }



  ngOnInit(): void {
    
   this.cartService.getCart()
  this.store.pipe(select(store => store.cart)).subscribe((cart) => {
    if(cart.cart){this.deep = cart.cart}
    if(cart.cartitems){this.cartitems = cart.cartitems;}
         
  });
  }

  
  

navigatetocheckout() {
  this.route.navigate(['/checkout'])
}

}
