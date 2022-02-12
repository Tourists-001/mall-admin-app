<template>
  <div class="show-category-container" ref="main">

  </div>
</template>

<script>
import * as echarts from 'echarts';
import api from '@/api/category';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    api.CategoryNum().then(({ data }) => {
      this.data = data;
      this.showEcharts();
    });
  },
  methods: {
    showEcharts() {
      const chartDom = this.$refs.main;
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: ['一季度', '二季度', '三季度'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [1500, 2300, 2240],
            type: 'line',
          },
        ],
      };
      // eslint-disable-next-line no-unused-expressions
      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.show-category-container {
  width: 400px;
  height: 400px;
  /* padding-left: 30px; */
}
</style>
