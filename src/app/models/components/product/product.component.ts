import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../iproduct';
import { HighlightCardDirective } from '../../../directives/highlight-card.directive';
import { CommonModule } from '@angular/common';
import { SquarePipe } from '../../../pipes/square.pipe';
import { FormsModule } from '@angular/forms';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HighlightCardDirective, CommonModule, SquarePipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges {
  myDate: Date = new Date();
  num: number = 4;
  products: IProduct[];
  filteredProducts: IProduct[];
  
  //selectedCatId: number = 0;
  @Input() receivedCatId: number = 0;

  @Output() OnPriceChanged: EventEmitter<number>;
  constructor(private _StaticProductsService: StaticProductsService
    ,private router:Router
  ) {
    this.products = this._StaticProductsService.getAllProducts();

    this.filteredProducts = this.products;
    this.OnPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges(): void {
    //this.filterProducts()
    this.filteredProducts = this._StaticProductsService.getAllProductByCatId(
      this.receivedCatId
    );
  }

  buy(product: IProduct ,count: string | number, price: number) {
    const quantity = Number(count);
    if (isNaN(quantity) || quantity <= 0) {
      alert('Enter a valid quantity!');
      return;
    }
    if (quantity > product.quantity ) {
      alert('Not enough stock');
      return;
    }
    const total = quantity * price;

    alert(`Total Price: $${total}`);

    this.OnPriceChanged.emit(total);
  }
  // TotalOrderPrice: number = 0;

  navigateToDetails(id:number){
this.router.navigateByUrl(`details/${id}`)
  }
  // filterProducts() {
  //   if (this.receivedCatId == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter(
  //       (prd) => prd.catId == this.receivedCatId
  //     );
  //   }
  // }
}
