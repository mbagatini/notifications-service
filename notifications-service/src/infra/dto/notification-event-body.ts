import { IsNotEmpty, Length, IsUUID } from 'class-validator';

export class NotificationEventBody {
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
