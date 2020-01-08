class Dictionary {

  constructor () {
    this.items = {}
  }

  has (key) {
    return this.items.hasOwnProperty(key)
  }

  set (key, value) {
    this.items[key] = value
  }

  remove (key) {
    delete this.items[key]
  }

  get (key) {
    return this.items[key] ? this.items[key] : undefined
  }
}
