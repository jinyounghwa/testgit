var position = document.querySelector("#position");
var friend = document.querySelector("#friend");
var theme = document.querySelector('#theme');
var news = document.querySelector('#news');
var btns = document.querySelectorAll('.tab');
btns = Array.prototype.slice.call(btns);    // NodeList를 Array로 만들기 위해서 넣었다.
/*.call 매서드 : */

// Array.prototype.forEach.call(btns, function(el){
//   el.addEventListener('click', function(){
//     Array.prototype.forEach.call(btns, function(el){ //NodeList를 Array로 만들기 위해서 넣었다. 무슨말이냐면 Array.prototype.slice.call은 유사배열을 배열로 만들어 준다.
                                                        //처음에는 몰랐는데 함수안에 있는 인자에서 나오는 값 argmunts 은 유사배열이기 때문에 배열로 사용하고 싶으면 이것을 써야 한다.
//       el.classList.remove('selectedTab');
//     });                                              //MDN에서 보면 바인딩은 Function.prototype.call.bind를 사용하여 단순화 할 수 있다고 하는데 바인딩이란 이름에 속성을 연관
                                                        //시키는 것이라고 언어론 책에서 찾았다. 그러니까 여기서 이름이라는것은 변수나 인자라고 한다면 인자에 타입이 무엇인지 정해지는것이라고 추측한다.
//         this.classList.add('selectedTab');
//         console.log(el);
//   });
// });
/*
-후기 (설계문 삭제함)
1. 첫번째 작성했던 것은 하나의 버튼마다 add / remove 메소드를 사용하여 (1개버튼 add/ 나머지 remove) 만들어 보는 무식한 방법을 사용하였으나... 버튼이 토글 될 리가 없다.
2. 부끄러워서 첫번째 작성한 코드는 지워버리고 이리저리 검색한 끝에 Array.prototype.forEach.call을 사용하는 방법을 썼다.
3. 물론 버튼 동작에는 무리가 없지만.. 그거하려고 낸 숙제가 아니기에 다른 문제가 있었다.
4. 그 문제는 무엇이냐면, 내가 선택한 버튼에 해당하는값을 찾고 그것을 확인하여 ajax로 뿌려주었어야 하는데 log를 찍으면 엘리먼트 전체가 나와버리는 결과로 이걸 또 해결해야 하는 문제가 있었다.
5. 하루동안 이것을 switch-case 로 구분하여 따로 이벤트를 넣을까.. 이니면 8개의함수로 동작과 통신을 늘릴까 생각하다가 이러려고 내가 JS했는지 자괴감이 들었다.
6. 간절히 원하면, 온 우주가 도와준다고 하였지 않았는가.. 온 우주의 기운을 모아 긴 시간동안 구글링을 하였다.
7. 먼저 가장 큰 실수가 무엇이였나면 forEach의 인자값을 하나만 생각했었다는 것이다. 역시 사람은 문서를 잘 읽어야 한다. 가만히 눈을감고 심호흡을 한 뒤 일단 MDN을 뒤져봤다.
8. 이후의 과정은 각 라인마다 넣었다. 당연한 말이지만 정말 실수가 많다. 구글링은 역시 훌룡하다.
*/
// map -> filter -> reduce 배열과 철천지 원수인 나의 말로 이 메소드를 배열 자주쓰는 3대장이라 부르겠다. 이것을 완전히 마스터 할 날을 간절히 기도한다. (지금은 검색한 대로 만들었다.)

btns.forEach(function (el, idx) { // forEach의 인자값은 요소 값, 인덱스, 순회하는 배열 세 개를 받을 수 있다고 하는데 자바스크립트가 그런지 모르지만 인자값이 필수가 아닌것 같다.

  el.addEventListener("click", function (e) {

    var found = null; // 이렇게 변수를 넣으면 맞으면 null 잘못한건 undefined 로 분류할 수 있다. (친구가 가르쳐 줬다. 우와.. 하나 배웠다.)
    var api = btns
      .map(function (el2, idx2) { // 배열로 만들어서 모든 함수를 다 한번씩 사용해야 하기에 ... 무슨말이냐면 어차피 한번씩돌면서 클래스의 생성과 삭제를 반복해야 하기 때문에 map를 썼다.
        if(idx === idx2) {
        el2.classList.add("selectedTab");
      } else {
        el2.classList.remove("selectedTab");
      }
        return el2; // forEach문과 다른점은 반환이 된다는것이다. return문은 정말 잘 알고 써야한다는 것을 다시한번 깨닫지만.. 내일이면 당황해서 또 잊어먹겠지..
      })
      .filter(function (el2) {//  빙글빙글 돌려서 순환한 배열을 다시 받아서 selectedTab클래스를 가지고 있는 놈만 찾을 수 있었다. (이게 되는구먼..)
        found = el2.className.match("selectedTab"); // match 메소드는 저번주 todo숙제에서 어느분이 사용하는거 보고 배꼈다.
        return !!found; // !! -> 두개 붙은게 무슨 뜻인가 하면 불린 으로 판단하게 할 수 있게 해준다..(이것도 친구가 가르쳐 줬다. 우와.. 두개배웠다..)
      })
      .reduce(function (prev, curr) {// 인자값으로 이전 / 현재의 값을 넣을 수 있다..
        return prev + (btns.indexOf(curr) + 1); // 배열의 특정값을 찾기 위해 indexOf를 썻다 자세하게 생각해 보면 url값이 끝에만 1씩 추가되기 때문에 각각의 URL을 불러올 필요가 없다.(헐.. 이런방법이..)
      }, "http://jsonplaceholder.typicode.com/posts/");
      // 여기서 생각하지도 못한것을 찾아보고 알 수 있게 되었다. "http://jsonplaceholder.typicode.com/posts/"처럼 반환값을 문자로 넣을 수도 있고
      // MDN에서 보니 반환값에 [] 넣으면 2차원 배열을 1차원으로 내릴 수 있다.
    oReq.open("GET", api);
    oReq.send();

  });


});


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(res) {

  var res = JSON.parse(res.target.responseText);
  var show = document.querySelector(".eleDisplayShow");

  show.innerHTML = "<ul><li><div class='myName'>" + res.title + "</div><div class='myDesc'>" + res.body + "</div></li></ul>";

});
