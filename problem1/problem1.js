
/*
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 *
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 *
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

// actionType과 todoORnumber를 분류한다.

function executeItemNode(actionType, todoORnumber)  {
  switch (actionType) {
    case "add":{
        addValue(todoORnumber);
    } break;
    case "remove":{
        removeValue(todoORnumber);
    } break;
    }
  }
/*
addValue : 텍스트를 추가하는 함수
removeValue : 숫자를 받아 제거하는 함수
eleList : li 문자열의 수 (숫자)
liList : li 문자열 (문자)
red : 중복되는 부분에 있는 경우 경고 문구 호출
sort : 정렬

addValue 의 업무
todoORnumber가 문자인지 알 방법이 없다. (다들 이거 신경 안 쓰더라)
1. 우선 두개의 인자를 가지고 있다.


remove 의 업무
1. todoORnumber 가 숫자인지 확인한다.
2. todoORnumber가 숫자가 맞으면
3. todoORnumber의 숫자가 li 리스트의 숫자보다 크면 경고이고 0이하 이어도 경고
4.li 리스트의 숫자와 todoORnumber의 숫자와 비교하여 같은게 있으면 삭제

*/

//추가하는 함수












function red(error) {
  var redNode = document.querySelector(".message");
  redNode.innerHTML = error;
  redNode.style.color= "red";
  setTimeout(function() {
    redNode.innerHTML = "";
  }, 3000)
}











var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
    });
