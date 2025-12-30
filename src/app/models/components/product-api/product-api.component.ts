import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { IProduct } from '../../iproduct';
import { Router } from '@angular/router';
import { ApiProductsService } from '../../../services/api-products.service';

@Component({
  selector: 'app-product-api',
  imports: [],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css',
})
export class ProductApiComponent implements OnChanges, OnInit {

  myDate: Date = new Date();
  num: number = 4;
  products: IProduct[] = [] as IProduct[];
  filteredProducts: IProduct[];

  //selectedCatId: number = 0;
  @Input() receivedCatId: number = 0;

  @Output() OnPriceChanged: EventEmitter<number>;
  constructor(
    private _apiProductsService: ApiProductsService,
    private router: Router
  ) {
    this.filteredProducts = this.products;
    this.OnPriceChanged = new EventEmitter<number>();
  }
  ngOnInit(): void {
    this._apiProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnChanges(): void {
    this._apiProductsService
      .getAllProductByCatId(this.receivedCatId)
      .subscribe({
        next: (res) => {
          this.filteredProducts = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  // buy(count: string | number, price: number) {
  //   const quantity = Number(count);
  //   if (isNaN(quantity) || quantity <= 0) {
  //     //alert('Enter a valid quantity!');
  //     return;
  //   }

  //   const total = quantity * price;

  //   alert(`Total Price: $${total}`);

  //   this.OnPriceChanged.emit(total);
  // }
  //TotalOrderPrice: number = 0;

  
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

  delete(id: number):void {
    this._apiProductsService.deleteProductById(id).subscribe({
    next: () => {
      this.filteredProducts = this.filteredProducts.filter(
        p => p.id !== id
      );
    },
    error: (err) => {
      console.error('Delete failed', err);
    }
  })
  }
  navigateToDetails(id: number) {
    this.router.navigateByUrl(`details/${id}`);
  }
}
