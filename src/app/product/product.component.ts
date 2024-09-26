import { Component, OnInit } from '@angular/core';
import { Product, productsResponse } from './product';
import { ProductService } from './product.service';
import { response } from 'express';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products:Product[]=[];
totalRecords:number=0;
loading:boolean=true;

constructor(private productService:ProductService){}

loadProducts($event: TableLazyLoadEvent) {
  this.loading=true;
  
  this.productService.getProducts($event.first || 0).subscribe((response: productsResponse)=>{
    this.loading=false;
   this.products =response.products;
   this.totalRecords= response.total;
    
  }
)
}
}
