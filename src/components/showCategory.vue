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
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data,
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
  height: 500px;
}
</style>
