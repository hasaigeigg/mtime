<template>
  <div>
    <header class="sou-header">
      <nav class="sou-nav">
        <router-link tag="a" to="/shopping" class="sou-btn"></router-link>
        <input type="text" placeholder="搜索正版电影周边" />
        <a class="sou-box">
          <span>搜索</span>
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Shopsou",
};
</script>

<style>
.sou-header {
  height: 0.44rem;
  background: #1c2635;
  z-index: 200;
  top: 0;
  left: 0;
  position: fixed;
}

.sou-nav {
  padding: 0 0.15rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.sou-btn {
  width: 0.44rem;
  height: 0.44rem;
  position: absolute;
  left: 0;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png)
    no-repeat 0.15rem center;
  background-size: auto 0.15rem;
}

.sou-nav input {
  margin-left: 0.22rem;
  width: 2.104rem;
  height: 0.328rem;
  border-radius: 0.067rem;
  padding: 0 0.246rem 0 0.273rem;
  font-size: 0.133rem;
  color: #757575;
  outline: none;
  border: none;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.047rem center;
  background-size: 0.183rem 0.183rem;
}

.sou-box {
  width: 0.45rem;
  height: 0.279rem;
  border: 1px solid #fff;
  text-align: center;
  line-height: 0.263rem;
  display: block;
  color: #fff;
  font-size: 0.142rem;
  margin-left: 0.05rem;
  border-radius: 0.042rem;
}
</style>