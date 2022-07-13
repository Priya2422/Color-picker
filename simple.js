const btn=document.getElementById("one")
const bo=document.querySelector("body");
const sp=document.querySelector("span");
const opt=["red","green","blue","#554433","rgb(205,100,99)"];
function getnum(){
    return Math.floor(Math.random()*opt.length);
}
btn.addEventListener("click",function(){
    console.log(getnum());
   let random=opt[getnum()];
   bo.style.backgroundColor=random;
   sp.textContent=random;
})
