import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find((n) => n.id == notificationId);

    if (!notification) return null;

    return notification;
  }

  async update(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex((n) => n.id == notification.id);

    if (index >= 0) {
      this.notifications[index] = notification;
    }
  }

  async countByRecipientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    );

    return notifications.length;
  }

  async findByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    );

    return notifications;
  }
}
