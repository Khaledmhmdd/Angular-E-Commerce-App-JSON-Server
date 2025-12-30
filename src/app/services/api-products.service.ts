import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root'
 })
export class ApiProductsService {

  constructor(
    private _userAuthService:UserAuthService,
    private httpClient: HttpClient
  ) { }

   getAllProducts() :Observable<IProduct[]>{
       return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`,{
        headers: new HttpHeaders({
          "authorization": this._userAuthService.getToken()
        })
       });
    }

    getProductById(id: number) :Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.baseUrl}/products/${id}`);

    }
    
    getAllProductByCatId(catId: number):Observable<IProduct[]>{
     return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products/?catId=${catId}`);

    }
    
    getAllProductByCatIdParam(catId: number):Observable<IProduct[]>{
     return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`,{
      params: new HttpParams().set("catId",catId)
     });

    }
    addProduct(product:IProduct):Observable<IProduct>{
      return this.httpClient.post<IProduct>(`${environment.baseUrl}/products`,product);

    }
    
    deleteProductById(id: number):Observable<void>{
      return this.httpClient.delete<void>(`${environment.baseUrl}/products/${id}`,);

    }
}
