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
          data: ['0-10', '10-30', '30-50', '50以上'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [1000, 2000, 1500, 1000, 5000],
            type: 'bar',
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
