import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationManagerService {
  private notificationsSubject: Subject<INotification> = new Subject();
  private notifications: Observable<INotification> = this.notificationsSubject.asObservable();

  public getNotifications(): Observable<INotification> {
    return this.notifications;
  }

  public postNotification(notification: INotification): void {
    this.notificationsSubject.next(notification);
  }
}
