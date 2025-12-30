import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../iproduct';
import { StaticProductsService } from '../../../services/static-products.service';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../../services/api-products.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  
  products: IProduct[] = [] as IProduct[];
  currentId:number=0;
  product:IProduct | null = null;
  idsArr:number[] =[];
  currentIdIndex:number=0;
  constructor(
    private _activatedRoute:ActivatedRoute,
    //private _StaticProductsService : StaticProductsService,
    private _apiProductsService : ApiProductsService,
    private _location:Location,
    private _router:Router
    
  ){
    
    // this.idsArr = this._StaticProductsService.mapProductsToIds()
    //this.currentIdIndex= this.idsArr.findIndex((id)=>id ==this.currentId)
  }
 
  // ngOnInit(): void {
  //   this._activatedRoute.paramMap.subscribe((paramMap)=>{
  //     this.currentId = Number(paramMap.get('id'))
  //     this.product = this._StaticProductsService.getProductById(this.currentId)

  //     this._apiProductsService.getAllProducts().subscribe({
  //     next: (res) => {
  //       this.products = res;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });

  //   })


  //   // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'))
  //   // this.product = this._StaticProductsService.getProductById(this.currentId)
    
  // }
    ngOnInit(): void {
    // أول حاجة نجيب الـ ID من الـ URL
    this._activatedRoute.paramMap.subscribe(paramMap => {
      this.currentId = Number(paramMap.get('id'));

      // نجيب كل المنتجات من الـ API
      this._apiProductsService.getAllProducts().subscribe({
        next: (res: IProduct[]) => {
          this.products = res;
          // نحط IDs في Array
          this.idsArr = this.products.map(p => p.id);
          // نحدد المنتج الحالي
          this.product = this.products.find(p => p.id === this.currentId) ?? null;
          // نحدد index للـ Prev / Next
          this.currentIdIndex = this.idsArr.findIndex(id => id === this.currentId);
        },
        error: (err) => console.log(err)
      });
    });
  }
  goBack() {
    this._location.back()
  }
  next() {
   
    this.currentIdIndex = this.idsArr.findIndex((id)=>id ==this.currentId)
    if(this.currentIdIndex != this.idsArr.length-1){
    this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex+1]}`)
  }
}
  prev() {
    this.currentIdIndex = this.idsArr.findIndex((id)=>id ==this.currentId)
     if(this.currentIdIndex != 0){
       this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex-1]}`)
    }
  }
}
