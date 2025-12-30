import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: IProduct[];

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'HP Laptop',
        price: 50000,
        imgUrl:
          'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg',
        catId: 1,
        quantity: 3,
      },
      {
        id: 200,
        name: 'DELL Laptop',
        price: 40000,
        imgUrl:
          'https://tse3.mm.bing.net/th/id/OIP.m98qycoZAkJrKUV8TGsaCwHaEg?rs=1&pid=ImgDetMain&o=7&rm=3',
        catId: 1,
        quantity: 0,
      },
      {
        id: 300,
        name: 'IPhone 11',
        price: 20000,
        imgUrl:
          'https://tse1.mm.bing.net/th/id/OIP.hQ8wixHewEdN1canRNluogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        catId: 2,
        quantity: 2,
      },
      {
        id: 400,
        name: 'oppo Phone',
        price: 17000,
        imgUrl:
          'https://tse2.mm.bing.net/th/id/OIP.DvZN_dNj_uh7COQM0_ROjAHaF1?rs=1&pid=ImgDetMain&o=7&rm=3',
        catId: 2,
        quantity: 3,
      },
      {
        id: 500,
        name: 'samsung Tablet',
        price: 10000,
        imgUrl:
          'https://tse3.mm.bing.net/th/id/OIP.IeCKHunF-QhuNDYsV3sRwAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        catId: 3,
        quantity: 0,
      },
      {
        id: 600,
        name: 'Lenovo Tablet',
        price: 10000,
        imgUrl:
          'https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg',
        catId: 3,
        quantity: 4,
      },
      {
      id:700,
      name : "Asar",
      price :Infinity ,
      imgUrl : "https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/600618612_850051118003419_4198777061411807253_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=arhfQ2UAWLIQ7kNvwEH1yCV&_nc_oc=AdkyH01g13OBTUdt9B4LRy0tFUoRmKAft6GjkjxqNpBmx1_MZ1QaBXZaUj89Zbyz-Yw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD4AEf_ADWeM8_T021qBcOExuO-se1QX_e7mM9h9n3oRB6Xw&oe=6976B30E",
      catId : 0,
      quantity : 1
    },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }
  getAllQuantities(): number[] {
    return this.products.map(p => p.quantity);
  }
  getProductById(id: number): IProduct | null {
    let p = this.products.find((prd) => prd.id == id);
    return p ? p : null;
  }
  //  getAllProductByCatId(catId:number):IProduct[]{
  //    let p = this.products.filter((prd)=> prd.catId == catId);
  //    return p?p:null
  //   }
  getAllProductByCatId(catId: number): IProduct[] {
    if (catId === 0) {
      return this.products;
    }

    return this.products.filter((prd) => prd.catId === catId);
  }
  mapProductsToIds(): number[] {
    return this.products.map((pro) => pro.id);
  }

}
