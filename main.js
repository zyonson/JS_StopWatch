(function(){
  'use strict';
  
  let timer = document.querySelector('#timer');
  let start = document.querySelector('#start');
  let stop = document.querySelector('#stop');
  let reset = document.querySelector('#reset');
  
  let startTime;
  let elapsedTime = 0;
  let timerId;
  let timeToadd = 0;
  
  function updateTimetText(){
    let m = Math.floor(elapsedTime / 60000);
    let s = Math.floor(elapsedTime % 60000 / 1000);
    let ms = elapsedTime % 1000;
    
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-2);
    
    timer.textContent = m + ':' + s + ':' + ms;
    }
    function countUp(){
      timerId = setTimeout(function(){
        elapsedTime = Date.now() - startTime +timeToadd;
        updateTimetText()
        countUp();
      },10);
    }
    
    start.addEventListener('click',function(){
      start.disabled = true;
      stop.disabled = false;
      startTime = Date.now();
      countUp();
    });
    
    stop.addEventListener('click',function(){
      stop.disabled = true;
      start.disabled = false;
      clearTimeout(timerId);
      timeToadd += Date.now() - startTime;
    });
    
    reset.addEventListener('click',function(){
      elapsedTime = 0;
      timeToadd = 0;
      updateTimetText();
    });
})();