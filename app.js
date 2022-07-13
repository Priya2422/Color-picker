const btn=document.querySelector("button");
btn.addEventListener("click",function(){
    alert("Select your background color type.");
})



//Creating HTTP request using XHR

//callBack Hell Method:-
// const URL="https://jsonplaceholder.typicode.com/posts";
// const xml=new XMLHttpRequest();
// // console.log(xml.readyState);
// xml.open("GET",URL);
// //ye method tab chalega jab readystate change hoga
// // xml.onreadystatechange=function(){
// //     if(xml.readyState===4){
// //         const res=xml.response;
// //         const pars=JSON.parse(res);
// //         console.log(Array.isArray(pars));
// //         console.log(pars[1]);
// //     }
// // }

// //ye method tab chalega jab readystate 4 hoga
// xml.onload=function(){
// if(xml.status>=200 && xml.status<300){
//     // console.log(xml.readyState);
//     const res=xml.response;
//     const pars=JSON.parse(res);
//     // console.log(Array.isArray(pars));
//     // console.log(pars);
//     const id=pars[1].id;
//     const xhr2=new XMLHttpRequest();
//     const URL2=`${URL}/${id}`;
//     xhr2.open("GET",URL2);
//     xhr2.onload=function(){
//         console.log(xhr2);
//     }
//     xhr2.send();
//     // console.log(URL2);

// }else{
//     console.log("Smthng wnt wrng");
// }
// }

// //ye method tab chalega jab network related error ayega browser will keep a check on it
// xml.onerror=function(){
//     console.log("Network error");
// }
// xml.send();

//Promise Method:-
//  const URL="https://jsonplaceholder.typicode.com/possts";
// function sendreq(meth,ur){
//     return new Promise(function(reso,rej){
//         const xhr=new XMLHttpRequest();
//         xhr.open(meth,ur);
//         xhr.onload=function(){
// if(xhr.status>=200 && xhr.status<300){
//     // console.log(xml.readyState);
//     const res=xhr.response;
//     const pars=JSON.parse(res);
// // console.log(pars);
// reso(pars);
// }else{
//   rej(new Error("Smthng wnt wrng"));
// }
// }
// xhr.send();
// })
// }
// sendreq("GET",URL)
// .then((res)=>{
//     return res;
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });





// Fetch Api method(long method)

// const URL="https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then((res)=>{
//     if(res.ok){
//     return res.json();}else{throw new Error("Error!");}
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Catch called");
//     console.log(err);
// })


//Fetch Api using Async and Await:-
//-> Async functions always return promise and Await always waits until the given promise is resolved

// const URL="https://jsonplaceholder.typicode.com/posts";

// async function posts(){
//     const res=await fetch(URL);
//     // console.log(res);
//     const data=res.json();
//     // console.log(data);
//     return data;
// }
// posts().then(mydata=>{
//     console.log(mydata);
// });