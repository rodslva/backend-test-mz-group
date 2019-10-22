function isHappyNumber(number) {
  const digits = [...number+''].map(d => parseInt(d))
  let sum = 0
  for (const digit of digits) {
    sum += digit * digit
  }
  if (sum === 1) {
    return true
  }
  return sum !== 4 ? isHappyNumber(sum) : false
}

module.exports = isHappyNumber
