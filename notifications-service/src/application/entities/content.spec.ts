import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a	notification content', () => {
    const content = new Content('New invite waiting for you!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a	notification content smaller than 5 characteres', () => {
    expect(() => new Content('hi')).toThrow();
  });

  it('should not be able to create a	notification content larger than 240 characteres', () => {
    expect(
      () =>
        new Content(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        ),
    ).toThrow();
  });
});
