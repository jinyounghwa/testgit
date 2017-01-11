// 바나나와 오렌지 사이에 과일을 추가하기
var list = document.createElement('li');
var lemon = document.createTextNode('lemon');
var x = document.querySelector("ul li:nth-child(2)");

list.appendChild(lemon);
x.appendChild(list);
