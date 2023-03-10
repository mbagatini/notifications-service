import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You have a new invite'),
      recipientId: '123',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
