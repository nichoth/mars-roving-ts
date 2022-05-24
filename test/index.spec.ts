import foo from './example'

test('example failing test', () => {
  expect(foo()).toBe('barrr')
})

test('example passing test', () => {
  expect(foo()).toBe('bar')
})

export {}
