module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
  
  function search(arr) {
    for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < bracketsConfig.length; y++) {
      if(arr[x] === bracketsConfig[y][0] && arr[x + 1] === bracketsConfig[y][1]) {
        arr.splice(x, 2);
        search(arr);
      }
    }
  }
  }

search(arr);

if (arr.length === 0) {
  return true;
}
return false;
}
