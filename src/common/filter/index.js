 import Vue from 'vue'

/* Vue.filter("toTime",(time,offset)=>{
    return ;
} */ 


// 写一个时间自动转换器
//转时间 开场散场时间
Vue.filter("toTime",(letterTime)=>{
    let date = new Date(letterTime);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
    let D = date.getDate() + '日 ';
    let h = date.getHours() + ':';
    let m = date.getMinutes();
    m = m<10?"0"+m:m;
    return h+m;
})

//转换时间 传入时间戳得时间 年月日时分
Vue.filter("toAllTime",(letterTime)=>{
    let date = new Date(letterTime * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes();
    m = m<10?"0"+m:m;
    return Y+M+D+h+m;
})

//转时间 今天日期
Vue.filter("toDay",(letterTime,Day)=>{
    let date = new Date(letterTime);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
    let D = date.getDate() + Day + '日 ';
    let h = date.getHours() + ':';
    let m = date.getMinutes();
    m = m<10?"0"+m:m;
    return M+D;
})

//提交时间与当前时间对比计算
Vue.filter("toLastTime",(lastTime)=>{
     /**设置每个阶段时间，单位是秒*/
     var seconds_of_1minute = 60;
 
    var seconds_of_30minutes = 30 * 60;
  
    var seconds_of_1hour = 60 * 60;
  
    var seconds_of_1day = 24 * 60 * 60;
  
    var seconds_of_15days = seconds_of_1day * 15;
  
    var seconds_of_30days = seconds_of_1day * 30;
  
    var seconds_of_6months = seconds_of_30days * 6;
  
    var seconds_of_1year = seconds_of_30days * 12;

    
    var elapsedTime = (new Date().getTime()/1000 - lastTime);
    if (elapsedTime < seconds_of_1minute) {
 
        return "刚刚";
    }
    if (elapsedTime < seconds_of_30minutes) {

        return parseInt(elapsedTime / seconds_of_1minute) + "分钟前";
    }
    if (elapsedTime < seconds_of_1hour) {

        return "半小时前";
    }
    if (elapsedTime < seconds_of_1day) {

        return  parseInt(elapsedTime / seconds_of_1hour) + "小时前";
    }
    if (elapsedTime < seconds_of_15days) {

        return  parseInt(elapsedTime / seconds_of_1day) + "天前";
    }
    if (elapsedTime < seconds_of_30days) {

        return "半个月前";
    }
    if (elapsedTime < seconds_of_6months) {

        return  parseInt(elapsedTime / seconds_of_30days) + "月前";
    }
    if (elapsedTime < seconds_of_1year) {

        return "半年前";
    }
    if (elapsedTime >= seconds_of_1year) {

        return  parseInt(elapsedTime / seconds_of_1year) + "年前";
    }
    return "";
})
