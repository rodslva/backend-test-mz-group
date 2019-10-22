const isHappyNumber = require('./happyNumber')

test('7 is a happy number', () => {
  expect(isHappyNumber(7)).toBe(true)
})

test('490 is a happy number', () => {
  expect(isHappyNumber(490)).toBe(true)
})

test('50 is not a happy number', () => {
  expect(isHappyNumber(50)).toBe(false)
})

test('480 is not a happy number', () => {
  expect(isHappyNumber(480)).toBe(false)
})
