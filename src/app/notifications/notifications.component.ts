import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { NotificationManagerService } from '../services/notification-manager.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  static NOTIFICATION_TIMEOUT = 2 * 1000;

  constructor(
    private notificationsManager: NotificationManagerService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.getNotifications();
  }

  private getNotifications(): void {
    this.notificationsManager.getNotifications().subscribe((n: INotification) => this.open(n));
  }

  private open({ message, type }: INotification) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.duration = NotificationsComponent.NOTIFICATION_TIMEOUT;

    let cssClass = '';

    switch (type) {
      case 'info': {
        cssClass = 'info';
        break;
      }
      case 'error': {
        cssClass = 'error';
        break;
      }
      default: {
        const _: never = type;
        throw new Error(`${type} notification type is not supported`);
      }
    }

    config.panelClass = cssClass;
    this.snackBar.open(message, 'Close', config);
  }
}
