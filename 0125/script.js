var display = document.querySelector('.controls');
var display = document.querySelector('.display');

var init = 0;


// 일단 버튼을 선택하여 left / right 가 나오는것을 확인하였다. (부모요소에 evt.target.className)



display.addEventListener("click", function(evt){
switch (evt.target.className) {
  case left:
    if(init <= 2400) {
      // display에 600px을 더한 innerHtml
    }
    break;
  case right:
    if(init <= 2400) {
      // display에 600px을 뺀 innerHtml
    }
    break;

}
});
