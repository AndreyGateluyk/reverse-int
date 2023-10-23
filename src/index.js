module.exports = function reverse (n) {
  let arr = n.toString().split('')
  if(arr[0] = '-') {
    arr.splice(0,1)
  }
  if(arr[arr.length-1] === '0') {
    arr.splice(arr.length-1, 1)
  }
  let result = arr.reverse().join('')
  return result
}
