function ajax() {
var oReq = new XMLHttpRequest();
console.log(1);
oReq.addEventListener("load", function(evt){
    console.log(5);
  });
console.log(2);
oReq.open("GET","https://randomuser.me/api/?page=3&results=10&seed=abc");
console.log(3);
oReq.send();
console.log(4);
return true;
}
ajax();
