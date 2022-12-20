import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count notifications by recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    for (let n = 0; n < 3; n++) {
      await notificationsRepository.create(
        makeNotification({
          recipientId: n == 0 ? 'recipient-1' : 'recipient-2',
        }),
      );
    }

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-2',
    });

    expect(count).toEqual(2);
  });
});
