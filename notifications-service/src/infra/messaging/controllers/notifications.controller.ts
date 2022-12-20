import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationEventBody } from '@infra/dto/notification-event-body';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() body: NotificationEventBody) {
    console.log('Event received');
    await this.sendNotification.execute({
      ...body,
    });
  }
}