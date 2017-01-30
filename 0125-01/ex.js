// var email = "translate3d(10px,20px,30px)";
// var result = email.replace(/translate3d\((\d+)px.+/,"$1");
// 정규표현식에서 역슬레시 d 는 숫자 d+ 는 숫자가 하나이상 \d를 감싸주면 임의의 수를 넣을 수 있다. "$1"은첫번째를 뜻함
//
//
//버튼의 값을 확인하기 위함
var btns = document.querySelector('.controls');
var left = document.querySelector('.left');
left = left.textContent;
var right = document.querySelector('.right');
right = right.textContent;


var xvalue = 0;


//wrap 의 값을 확인하기 위함
var wrap = document.querySelector('#wrap');
var translate = wrap.style.transform;
var replace = translate.replace(/translate3d\((.+)px, 0px, 0px\)/,'$1');

btns.addEventListener("click", function(evt){
      switch (evt.target.className) {
        case left:
          if(xvalue => 0) {
             xvalue -= 600;
             translate3d ='translate3d('+xvalue+'px,0px,0px)';
          	 wrap.style.transform = translate3d;
          }
          break;
        case right:
          var rvalue = xvalue;
          if(rvalue => -2400) {
             xvalue += 600;
             translate3d ='translate3d('+xvalue+'px,0px,0px)';
             wrap.style.transform = translate3d;
          }
          break;
      }
  });
