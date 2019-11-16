<template>
  <section class="index_section">

    <div>
      <nav class="find-nav">
        <router-link
          tag="span"
          v-for="(item,index) in findList"
          :key="index"
          :to="item.path"
          :class="value == index?'f-color':'' "
        >
          <v-touch @tap="handleFindHuan(index)">{{item.title}}</v-touch>
        </router-link>
      </nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </section>

</template>

<script>
export default {
  name: "Find",
  data() {
    return {
      findList: [
        {
          title: "新闻",
          path: "/find/findnews"
        },
        {
          title: "预告片",
          path: "/find/findyu"
        },
        {
          title: "排行榜",
          path: "/find/findpai"
        },
        {
          title: "影评",
          path: "/find/findping"
        }
      ],
      value: JSON.parse(sessionStorage.getItem("FindValue")) || 0
    };
  },
  methods: {
    handleFindHuan(index) {
      this.value = index;
      sessionStorage.setItem("FindValue",JSON.stringify(index));
    }
  },
  created() {
    this.$store.dispatch("find/handleFindTitle");
  }
};
</script>

<style>
.index_section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 0.43rem;
}
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