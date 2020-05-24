import { ProductApiService } from '../../services/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  categoriesList: any; 
  constructor(private productApiService : ProductApiService) {
    this.productApiService.getProductList().subscribe(data => {
      this.categoriesList = data['product_categories'];
      console.log(this.categoriesList);
    })
  }

  ngOnInit(): void {
  }

}
