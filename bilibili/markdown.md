# My Learning

## Javacript

### Array
#### [map](https://www.bilibili.com/video/BV14R4y1f7iE/)
##### 心得
###### 理解parseInt的行为，如何传递参数
#### [reduce](https://www.bilibili.com/video/BV1R3411f7uu/)
##### 心得
###### 加初始值和不加的区别：执行次数不同
#### [filter](https://www.bilibili.com/video/BV11d4y1x7gt/)
##### 心得
###### 如果filter的是对象，对其操作也会影响原数组，map也一样
#### [some](https://www.bilibili.com/video/BV1q14y1n73A/)
##### 心得
###### 初始值为false，当有一个为true时，设置成true并break这个loop，然后return
######
```js
let res = false;

for (...) {
  if (...) {
    res = true;
    break;
  }
}

return res;
```
#### [every](https://www.bilibili.com/video/BV1QP411u7mf/)
##### 心得
###### 初始值为true，当有一个为false时，设置成false并break这个loop，然后return
######
```js
let res = true;

for (...) {
  if (...) {
    res = false;
    break;
  }
}

return res;
```

### chrome extension
#### [chrome插件开发Marker笔](https://www.bilibili.com/video/BV1b8411j7KJ/)
##### 心得
###### 快速看chrome插件文档，理解content script和background script的区别
###### window selection toString
###### 如何保存当前状态：可以保存整个页面的dom来简单粗暴搞定
###### [取色网站](https://mybrandnewlogo.com/color-palette-generator)


### Algorithm
#### [chain](https://www.bilibili.com/video/BV1ZK411d7UD/?spm_id_from=333.999.0.0)
##### 心得
###### for循环实现
###### reduce实现

## 逆向
### 前端
#### playcode
##### [在线编辑器原理](https://www.bilibili.com/video/BV1uD4y1e7iS/)
###### 心得
- 快速debug技巧：从渲染地方break on subtree入手
- document.open 和 document.write 的使用
- 在iframe实现实时时钟
- postmessage的使用
- 动态注入css、js和html

##### [去除广告限制](https://www.bilibili.com/video/BV1N3411v7Cy/)
#### [招聘网站将多页内容全部显示](https://www.bilibili.com/video/BV1EP4y1R7UG/)
##### 心得
###### 分析payload
###### promise all
###### 灵活解决overrides后的error：直接删除代码
###### 反爬虫技巧：随机时间

#### [medium网站去除会员限制](https://www.bilibili.com/video/BV1ZD4y1e7gv/)
##### 心得
###### 善用postman，二分法header
###### cookie身份验证

## 测试
### postman
#### [自动化脚本测试api的响应时间](https://www.bilibili.com/video/BV1Vg411W7uh/)
##### 心得
###### pm test
###### variable变量保存数据
###### runner多次执行
