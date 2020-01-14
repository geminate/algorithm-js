class MinCoinChange {

  constructor (coins) {
    this.coins = coins
    this.cache = {}
  }

  makeChange (amount) {
    if (amount <= 0) {
      return []
    } else if (this.cache[amount]) {
      return this.cache[amount]
    }
    else {
      let min = [], newMin, newAmount
      this.coins.forEach((coin) => {
        newAmount = amount - coin
        if (newAmount >= 0) {
          newMin = this.makeChange(newAmount)
        }
        if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
          min = [coin].concat(newMin)
          console.log('new Min ' + min + ' for ' + amount)
        }
      })
      this.cache[amount] = min
      return min
    }
  }
}

export default MinCoinChange
