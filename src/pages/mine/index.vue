<template>
    <section class="index_section">

    <div>
      <HeaderFan icon v-if="$route.meta.top" />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    </section>

</template>

<script>
export default {
  name: "Mine"
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