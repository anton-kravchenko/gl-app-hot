import { TestBed } from '@angular/core/testing';

import { NotificationManagerService } from './notification-manager.service';

describe('NotificationManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationManagerService = TestBed.get(NotificationManagerService);
    expect(service).toBeTruthy();
  });
});
