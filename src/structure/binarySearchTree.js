// 二叉搜索树
class BinarySearchTree {

  constructor () {
    this.root = null
  }

  // 插入一个节点
  insert (key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }

  // 中序遍历树 从小到大
  inOrderTraverse (cb) {
    this._inOrderTraverseNode(this.root, cb)
  }

  // 先序遍历 先自己、再左侧、再右侧
  preOrderTraverse (cb) {
    this._preOrderTraverseNode(this.root, cb)
  }

  // 后序遍历 先左侧、再右侧、最后自己
  postOrderTraverse (cb) {
    this._postOrderTraverseNode(this.root, cb)
  }

  // 获取最小值
  min () {
    return this._minNode(this.root).key
  }

  // 获取最大值
  max () {
    return this._maxNode(this.root).key
  }

  // 搜索值是否存在
  search (key) {
    return this._searchNode(this.root, key)
  }

  // 删除指定 key
  remove (key) {
    this._removeNode(this.root, key)
  }

  _removeNode (current, key) {
    if (current === null) {
      return false
    } else if (key < current.key) {
      if (current.left !== null) {
        return this._removeNode(current.left, key)
      } else {
        return false
      }
    } else if (key > current.key) {
      if (current.right !== null) {
        return this._removeNode(current.right, key)
      } else {
        return false
      }
    } else { // 这时候 current 就是 要删除的节点
      if (current.left === null && current.right === null) {
        current = null
        return current
      } else if (current.left === null) {
        current = current.right
        return current
      } else if (current.right === null) {
        current = current.left
        return current
      } else { // 被删除节点left和right都有节点时，将当前节点替换为左树中最大值或右树中最小值，之后删除多余的重复节点
        const minRightNode = this._minNode(current.right)
        this._removeNode(current, minRightNode.key)
        current.key = minRightNode.key
      }
    }
  }

  _searchNode (current, key) {
    if (current === null) {
      return false
    } else if (key < current.key) {
      if (current.left !== null) {
        return this._searchNode(current.left, key)
      } else {
        return false
      }
    } else if (key > current.key) {
      if (current.right !== null) {
        return this._searchNode(current.right, key)
      } else {
        return false
      }
    } else {
      return true
    }
  }

  _minNode (node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  _maxNode (node) {
    while (node.right !== null) {
      node = node.right
    }
    return node
  }

  _postOrderTraverseNode (current, cb) {
    if (current != null) {
      this._postOrderTraverseNode(current.left, cb)
      this._postOrderTraverseNode(current.right, cb)
      cb(current.key)
    }
  }

  _preOrderTraverseNode (current, cb) {
    if (current !== null) {
      cb(current.key)
      this._preOrderTraverseNode(current.left, cb)
      this._preOrderTraverseNode(current.right, cb)
    }
  }

  _inOrderTraverseNode (current, cb) {
    if (current !== null) {
      this._inOrderTraverseNode(current.left, cb)
      cb(current.key)
      this._inOrderTraverseNode(current.right, cb)
    }
  }

  _insertNode (current, node) {
    if (node.key >= current.key) {
      if (current.right !== null) {
        this._insertNode(current.right, node)
      } else {
        current.right = node
      }
    } else {
      if (current.left !== null) {
        this._insertNode(current.left, node)
      } else {
        current.left = node
      }
    }
  }
}

class Node {

  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export default BinarySearchTree
