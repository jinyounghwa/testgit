
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
1. todoORnumber가 문자인지 확인한다. : typeof로 비교하려 했는데 숫자도 문자로 인식한다. (새로운거 배웠다.)
2. todoORnumber와 textContent로 순회한 텍스트와 비교하여 같은것이 있으면 경고
2. todoORnumber 문자가 맞으면 기존에 있는 리스트에 li를 추가하여 넣는다.
2. 문자에서 테그를 분리한 후 텍스트가 되고 이 분리한 것을 빈 배열에 넣는다.
3. 넣어진 배열에서 length를 구하면 문자열의 길이가 된다.
4. 문자열의 길이 순으로 정렬하고 li를 추가한다.

remove 의 업무
1. todoORnumber 가 숫자인지 확인한다.
2. todoORnumber가 숫자가 맞으면
3. todoORnumber의 숫자가 li 리스트의 숫자보다 크면 경고이고 0이하 이어도 경고
4.li 리스트의 숫자와 todoORnumber의 숫자와 비교하여 같은게 있으면 삭제

*/


// function addValue (todoORnumber) {
//   if (todoORnumber !== 'string') {
//     console.log('스트링');
//   }else {
//     console.log('스트링이 아님');
//     }
// }











function red(error) {
  var redNode = document.querySelector(".message");
  redNode.innerHTML = error;
  redNode.style.color= "red";
  setTimeout(function() {
    redNode.innerHTML = "";
  }, 3000)
}









/*
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
 * controller의 클래스를 기준으로 controller의 노드들을 가져옵니다.
 * controller는 addEventListener라는 매서드를 실행합니다. 그것은 클릭이라는 이벤트로 evt라는 인자를 받는 함수를 호출합니다.
 * 만약 btn.tagName이 버튼이라면 반환합니다.
 * btn에 인접한 노드의 벨류를 inputValue에 넣고
 * actionType에 bth클래스를 넣습니다.
 * 마지막으로 그것을 executeItemNode 함수에 두 변수를 인자로 넣고 위의 executeItemNode함수를 호출합니다.
 */


var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
    });
