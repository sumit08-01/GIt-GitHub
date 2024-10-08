
// function getData() {
//     return "sumit"
// }

// console.log(getData()); // calling and printing data


// -------------------------------------------------------------
// const p = new Promise((res, rej) => {
//     res("This is promise resolved")
// })

// async function getData() {
//     const dataPromise = await p;
//     console.log(dataPromise);
// }
// getData();

// ---------------------------------------------
// const p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved")
//     }, 5000);
// })

//using then()
// async function getData() {
//     console.log("hello world before"); //1
//     p.then(res => console.log(res)); // 3 print like this
//     console.log("hello world after"); //2
// }

//using await
// async function getData() {
//     console.log("hello world before"); //1
//     const dataPromise = await p; //2 suspended for sometime
//     console.log(dataPromise); // 3 
//     console.log("hello world after"); //4
// }
// getData();

// ------------------------------------------------------------------
// if time is same
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 1")
//     }, 5000);
// })
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 2")
//     }, 5000);
// })

// async function getData() {
//     console.log("hello world before"); // 1
//     const dataPromise1 = await p1; // suspended
//     console.log(dataPromise1); // 2 print 
//     const dataPromise2 = await p2; // suspended
//     console.log(dataPromise2); // 3 print 
//     console.log("hello world after"); // 4 print
// }
// getData();

// ------------------------------------------------------

// if time p1 5s and p2 10s
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 1")
//     }, 5000);
// })
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 2")
//     }, 10000);
// })

// async function getData() {
//     console.log("hello world before"); // 1
//     const dataPromise1 = await p1; // suspended till when promised resolved
//     console.log(dataPromise1); // 2 print after 5 sec
//     const dataPromise2 = await p2; // suspended till when promised resolved
//     console.log(dataPromise2); // 3 print after 10 sec
//     console.log("hello world after"); // 4 print just after above line resolved
// }
// getData();

// -------------------------------------------------------
// if time p1 10s and p2 5s
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 1")
//     }, 10000);
// })
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is promise resolved 2")
//     }, 5000);
// })

// async function getData() {
//     console.log("hello world before"); // 1
//     const dataPromise1 = await p1; // suspended till when promised resolved 
//     console.log(dataPromise1); // 2 print after 10 sec
//     const dataPromise2 = await p2; // suspended till when promised resolved, but this promised is resolved before above but not execute
//     console.log(dataPromise2); // 3 print after 10 sec, just when promised 1 resloved
//     console.log("hello world after"); // 4 print after 10 sec, just when promised 1 resloved
// }
// getData();

// ------------------------------------------------------------------

// fetch function
const API_URL = "https://api.github.com/users/sumit08-01";

async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

handlePromise().catch(err => console.log(err));