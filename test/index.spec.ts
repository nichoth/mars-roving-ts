const foo = function () {
    return 'bar'
}

test('example failing test', () => {
  expect(foo()).toBe('barrr')
})

test('example passing test', () => {
  expect(foo()).toBe('bar')
})

export {}
