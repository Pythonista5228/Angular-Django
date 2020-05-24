import { ProductApiService } from '../../services/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any;
  table_headings = [
    'id',
    'name',
    'slug',
    'brand',
    'shipping',
    'price',
    'active',
    'quantity',
    'created',
    'last_modified',
    'category',
    'category_name',
  ];
  constructor(private productApiService: ProductApiService) {
    this.getproductsList();
  }

  ngOnInit(): void {}

  getproductsList() {
    this.productApiService.getProductList().subscribe((data) => {
      this.productList = data['products'];
      this.productList = this.productList.map((e) => {
        let list = this.table_headings.reduce((list_, data) => {
          list_.push(e[data]);
          return list_;
        }, []);
        return list;
      });
      // console.log(this.productList);
    });
  }
}
