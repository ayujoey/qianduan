window.onload = function () {
    let leftb = document.querySelector('.left');
    let rightb = document.querySelector('.right');
    let box = document.querySelector('.box');
    let imgs = box.querySelector('.imgs');
    let imgt = imgs.querySelectorAll('li');
    //计时器实现自动翻页
    let time = setInterval(function () {
        rightf();             //翻页函数，后面写
    }, 3000)

    //按住时不动
    box.addEventListener('mouseover', function () {

        //移入时清除定时器
        clearInterval(time);
        time = null;
    })

    //移开继续开始轮播
    box.addEventListener('mouseout', function () {

        clearInterval(time);
        time = setInterval(function () {
            rightf();
        }, 3000)
    })

    //设置小圈圈
    var ml = box.querySelector('.ml');
    for (var i = 0; i < imgs.children.length; i++) {
        //创建li，加入ul中
        var li = document.createElement('li');
        ml.appendChild(li);
        //给小圈圈添加类名
        li.setAttribute('index', i);
        //实现点击小圆圈，变色
        li.addEventListener('click', colors);
        //点击小圆圈，切换图片
        li.addEventListener('click', jump);
    }
    //一开始第二个亮
    ml.children[1].className = 'change';
    //变色函数 
    function colors() {
        //把所有的小圆圈变白
        for (var i = 0; i < ml.children.length; i++) {
            ml.children[i].className = '';
        }
        //给图片对应的小圆圈上色
        var index = this.getAttribute('index');
        ml.children[index].className = 'change';
    }
    //跳转函数
    function jump() {
        var index = this.getAttribute('index');
        var now = num.indexOf('two');
        //计算经过点与当前点的距离
        var dif = Math.max(index, now) - Math.min(index, now);
        //来没到选定的图片，向左翻
        if (index > now) {
            while (dif--) {
                rightf();
            }
        } else {//反之向右翻
            while (dif--) {
                leftf();
            }
        }
    }
    //小圆圈跟随着图片移动
    var j = 1;
    function colort() {
        for (var i = 0; i < ml.children.length; i++) {
            ml.children[i].className = '';
        }
        if (j >= 4) {
            j = 0;
        } else if (j < 0) {
            j = 3;
        }
        ml.children[j].className = 'change';
    }


    //设置翻页
    let num = ['one', 'two', 'three', 'four'];
    //右翻页
    rightb.addEventListener('click', rightf);
    function rightf() {
        //把数组的最后一个添加到第一个
        num.unshift(num[3]);
        //删除最后一个
        num.pop();
        //重新给li添加类名
        for (var i = 0; i < num.length; i++) {
            imgt[i].setAttribute('class', num[i]);
        }
        j++;
        colort();
    }

    //左翻页
    leftb.addEventListener('click', leftf)
    function leftf() {
        num.push(num[0]);
        num.shift();
        for (var i = 0; i < num.length; i++) {
            imgt[i].setAttribute('class', num[i]);
        }
        j--;
        colort();
    }

}