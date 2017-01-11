

//삭제하기
var x = document.querySelector("ul");
var y = document.querySelector("ul li:nth-child(5)");

x.removeChild(y);

//추가하기
var list = document.createElement('li');
var mango = document.createTextNode('Mango');

list.appendChild(mango);
x.appendChild(list);
