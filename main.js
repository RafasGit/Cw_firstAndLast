//We remove the first and last characters from a given string using the shift and pop method after splitting the text into array elements as strings dont have native shift and pop methods
function removeChar(str){
    //You got this!
    let str1 = str.split('');
      str1.shift();
      str1.pop();
      return str1.join('');
       
    };