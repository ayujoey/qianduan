
//这里是为愿意去做了作业的孩子准备的内容哦，恭喜你们愿意去学习更多更好的知识
//能来到这里的相信都遇到了和我差不多的问题，所以来看看的我的思路对吧
//没错，这里我们要解决的是promise的大危机！错误处理
//不然你会发现你的if判断到reject了之后没有人来接受这个东西欸（当然，如果你有更好的方法就当我放屁）
//try...catch语句
function log(num, time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            if (num > 5) {
                reject(6);
            } else
                resolve();
        }, time);
    })
}//到这里一切正常，我们有resolve有reject对吧

async function fun() {

    try {
        //这里放的都是正常的语句，如果没有问题的话，会从头开始读下来哦
        await log(2, 500)
        await log(3, 5000)
        await log(7, 10000)//这里放了一个会引发error的参数哦
        await log(4, 5000)
        await log(5, 3000)

    } catch (error) {
        //如果读到那一步开始出现了reject，就终止后面的操作，从此处开始截胡，后面的就没有了
        console.log(error);
    }
}

fun()//可以自己更改数据试试这里会输出什么就好了