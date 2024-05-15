function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function displayRandomNumber() {
    var randomNumber = getRandomNumber(-20, 20);
    document.getElementById('num').textContent = randomNumber;
    
    var result = document.getElementById('result');
    if (result) {
      result.parentNode.removeChild(result);
    }
  
    var main = document.getElementById('main');
    var message = randomNumber < 0 ? 'Cold' : 'Hot';
    var div = document.createElement('div');
    div.id = 'result';
    div.textContent = message;
    main.appendChild(div);
  }
  