import Hello from '../src/index'

describe('@study/hello-runtime-core', () => {
  it('测试Hello入口', () => {
    const hello = new Hello('world')
    expect(hello.say()).toBe('Hello, World')
  })
});
