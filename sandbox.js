function permAlone(str) {
  var charecters = str.split('');

  var _permArr = [];
  var _usedChars = [];
  function permute(array) {
    var i, ch;
    for (i = 0; i < array.length; i++) {
      ch = array.splice(i, 1)[0];
      _usedChars.push(ch);
      if (array.length == 0) {
        _permArr.push(_usedChars.slice());
      }
      permute(array);
      array.splice(i, 0, ch);
      _usedChars.pop();
    }
    return _permArr;
  };

  var permutations = permute(charecters).map(function(array) {
    return array.join('');
  });

  var matches = permutations.filter(function(item) {
    return !item.match(/(\w)\1+/);
  });

  return matches.length;
}
var output =
permAlone('aab');
console.log({output})
