<template>
  <div>
    <header class="index_header">
      <ul>
          <router-link tag="li" v-for="(item,index) in tabbars" :key="item.id" :to="item.path"  >
              <a v-if="item.bj==0">
                  <i :class="item.name"></i>
              </a>
              <v-touch tag="a" v-if="item.bj==1" @tap="handleHuanYe(index)" :class="value == index ? 'curr':''">
                  <span>{{item.name}}</span>
                  <em v-if="item.new" class="new">NEW</em>
              </v-touch>
          </router-link>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tabbars: [
        {
          id: 0,
          bj: 0,
          name: 'logo_h',
          path: '/'
        },
        {
          id: 1,
          bj: 1,
          name: '首页',
          path: '/home'
        },
         {
          id: 2,
          bj: 1,
          name: '购票',
          path: '/ticket',
        },
        {
          id: 3,
          bj: 1,
          name: '商城',
          path: '/shopping',
          new : true
        },
        {
          id: 4,
          bj: 1,
          name: '发现',
          path: '/find'
        },
        {
          id: 5,
          bj: 0,
          name: 'header_my',
          path: '/mine'
        },
      ],
      value: 1
    };
  },
  methods:{
    handleHuanYe(index){
      console.log(1111);
      this.value = index ;
    }
  }
};
</script>

<style>
.index_header {
  width: 100%;
  background-color: #1c2635;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.index_header ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.167rem;
}

.index_header ul li {
  text-align: center;
}

.index_header ul li:first-child {
  margin-right: 0.083rem;
}

.index_header ul li a {
  position: relative;
  display: block;
  line-height: 0.44rem;
  color: #bbb;
  font-size: 0.125rem;
}
.index_header ul li .new {
  width: 0.25rem;
  height: 0.121rem;
  border-radius: 0.092rem;
  background-color: #d80808;
  color: #fff;
  position: absolute;
  top: 0.073rem;
  left: 0.223rem;
  font-size: 0.067rem;
  font-style: normal;
  display: block;
  line-height: 0.1rem;
  overflow: hidden;
}
.logo_h {
  display: block;
  width: 0.558rem;
  height: 0.179rem;
  background: url(http://static1.mtime.cn/html5/20191022151144/images/2014/logo_mtime.png)
    no-repeat;
  background-size: contain;
}

.header_my {
  display: block;
  width: 0.142rem;
  height: 0.179rem;
  background: url(http://static1.mtime.cn/html5/20191022151144/images/2014/ico_my.png)
    no-repeat;
  background-size: cover;
}

.curr::after {
  content: "";
  height: 0.2em;
  background: #fff;
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}

.index_header ul li .curr {
  color: #fff;
}
</style>