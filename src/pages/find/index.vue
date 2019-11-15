<template>
  <div>
    <nav class="find-nav">
      <router-link tag="span" v-for="(item,index) in findList" :key="index" :to="item.path"
       :class="value == index?'f-color':'' " @click.native="handleFindHuan(index)">{{item.title}}</router-link>
    </nav>
    <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Find",
  data(){
    return{
      findList:[
        {
          title:"新闻",
          path:"/find/findnews"
        },
        {
          title:"预告片",
          path:"/find/findyu"
        },
        {
          title:"排行榜",
          path:"/find/findpai"
        },
        {
          title:"影评",
          path:"/find/findping"
        },
      ],
      value:0
    }
  },
  methods:{
    handleFindHuan(index){
      console.log(111);
      this.value = index ;
    }
  }
};
</script>

<style>
.find-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.find-nav span {
  flex: 1;
  font-size: 0.125rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
}

.find-nav .f-color {
  color: #1e7dd7;
  font-weight: bold;
}

</style>