//学习异步咯
//step1：Settimeout做动画效果
//实现，用定时器延时一下接受到类名更改的时间

let fir = document.getElementsByClassName("fir")
let sec = document.getElementsByClassName("sec")
let thr = document.getElementsByClassName("thr")

// setTimeout(function () {
//     fir[0].setAttribute('class', 'firaf')
// }, 1500)

// setTimeout(function () {
//     sec[0].setAttribute('class', 'secaf')
// }, 2500)

// setTimeout(function () {
//     thr[0].setAttribute('class', 'thraf')
// }, 3500)
//查看第一种方法请把上面的注释去掉
//很好，非常完美
//但是一个优秀的前端人怎么能满足于只会一种方法捏

//step2：promise链式回调
//

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         fir[0].setAttribute('class', 'firaf')
//         resolve("下一个")
//     }, 2000);
// })
//     .then(
//         (data) => {
//             setTimeout(() => {
//                 sec[0].setAttribute('class', 'secaf')
//                 resolve("下一个")
//             }, 2000);
//         },
//     )
//     .then((data) => {
//         setTimeout(() => {
//             thr[0].setAttribute('class', 'thraf')
//             resolve("下一个")
//         }, 4000);
//     })


//step2：async/await

function change(arr, string) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            arr.setAttribute('class', string)
            resolve();
        }, 2000);
    })
}

async function fun() {
    await change(fir[0], 'firaf')
    await change(sec[0], 'secaf')
    await change(thr[0], 'thraf')
}

fun()