import { Routes } from '@angular/router';
import { ProductComponent } from './models/components/product/product.component';
import { HomeComponent } from './models/components/home/home.component';
import { AboutUsComponent } from './models/components/about-us/about-us.component';
import { OrderComponent } from './models/components/order/order.component';
import { NotFoundComponent } from './models/components/not-found/not-found.component';
import { VisionComponent } from './models/components/vision/vision.component';
import { ValuesComponent } from './models/components/values/values.component';
import { DetailsComponent } from './models/components/details/details.component';
import { LoginComponent } from './models/components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ProductApiComponent } from './models/components/product-api/product-api.component';
import { AddProductComponent } from './models/components/add-product/add-product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {path:"home", component :HomeComponent },
    {path:"product", component :ProductComponent, canActivate:[authGuard]},
    {path:"productApi", component :ProductApiComponent, canActivate:[authGuard]},
    {path:"aboutUs", component :AboutUsComponent, 
        children:[
        {path:'',redirectTo:"vision" ,pathMatch:'full'},
        {path:"vision", component :VisionComponent},
        {path:"values", component :ValuesComponent },
        ] },


    {path:"order", component :OrderComponent },
    {path:"addProduct", component :AddProductComponent, canActivate:[authGuard]  },
    {path:"login", component :LoginComponent },
    {path:"details/:id", component :DetailsComponent, canActivate:[authGuard] },
    

    {path:"**", component :NotFoundComponent },
    
    
];
