prompt("Enter the string you want check ");
function isPalindrom(string){
  var len = string.length;
  len--;
  var j = 0
  for( ; j < len ; len-- ){
    if (string[j] != string[len]){
      return false;
    }
    retun true;
  }
}

console.log(isPalindrom(string))
