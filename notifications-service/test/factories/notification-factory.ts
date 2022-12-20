import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<Notification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-2',
    category: 'social',
    content: new Content('This is a notification'),
    ...override,
  });
}
