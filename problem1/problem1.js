
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
  }break;
  }
}

var listTag = document.querySelector(".basket ol");
var tag = listTag.children;
// 1. ol dom 에  children을 뒤져서 같은 value 를 가지고 있는 child를 찾는다.
function addValue (todoORnumber){
  if (todoORnumber === liList(elElement){
    red("이미있다.."); // 빨간텍스트를 호출한다.
  } else if (eleList(eleList) > todoORnumber.length ){
    // 2. 같은 value가 없으면 문자열의 수를 세어서 그 수 보다 크거나 같으면 todoORnumber를 createElement하여 뒤에
    // insertBefore를 사용하여 추가한다.
    // insertBefore를 사용하려면 부모 요소.insertBefore(새로운 노드, 기준노드[번호])
    function plusNode (index, text) {
      var tagList = document.createElement("li");
      var tagText = document.createTextNode(text);

      tagList.appendChild(tagText);
      listTag.insertBefore(tagList, tag[index]);
    }
  }
}

function removeValue(todoORnumber) {
  if (todoORnumber === eleList(elNumber)) {
    red("이미있다.."); // 빨간텍스트를 호출한다.
  } else {
    function minusNode (min) {
      tagList.removeChild(tag[min]);
    }
  }
}


// function plusTag(todoORnumber){ // 추가는 되지만 insertBefore를 사용하기 어렵다.
//   var li = document.createElement("li");
//   li.textContent = todoORnumber;
// }

var redNode = document.querySelector(".message");
function red(error) {
  redNode.innerHTML = error;
  redNode.style.color= "red";
  setTimeout(function() {
    redNode.innerHTML = "";
  }, 3000)
}



var el = document.querySelector("ol");
function eleList (){
for (var i = 0; i < el.children.length; i++) {
  elNumber = el.children[i].textContent.length // li 문자열의 수를 구함
}};
function liList () {
 for (var i = 0; i < el.children.length; i++) {
  elElement = el.children[i].textContent; // li 문자열을 구함
}};





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
