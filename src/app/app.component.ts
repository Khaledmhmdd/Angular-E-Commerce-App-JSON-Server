import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './models/components/header/header.component';
import { FooterComponent } from './models/components/footer/footer.component';
import { ProductComponent } from './models/components/product/product.component';
import { OrderComponent } from "./models/components/order/order.component";
//import { TestComponent } from './models/components/test/test.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerceApp';
}
