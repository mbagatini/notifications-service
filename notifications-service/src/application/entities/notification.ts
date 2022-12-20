import { Replace } from '@helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter recipientId
   * @return {string}
   */
  public get recipientId(): string {
    return this.props.recipientId;
  }

  /**
   * Getter content
   * @return {Content}
   */
  public get content(): Content {
    return this.props.content;
  }

  /**
   * Getter category
   * @return {string}
   */
  public get category(): string {
    return this.props.category;
  }

  /**
   * Getter readAt
   * @return {string}
   */
  public get readAt(): Date | null {
    return this.props.readAt;
  }

  /**
   * Getter createdAt
   * @return {string}
   */
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  /**
   * Getter canceledAt
   * @return {string}
   */
  public get canceledAt(): Date {
    return this.props.canceledAt;
  }

  /**
   * Setter recipientId
   * @param {string} value
   */
  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  /**
   * Setter content
   * @param {Content} value
   */
  public set content(value: Content) {
    this.props.content = value;
  }

  /**
   * Setter category
   * @param {string} value
   */
  public set category(value: string) {
    this.props.category = value;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public read() {
    this.props.readAt = new Date();
  }
  public unread() {
    this.props.readAt = null;
  }
}
