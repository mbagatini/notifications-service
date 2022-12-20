export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    if (!this.validateLength(content)) {
      throw new Error('Invalid content');
    }

    this.content = content;
  }

  private validateLength(value: string) {
    return value.length >= 5 && value.length <= 240;
  }
}
