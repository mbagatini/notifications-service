import { Module } from '@nestjs/common';

import { MessagingModule } from '@infra/messaging/messaging.module';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
})
export class AppModule {}
