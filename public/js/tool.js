
//获得元素id
function $id(idName){
	return document.getElementById(idName);
}
//获取一个新数组,把原数组的重复的删掉
function xarr(arr){
	var navArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(navArr.indexOf(arr[i]) == -1 ){
			navArr.push(arr[i]);
		}
	}
	return navArr;
}
//获取任意两个数之间的随机数
function getRand(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
	
}
//获得随机的16进制的颜色值,需要配合随机数一起用
function getColor(){
	var color = "#";
	var str = "0123456789abcdef";
	for (var i = 0; i < 6; i++) {
		var Rund = getRand(0,15);
		color += str.charAt(Rund);
	}
	return color;
}
//获得随机的有大小写字母的验证码,需要配合随机数
function getYZM(num){
	var yzm = "";
	for (var i = 0; i < num; i++) {
	      var rund = getRand(48,122);	
	     if((rund >= 48 && rund <= 57) || (rund >= 65 && rund <= 90) || (rund >= 97 && rund <= 122)){
	       yzm += String.fromCharCode(rund);	
	}else{
		i--;
	}
	}
	return yzm;
}
//获得纯数字验证码,需要配合随机数
function getYZM(num){
	var yzm = "";
	for (var i = 0; i < num; i++) {
	      var rund = getRand(0,9);	
	       yzm += rund;
	}
	return yzm;
}
//获得当前时间从年到秒
function dateToString(date){
	var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	var str = y + "年" + getDb(m) + "月" + getDb(d) + "日" + getDb(h) + ":" + getDb(f) + ":" + getDb(s) + " " + week[w] ;
	return str;
 }
function getDb(num){
	return num < 10 ? 0 + "" + num : num;
}
//console.log(dateToString(new Date));

//设置一个时间差,返回一个秒数,开始为小的年数后面写大的
function diff(startTime,endTime){
	return (endTime.getTime() - startTime.getTime())/1000;
}
//小型活动倒计时,总小时,分钟,秒
function huodong() {
    let stardate = new Date();
    let enddate = new Date("2019.7.30 18:00:00");
    setInterval(() => {
        this.x = parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60 / 60) < 10 ? "0" + parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60 / 60) : parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60 / 60);
        this.f = parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60) % 60 < 10 ? "0" + parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60) % 60 : parseInt(parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) / 60) % 60;
        this.s = parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) % 60 < 10 ? "0" + parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) % 60 : parseInt(diff(new Date(), new Date("2019.7.30 18:00:00"))) % 60;
    }, 1000)

}

//活动到计时
// var h1 = document.getElementsByTagName("h1")[0];
var xian = new Date();
var houlai = new Date("2019.7.30 21:06:30");
var miao = diff(xian, houlai);
//console.log(miao);
function tim() {
    if (miao < 0) {
        h1.innerHTML = "活动时间已结束";
        return;
    }
    var d = parseInt(miao / 60 / 60 / 24);
    var x = parseInt(((miao / 60 / 60 / 24) - d) * 24);
    var f = parseInt((((miao / 60 / 60 / 24) - d) * 24 - x) * 60);
    var s = parseInt(((((miao / 60 / 60 / 24) - d) * 24 - x) * 60 - f) * 60);
    // h1.innerHTML = "距离活动结束还有 " + d + "天" + x + "小时" + f + "分 " + s + "秒";
    //console.log(str);
    //h1.innerHTML = str;
}
tim();
var timer = setInterval(function () {
    if (miao < 0) {
        clearInterval(timer);
    }
    tim();
    miao--;
}, 1000);
		//console.log(d,m,s);



//跨IE8以下浏览器兼容通过className获取元素集合
function getByClassName(className){
	var elementArr = [];
	var ele = document.getElementsByTagName("*");//获取所有元素标签
	for (var i = 0; i < ele.length; i++) {
		if (ele[i].className == className) {
			elementArr.push(ele[i]);
		}
	}
	return elementArr;
}
//把一个新节点插入到目标节点的后面
function insertAfter(newEl,targetEle){
			var parent = targetEle.parentNode;//找到父节点
			//判断targetEle是否是最后一个子节点
			if (parent.lastChild === targetEle) {//判断parent父节点的最后一个子元素是否是targetEle,
				parent.appendChild(newEl);//如果是就把parent放到父节点最后面
			} else{//如果不是就找到targetEle的下一个兄弟节点,然后把newEl放到他前面
				parent.insertBefore(newEl,targetEle.nextElementSibling);
			}
		}
//
//跨浏览器兼容IE8及以下获取事件对象的button属性
function getEventButton(eve){
	if (eve) {
		//现代浏览器
		return eve.button;
	} else{//IE8及以下环境
		var b = window.event.button;
			switch(b){
				case 1:
				return 0;
				case 4:
				return 1;
				case 2:
				return 2;
			}
	}
}
//跨浏览器兼容IE8阻止事件冒泡
function stopProp(e){
	if (e.stopPropagation) {
		e.stopPropagation();
	} else{
		e.cancelBubble = true;
	}
}
//跨浏览器IE8阻止元素默认行为
function prevDefault(e){
	if (e.preventDefault) {
		e.preventDefault();
	} else{
		e.returnValue = false;
	}
}
//跨浏览器兼容IE8实现事件监听
function addEvent(ele,eve,fn){
	if (ele.addEventListener) {
		ele.addEventListener(eve,fn);
	} else{
		ele.attachEvent("on"+eve,fn);
	}
}
//兼容IE8及以下获取元素样式属性值;非行内样式和行内样式
function getStyle(ele,attr){//OBJ是需要获得的元素,ATTR是要获得的属性
	if(window.getComputedStyle){//获取元素外部样式属性值
		return window.getComputedStyle(ele,null)[attr];
	}
	return ele.currentStyle[attr];//兼容IE的方式
}

//显示实时时间
//setInterval(function (){
//	var date = new Date();
//	box.innerHTML = dateToString(date);
//},1000);
//求数组中最大数
//alert(Math.max.apply(null,[2,3,1,5]));
//隔行变色
//for (var i = 0; i < li.length; i++) {
//	if (i % 2 == 0) {
//		li[i].style.background = "red";//偶数行为红色
//	} else{
//		li[i].style.background = "blue" //奇数行为蓝色
//	}
//}
//获得从大到小的数组
function getDaArr(arr){
	for (var i = 0; i < arr.length-1; i++) {
	  for (var j = 0; j < arr.length-i-1; j++) {
	  	if (arr[j] < arr[j+1]) {
	  		[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
	  	}
	  }
}
	return arr;
}
//获得从小到大的数组
function getDaArr(arr){
	for (var i = 0; i < arr.length-1; i++) {
	  for (var j = 0; j < arr.length-i-1; j++) {
	  	if (arr[j] > arr[j+1]) {
	  		[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
	  	}
	  }
}
	return arr;
}
