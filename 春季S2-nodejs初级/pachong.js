//爬虫课堂——开课啦！！！

//内容是豆瓣的电影TOP250的第一页哦

//首先做好课前准备 终端输入npm init -y初始化
//输入npm install cheerio安装cheerio，这是基于jqurey的库，虽然我们没学过jqurey，这里只搞懂一点核心语法就好了，尤其适合解析Html
//深入学习指路：https://github.com/cheeriojs/cheerio/wiki/Chinese-README
//加载https模块, 只要是获取网站链接都需要的操作
const http = require('https')
//加载之前下载的cheerio,在后面会有作用
const cheerio = require('cheerio')
//文件读取系统  fileSystem, 对文件的操作模块
const fs = require('fs')

//代码正式开始
//http的get方法，两个参数，第一个是你的地址，第二个中res是你请求的数据，function是你要执行的操作
http.get('https://movie.douban.com/top250', function (res) {
    let html = '';//先定义一个空字符串，后面就直接把数据拼接上去即可

    //这里的res.on嘛，可以理解为addEventListener，不断触发可以不断的将监听到的data拼接到html上

    res.on('data', function (chunk) {
        html += chunk;
    })

    //当拼接完成之后，进行下一步操作
    res.on('end', function () {
        // console.log(html) //这里可以看到html文件都已经被我们获取到了，是完整的

        const $ = cheerio.load(html)  //cheerio的load方法，在使用cheerio的对象之前，先把这个参数转换为cheerio对象，以方便我们对其进行操作
        let allFilms = [] //拿一个数组来存放我们爬出来的东西www
        //这里要根据要爬的网站选择内容了
        $('li .item').each(function () {//观察我们每个要获取的数据都是放在 li 后面应该带.item的div，直接遍历所有这样的数组
            //这里使用到的是cheerio的选择器
            //$(selector, [context], [root])
            //其中selector是目标选择器，context是目标选择器的上下文，root是上下文context的上下文。
            //selector和context可以是字符串表达式、dom元素、dom元素集合、cheerio对象，而root一般都是html文档字符串。
            const title = $('.title', this).text();//这里的this是我们找到的每个li .item[i],用txt刚好可以获取到相应的文本
            const star = $('.rating_num', this).text();
            //cheerio中的.attr方法，可以携带两个参数，第一个代表获取属性的值，第二个代表设置属性的值
            const pic = $('.pic img', this).attr('src')
            //把获取到的东西push到数组里
            allFilms.push({ title, star, pic })
            //console.log(allFilms)
        })

        //执行写入文件的方法，转json格式，没有错误则输出文件写入完毕
        fs.writeFile('./files.json', JSON.stringify(allFilms), function (err) {
            if (!err) {
                console.log('文件写入完毕')
            }
        })
    })
})