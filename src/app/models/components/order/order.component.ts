import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../icategory';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component'; 

@Component({
  selector: 'app-order',
  standalone:true,
  imports: [FormsModule,CommonModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  
  categories: ICategory[];
  selectedCatId:number = 0 ;
  receivedTotalPrice:number=0
  @ViewChild("inp") inp!:ElementRef;
  @ViewChild(ProductComponent) products!:ProductComponent;
  
  
  constructor(){
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Tablet' },
    ];
  }
  ngAfterViewInit(): void {
    this.inp.nativeElement.value="mona";
    console.log(this.products.products[4])
  }

  calcTotalPrice(top:number) {
  this.receivedTotalPrice += top;

  }

}
