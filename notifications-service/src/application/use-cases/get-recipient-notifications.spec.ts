import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    for (let n = 0; n < 3; n++) {
      await notificationsRepository.create(
        makeNotification({
          recipientId: n == 0 ? 'recipient-1' : 'recipient-2',
        }),
      );
    }

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-2',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-2' }),
        expect.objectContaining({ recipientId: 'recipient-2' }),
      ]),
    );
  });
});
