// 3-1삭제하기
var x = document.querySelector("ul");
var y = document.querySelector("ul li:nth-child(5)");

x.removeChild(y);

// 3-2 추가하기
var list = document.createElement('li');
var mango = document.createTextNode('Mango');

list.appendChild(mango);
x.appendChild(list);

// 4. 바나나와 오렌지 사이에 과일을 추가하기
var list = document.createElement('li');
var lemon = document.createTextNode('lemon');
var x = document.querySelector("ul li:nth-child(2)");

list.appendChild(lemon);
x.appendChild(list);

//5. apple을 grape와 strawberry사이로 옮기기
var frlist = document.querySelector("ul");
var itm = document.querySelector("li:nth-Child(1)");
var clon = itm.cloneNode(true);
frlist.insertBefore(clon, frlist.childNodes[8]);
frlist.removeChild(frlist.childNodes[1]);

// 6. class 가 red인 노드 삭제
var red = document.querySelectorAll(".red");
var redlist = document.querySelector("ul:nth-child(2)");

redlist.removeChild(red[0]);
redlist.removeChild(red[1]);

// 7. h2노드 삭제
var section = document.querySelector("section");
var blue = section.querySelector(".blue");
var h2 = section.querySelector("h2");

if(blue) section.removeChild(h2);
