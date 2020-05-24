import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit, OnDestroy {
  name;
  productList;
  tempProdlist;
  categoryName;
  constructor(
    private route: ActivatedRoute,
    private productApiService: ProductApiService
  ) {}

  ngOnInit() {
    this.productList = '';
    let id = this.route.paramMap.subscribe((e) => {
      this.categoryName = e['params']['product_name'];
      this.productApiService
        .getCategorybasedProductList(e['params']['product_name']).subscribe(e => {
          this.productList = e;
          this.tempProdlist = this.productList;
        });
    });
  }

  filterProducts(searchValue){
    this.productList = this.tempProdlist; 
    this.productList = this.productList.filter(e =>{
      console.log(Object.values(e).toString().toLowerCase().includes(searchValue));
      return Object.values(e).toString().includes(searchValue);
    });
  }

  editProduct(){

  }
  ngOnDestroy(){
    this.productList = [];
  }
}
