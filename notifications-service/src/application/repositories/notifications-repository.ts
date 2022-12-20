import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract findByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract update(notification: Notification): Promise<void>;
  abstract countByRecipientId(recipientId: string): Promise<number>;
}
