import { Component } from '@angular/core';
import { ApiProductsService } from '../../../services/api-products.service';
import { IProduct } from '../../iproduct';
import { ICategory } from '../../icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AddProductComponent {
  categories: ICategory[];
  newProduct: IProduct = {} as IProduct;
  constructor(private _apiProductsService: ApiProductsService,
    private router : Router
  ) {
    this.categories = [
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Phone',
      },
      {
        id: 3,
        name: 'Tablet',
      },
    ];
  }

  addNewProduct() {
    this._apiProductsService.addProduct(this.newProduct).subscribe({
      next: (res) => {
        alert("Product added successfully")
        this.router.navigateByUrl("home")
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
