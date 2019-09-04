import { Queue } from '../structure'

/**
 * 击鼓传花模拟
 * @param arr 人员数组
 * @param num 传花次数
 */
const hotPotato = (arr, num) => {
  const query = new Queue(arr)
  let i = 1
  while (true) {
    const item = query.dequeue()
    if (i % num !== 0) {
      query.enqueue(item)
    } else {
      console.log(`${item} 被淘汰`)
    }
    i++
    if (query.size() === 1) {
      console.log(`${query.front()} 取得了最终的胜利`)
      return
    }
  }
}

const peopleArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
hotPotato(peopleArr, 5)
