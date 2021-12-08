const ball1 = document.querySelector('.ball1')
const ball2 = document.querySelector('.ball2')
const ball3 = document.querySelector('.ball3')
//js动画封装的用法
//实现原理：1.获得盒子（元素）当前的位置 ：offsetLeft
//2.让盒子（元素）在当前位置加上1个移动距离（1px）：element.style.left
//3.利用定时器不断重复这个操作 ：setInterval(fn, delay)
//4.加一个结束定时器的条件

//缓动动画的原理：让盒子的每次移动的距离慢慢变小，速度就会慢慢落下来。
//计算公式： (目标值 - 现在的位置 ) / 10
//注意：这里的步长值step会出现小数的情况，要把它取整，否则会使移动的位置不准确。并且还要区分是正数还是负数，如果向左移动就是负数，向下取整(Math.floor)，向右移动就是正数，向上取整(Math.ceil)。

// function animate(obj, target) {// obj： 需要做动画的元素// target:：移动的目标距离// delay(第三个，已弃用)： 多久调用一次定时器，值越小，移动的速度越快// callback(第四个，已弃用，但是很好用，作为模板的一部分只是注释掉了)：动画执行完毕之后，执行的回调函数
//     // obj.timer 给不同的元素指定不同的定时器
//     obj.timer = setInterval(() => {
//         var step = (target - obj.offsetLeft) / 10     // 用缓动来计算步长
//         step = step > 0 ? Math.ceil(step) : Math.floor(step)  // 通过他的左右移动来对取整进行判断

//         if (obj.offsetLeft > target) {
//             // 停止动画，本质就是停止定时器
//             clearInterval(obj.timer);
//             // 回调函数写在定时器停止之后
//             //callback && callback();//（已弃用，但作为模板的一部分他很好用）一共很cooool的写法，相当于 if callback {callback()};如果回调函数存在，则执行该回调函数。
//         }
//         // offsetLeft是只读属性，只能用来获取值，不能赋值，赋值要用element.style.left
//         obj.style.left = obj.offsetLeft + step + 'px'
//     }, 30);
// }
// 调用函数
//很好，我们已经漂亮地把封装动画的模板打完了，但是现在要想办法把promise封进去
var Promise = window.Promise;
function animate(obj, target) {
    return new Promise(function (resolve, reject) {


        obj.timer = setInterval(() => {
            var step = (target - obj.offsetLeft) / 20
            step = step > 0 ? Math.ceil(step) : Math.floor(step)

            if (obj.offsetLeft === target) {
                clearInterval(obj.timer);//计时器清零
                resolve()//传给下一任
                //alert("第一个完成")
            }

            else {
                obj.style.left = obj.offsetLeft + step + 'px'
                animate(obj, target)
            }
        }, 50);

    })

}
animate(ball1, 300)
    .then(function () { return animate(ball2, 300) })
    .then(function () { return animate(ball3, 300) })