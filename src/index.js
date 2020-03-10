module.exports = function check(str, bracketsConfig) {
  let bracketStack = [];
  let openBracket = {};
  let closedBracket = {};
  bracketsConfig.forEach(array => 
    {openBracket[array[0]] = array[1];
      closedBracket[array[1]] = true;
    });

  for(let i = 0; i < str.length; i++) {
    if(openBracket[str[i]] && closedBracket[str[i]] && !bracketStack.find(x => x === str[i])) {
      bracketStack.push(str[i]);
      continue;
    }
    if(openBracket[str[i]] && !closedBracket[str[i]]) {
      bracketStack.push(str[i]);
    } else if (closedBracket[str[i]]) {
      if(openBracket[bracketStack.pop()] !== str[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return bracketStack.length === 0;
}

//console.log(check('(((|||)))', [['[', ']'], ['(', ')'],['|', '|']]))