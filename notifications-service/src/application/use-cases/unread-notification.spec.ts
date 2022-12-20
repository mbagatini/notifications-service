import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';

describe('Unread notification', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to unread a notification', async () => {
    const unreadNotification = new UnreadNotification(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({
        readAt: new Date(),
      }),
    );

    await unreadNotification.execute({
      notificationId: notificationsRepository.notifications[0].id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBe(null);
  });

  it('should not be able to unread a unexistent notification', async () => {
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(async () => {
      await unreadNotification.execute({
        notificationId: 'this-is-fake',
      });
    }).rejects.toThrow();
  });
});
