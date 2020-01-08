import Queue from './queue'
import Stack from './stack'

class Graph {
  constructor () {
    this.vertices = [] // 定点列表
    this.adjList = new Map() // 临接表(key为定点、value为临接顶点列表)
  }

  // 添加顶点
  addVertex (v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  // 添加边
  addEdge (v1, v2) {
    this.adjList.get(v1).push(v2)
    this.adjList.get(v2).push(v1)
  }

  // 广度优先搜索
  bfs (v, cb) {
    const colors = this._initializeColor()
    const query = new Queue()
    query.enqueue(v)
    while (!query.isEmpty()) {
      const v = query.dequeue()
      const neighbors = this.adjList.get(v)
      colors[v] = 'grey'
      neighbors.forEach((item) => {
        if (colors[item] === 'white') {
          colors[item] = 'gray'
          query.enqueue(item)
        }
      })
      colors[v] = 'black'
      cb(v)
    }
  }

  // 广度优先搜索 (回调顶点 + 点到起始点的距离)
  BFS (v, cb) {
    const colors = this._initializeColor()
    const query = new Queue()
    query.enqueue({ v, l: 0, d: [v] })
    while (!query.isEmpty()) {
      const { v, l, d } = query.dequeue()
      const neighbors = this.adjList.get(v)
      colors[v] = 'grey'
      neighbors.forEach((item) => {
        if (colors[item] === 'white') {
          colors[item] = 'gray'
          query.enqueue({ v: item, l: l + 1, d: [...d, item] })
        }
      })
      colors[v] = 'black'
      cb({ v, l, d }) // 顶点、距离、路径
    }
  }

  // 深度优先搜索
  dfs (v, cb) {
    const colors = this._initializeColor()
    this._dfsVisit(v, cb, colors)
  }

  _dfsVisit (v, cb, colors) {
    colors[v] = 'gray'
    cb(v)
    const neighbors = this.adjList.get(v)
    neighbors.forEach((item) => {
      if (colors[item] == 'white') {
        this._dfsVisit(item, cb, colors)
      }
    })
    colors[v] = 'black'
  }

  _initializeColor () {
    const colors = {}
    this.vertices.forEach((item) => {
      colors[item] = 'white'
    })
    return colors
  }

}

export default Graph
