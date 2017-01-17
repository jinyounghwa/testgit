var listTag = document.querySelector(".basket ol");
var tag = listTag.children;
// 1. ol dom 에  children을 뒤져서 같은 value 를 가지고 있는 child를 찾는다.
function addValue (todoORnumber){
  if (todoORnumber === liList('elElement')){
    red("이미있다.."); // 빨간텍스트를 호출한다.
  } else if (eleList(eleList) > todoORnumber.length ){
    // 2. 같은 value가 없으면 문자열의 수를 세어서 그 수 보다 크거나 같으면 todoORnumber를 createElement하여 뒤에
    // insertBefore를 사용하여 추가한다.
    // insertBefore를 사용하려면 부모 요소.insertBefore(새로운 노드, 기준노드[번호])
    function plusNode (index, text) {
      var tagList = document.createElement("li");
      var tagText = document.createTextNode(todoORnumber);

      tagList.appendChild(tagText);
      listTag.insertBefore(tagList, tag[index]);
    }
  }
}

function removeValue(todoORnumber) {
  if (todoORnumber !== eleList('elNumber')) {
    console.log("값을 지운다");
  } else {
      red("번호가 없다.."); // 빨간텍스트를 호출한다.
    // function minusNode (min) {
    //   tagList.removeChild(tag[min]);
    // }
  }
}


function plusTag(todoORnumber){ // 추가는 되지만 insertBefore를 사용하기 어렵다.
  var li = document.createElement("li");
  li.textContent = todoORnumber;
}

var obj = {"name" : function(lastname) {
console.log("function name is", lastname);
  }
};
obj["name"]("dummy");


var el = document.querySelector("ol");
function liList () {
 for (var i = 0; i < el.children.length; i++) {
  elElement = el.children[i].textContent; // li 문자열을 구함
  if(elElement === todoORnumber)
  message();
  return ;
  console.log(elElement);
  }

return elElement;
}; // 이 친구를 비어있는 배열에 넣어 length를 구하면 문자열의 길이가 된다.
