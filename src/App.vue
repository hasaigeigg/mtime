<template>
  <div id="app" class="app">
    <Header v-if="$route.meta.flag"/>
      <keep-alive :exclude="(/(Detailsmovie|Shopdetail|Moviedetail|MovieComingDetail|Shopmowan|Ticket|HomeHotNew|FindNewDetail|cart)/)">
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Header from "@common/components/header";
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style>


</style>
