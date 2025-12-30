import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { filter, map, Subscription } from 'rxjs';
import { ProductApiComponent } from "../product-api/product-api.component";

@Component({
  selector: 'app-home',
  imports: [ProductApiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor(private _notificationService: NotificationService) {}
 
  subscription! :Subscription;
  ngOnInit(): void {
    // this._notificationService.getNotifications().subscribe((Notification)=>{
    //   console.log(Notification)
    // },(error)=>{
    //   console.log(`-------------------------------${error}-------------------------------`)
    // })

    this.subscription=this._notificationService.getNotifications().pipe(
     //filter((mes)=>mes.startsWith("hamada"))
     map((mes)=>`Notification : ${mes}`)
    ).subscribe({
      next: (notification) => {
        console.log(notification);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('notification completed successfully');
      },
    });
  }
   ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
