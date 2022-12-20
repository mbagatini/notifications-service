import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';

describe('Read notification', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to read a notification', async () => {
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notificationsRepository.notifications[0].id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a unexistent notification', async () => {
    const readNotification = new ReadNotification(notificationsRepository);

    expect(async () => {
      await readNotification.execute({
        notificationId: 'this-is-fake',
      });
    }).rejects.toThrow();
  });
});
