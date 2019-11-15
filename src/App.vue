<template>
  <div id="app" class="app">
    <Header v-if="$route.meta.flag"/>
    <!-- <section class="index_section"> -->
      <keep-alive :exclude="/(Shopdetail)/">
        <router-view></router-view>
      </keep-alive>
      <!-- <More v-if="$route.meta.Mor"/> -->
      <!-- <TabBar v-if="$route.meta.Tab"/> -->
    <!-- </section> -->
  </div>
</template>

<script>
import Header from "@common/components/header";
import TabBar from '@common/components/tabBar';
import More from '@common/components/more';
export default {
  name: "App",
  components: {
    Header,
    TabBar,
    More
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
</style>
