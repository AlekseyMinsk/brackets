module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let closeError = [];
  let open = bracketsConfig.map(item => {
    return item[0];
  });
  let close = bracketsConfig.map(item => {
    return item[1];
  });

  for(let i = 0; i < str.length; i++) {
	let currentItem = str[i];
  	if(open.includes(currentItem) || close.includes(currentItem)) {

  		// если первый элемент в стеке закрывающияся скобка, сразу return false
  		let isStackEmpty = !stack[0];
  	 	if(isStackEmpty && close.includes(currentItem) && !open.includes(currentItem)) {
  			return false;
  		} else if(isStackEmpty) {
  			stack.push(currentItem);
  		} else if(open.indexOf(currentItem) + 1 && !(close.indexOf(currentItem) + 1)) {
  			stack.push(currentItem);
  		} else if(open.indexOf(stack[stack.length - 1]) === close.indexOf(currentItem)) {
  			stack.splice(stack.length - 1, 1);
  		} else  {
  			return false;
  		}

  	
  	}
  }
  return stack.length ? false : true;
}



















