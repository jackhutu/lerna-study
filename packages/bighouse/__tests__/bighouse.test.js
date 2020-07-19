import Hello from '../src/index';

describe('@study/bighouse', () => {
  it('测试Hello入口', () => {
    const hello = new Hello('world');
    expect(hello.say()).toBe('Hello, World');
  });
});
