import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: string[];
  constructor() {
    this.notifications = [
      'You have unread messages',
      'people reacting to your post',
      'hamada sent you a friend request',
      // '',
      'post shared successfully',
    ];
  }

  getNotifications():Observable<string> {
    return from(this.notifications)
  // return new Observable<string>((observer) => {
  //   // observer.next()   // emit a value
  //   // observer.error()  // emit an error
  //   // observer.complete() // signal completion

  //   let counter = 0;
  //   let notificationInterval= setInterval(() => { 
  //     console.log('test')
  //     if (counter === this.notifications.length) {
  //       observer.unsubscribe()
  //       //  return; // stop after completion
  //     }

  //     if (this.notifications[counter] === "") {
  //       observer.error("Empty notification encountered");
        
  //        return; // stop after error
  //     }

  //     observer.next(this.notifications[counter]);
  //     counter++;
  //   }, 2000);

  //     return {
  //   unsubscribe() {
  //       clearInterval(notificationInterval)
  //   },
  // }


  // });


}
}
