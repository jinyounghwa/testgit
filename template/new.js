// 문자열 치환
var myStr = "MacBook Pro!";
// result 'MacBook Air'
var air = myStr.replece("pro", "Air");
air;


//정규표현식 문자열 치환
var myStr  = "MacBook Pro!";
var air = myStr.replece(/Pro/,"Air");
air;

//공백을 포함한 정규표현식
var myStr  = "MacBook Pro!";
var air = myStr.replece(/\s\w+/," Air");
air;

// 치환하는 것
var myStr  = "<span>{{name}}<span>";
var air = myStr.replece("{{name}}"," codesquad");
air;

// 서버 탬플릿 : 동적으로 넣어 줄 때 (치환)
var dataFromServer = {"name" : "codesquad", "since": "2016"};
var myStr = "<span>{{name}}<span>";

var resultHTML = myStr.replece("{{name}}", dataFromServer.name);
var baseElement = document.querySelector(".showdata");
baseElement.innerHTML = resultHTML;

// 템플릿 예제 (서버에서 받아 올 경우)
var dataFromServer = [
  {"name" : "MacBook Pro", "since": "2016"},
  {"name" : "MacBook Air", "since": "2016"},
  {"name" : "mac pro", "since": "2016"},
  {"name" : "ipad", "since": "2016"}
];

var myStr = "<li>{{name}}</li>";
var resultHTML = "<ul>"; //  처음 html을 먼저 선언할 수 밖에 없나요?
for (var i = 0; i< dataFromServer.length; i++) {
  resultHTML += myStr.replace("{{name}}", dataFromServer[i].name);
}
resultHTML +="<ul>"
var baseElement = document.querySelector(".showdata");
baseElement.innerHTML = resultHTML;

// script 테그 활용
/*
<div class="showdata">
  <ul>

  </ul>
</div>


<script type=myTemplate id="myTemplate">
// 하위를 랜더링 하지 않는다.
<li>
<span>{{name}}</span>
</li>
</script>
*/

var dataFromServer = [
  {"name" : "MacBook Pro", "since": "2016"},
  {"name" : "MacBook Air", "since": "2016"},
  {"name" : "mac pro", "since": "2016"},
  {"name" : "ipad", "since": "2016"}
];

var template = document.querySelector("#myTemplate").innerText;
var resultHTML = template.replace("{{name}}", dataFromServer[3].name)
var baseEle = document.querySelector("showdata > ul");

baseEle.innerHTML = resultHTML;
