const btn=document.getElementById("one")
const bo=document.querySelector("body");
const sp=document.querySelector("span");
const arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function getnum(){
    return Math.floor(Math.random()*arr.length);
}
btn.addEventListener("click",function(){
    let color="#";
    for(let i=0;i<6;i++){
        color+=arr[getnum()];
    }
    bo.style.backgroundColor=color;
    sp.textContent=color;
})