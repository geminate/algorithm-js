import { MinCoinChange } from '../structure'

const a = new MinCoinChange([1, 3, 4])
console.log(a.makeChange(3))
console.log(a.cache)
