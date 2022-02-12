<template>
<div class="index-container">
  <div class="card">
      <Card />
  </div>
  <div class="eChart">
      <Echarts />
  </div>
</div>
</template>

<script>
import Card from '@/components/card.vue';
import Echarts from '@/components/Echarts.vue';

export default {
  components: {
    Card,
    Echarts,
  },
};
</script>

<style>
.card {
  overflow: hidden;
}
</style>
