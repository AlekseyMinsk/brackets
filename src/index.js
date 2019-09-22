module.exports = function check(str, pattern) {

  var arr = str.split("");
  var arrLength = arr.length;
  var stack = [];
  var openNumberInPattern = 0;
  var closeNumberInPattern = 1;

  var checkOpen = function(item, number) {
    var flag = false;
    pattern.forEach(itemPattert =>{
      if(itemPattert[number] === item) {
        flag = true;
      }
    })
    return flag;
  }

  var patternNumberFunction = function(item) {
    var number;
    pattern.forEach((itemPattert, i) =>{  
      if(itemPattert.indexOf(item) + 1){
        number =  i;
      }
    })
    return number;
  }


  for(var i = 0; i < arrLength; i++) {
  
    var isOpen = checkOpen(arr[i], openNumberInPattern);
    var isClose = checkOpen(arr[i], closeNumberInPattern);


    if (!stack.length && isClose && !isOpen) {
      return false;
    } else if (!stack.length || (isOpen && !isClose)) {
      stack.push(arr[i]);
      continue;
    } else {
      if (isOpen && isClose) {
        if (!(stack.indexOf(arr[i]) + 1)) {
          stack.push(arr[i]);
          continue;
        }
        if (stack[stack.length - 1] !== arr[i]) {
          return false;
        } else {
          stack.pop();
          continue;
        }
      }

      var patternNumberPrev = patternNumberFunction(stack[stack.length - 1]);
      var patternNumberCurrent = patternNumberFunction(arr[i]);

      if(patternNumberPrev === patternNumberCurrent) {
        stack.pop();
        continue;
      }


    }

 }

  if(stack.length) {
    return false;
  } else {
    return true;
  }
}