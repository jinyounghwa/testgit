// 1. 시작점으로 하는함수
document.addEventListener("DOMContentLoad", function(){
init(); //초기화 하는 함수 (시작 포인트)
})

function init () { // 시작 할 때 쓰는 함수
  btnsName();
}


function btnsName (){
var btns = document.querySelectorAll('.tab');
btns = Array.prototype.slice.call(btns);
selectBtns(btns);
}






function selectBtns (btnsName) {
  btns.forEach(function (el, idx) {
  el.addEventListener("click", function (e) {

    var found = null;
    var api = btns
      .map(function (el2, idx2) {
        if(idx === idx2) {
        el2.classList.add("selectedTab");
      } else {
        el2.classList.remove("selectedTab");
      }
        return el2;
      })
      .filter(function (el2) {
        found = el2.className.match("selectedTab");
        return !!found;
      })
      .reduce(function (prev, curr) {
        return prev + (btns.indexOf(curr) + 1);
      }, "http://jsonplaceholder.typicode.com/posts/");
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", aaa);
    oReq.open("GET", api);
    oReq.send();

  });

});}


function aaa(res) {
var res = JSON.parse(res.target.responseText);
var show = document.querySelector(".eleDisplayShow");
show.innerHTML = "<ul><li><div class='myName'>" + res.title + "</div><div class='myDesc'>" + res.body + "</div></li></ul>";
}
