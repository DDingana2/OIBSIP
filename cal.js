function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    var result = document.getElementById('result').value;
    var answer = eval(result);
    document.getElementById('result').value = answer;
  }
  function removeResult(){
    var ans = document.getElementById('result').value ;
    var rem = ans.toString().slice(0,-1);
    document.getElementById('result').value = rem;

  }
  