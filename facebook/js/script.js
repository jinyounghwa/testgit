//1. 검색창은 textarea 이므로 querySelector로 위치를 확인한다.
//2. area가 facus 될 때 오른쪽 메뉴가 없어진다.
//3. 오른쪽 메뉴가 없어짐과 동시에 취소 텍스트가 추가된다.
var area = document.querySelector("div textarea");
area.addEventListener("mouseover",function(evt){
var event2 = document.querySelector(".event2");
event2.style.display = "block"
var cencle = document.getElementById("area2");
cencle.innerText = "취소";

cencle.addEventListener("click", function(evt){
    var event2 = document.querySelector(".event2");
    event2.style.display = "none"
  })
})

// 1. input 영역은 상단의 search 이므로 querySelector로 위치를 확인한다.
// 2. 입력한 글자 수가 19자 보다 크면 초과 되었다는 메시지를 innerText한다.
var searchInput = document.querySelector('div .input');
searchInput.addEventListener("input", function(evt){
var textOver = document.querySelector("section li");
  if (evt.target.value.length > 19) {
    textOver.style.display = "block"
  }else {
    textOver.style.display = "none"
  }
})
