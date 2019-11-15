<template>
    <div>
        <ul class="loginbox">
        <li>
          <a>
            <span class="iconfont">&#xe697;</span>
          </a>
          <div class="hengxian">
            <input type="text" placeholder="登录邮箱/手机号码">
          </div>
        </li>
        <li>
          <a>
            <span class="iconfont">&#xe6a0;</span>
          </a>
           <div>
            <input type="text" placeholder="密码">
            <a class="Mine-mm">显示密码</a>
          </div>
        </li>
      </ul>
      <div class="loading">
        <span>登陆</span>
      </div>
      <div class="logintable">
        <router-link to="/mine/zhuce" tag="a">免费注册</router-link>
        <a>找回密码</a>
      </div>
      <div class="other-login">
        <p>
          <span>使用第三方登录</span>
        </p>
        <div class="other-load">
          <a></a>
          <a></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"MineLoad"
}
</script>

<style>
.loginbox{
  background: #fff;
  margin: 0;
  box-shadow: 0 3px 3px rgba(51,51,51,0.1);
}
.loginbox li{
  display: flex;
  align-items: center;
  padding: .06rem 0;
}
.loginbox li span{
  display: block;
  width: .45rem;
  padding-left: 0.1rem;
  height: .362rem;
  line-height: .362rem;
  font-size: .233rem;
  text-align: center;
}
.loginbox li input{
  font-size: 0.14rem;
  margin: .08rem 0;
  height: .188rem;
  line-height: .188rem;
  /* width: 100%; */
  border: none;
  outline: none;
  height: 100%;

}
.hengxian{
  border-bottom: 1px solid #d8d8d8;
  flex: 1;
  padding: .06rem 0;
}

.loginbox li input:last-child{
  border-bottom: none;
}
.Mine-mm{
  color: #1e7dd7;
  font-size: .117rem
}
.loading{
  margin:.2rem .15rem 0 ;
  padding: .115rem;
  background: #1e7dd7;
  border: 1px solid #1e7dd7;
  text-align: center;
  border-radius: .333rem;
}
.loading span{
  font-size: .167rem;
  color: #fff;
}
.logintable{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logintable a{
  flex: 1;
  line-height: .475rem;
  font-size: .125rem;
  color: #1e7dd7;
  padding: 0 .205rem;

}
.logintable a:last-child{
  color: #777;
  text-align: right;
}
.other-login{
  margin:  .05rem .15rem 0;
  padding-bottom: .25rem;
  border-top: 1px solid #d8d8d8;
}
.other-login p {
  font-size: .1rem;
  color: #999;
  text-align: center;
  margin-top: -0.07rem;
  margin-bottom: .2rem;
}
.other-login p span{
  background: #fff;
  padding: 0 .058rem;
}
.other-load{
  display: flex;
  align-items: center;
  justify-content: center;
}
.other-load a{
  width: .55rem;
  height: .55rem;
  display: block;
  background: url(http://static1.mtime.cn/html5/20191022151144/images/2014/o_sina.png) no-repeat;
  background-size: cover;
  margin: 0 .133rem;
}
.other-load a:nth-child(2){
  background: url(http://static1.mtime.cn/html5/20191022151144/images/2014/o_qq.png) no-repeat;
  background-size: cover;
}
</style>