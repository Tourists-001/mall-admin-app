<template>
  <div class="product-list-container">
    <!-- 搜索区域 -->
    <div class="search-area">
      <Search @submit="searchList" :data='categoryList'/>
    </div>
    <!-- 产品列表 -->
    <div class="product-list">
      <List :data="tableData" :page="page" @changePages="changePage" :categoryList="categoryList"/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';
import api from '@/api/product';
import categoryApi from '@/api/category';

export default {
  components: {
    Search,
    List,
  },
  data() {
    return {
      tableData: [],
      searchForm: {},
      categoryList: [],
      categoryObj: {},
      page: {
        current: 1,
        pageSize: 10,
        total: 1,
        showSizeChanger: true,
      },
    };
  },
  methods: {
    searchList(form) {
      this.searchForm = form;
    },
    getTableData() {
      api.getProductList({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      }).then((data) => {
        this.page.total = data.total;
        this.tableData = data.data.map((item) => ({
          ...item,
          categoryName: this.categoryObj[item.category].name,
        }));
      });
    },
    changePage(info) {
      this.page = info;
      this.getTableData();
    },
  },
  async created() {
    await categoryApi.getCategory().then((res) => {
      this.categoryList = res.data;
      res.data.forEach((item) => {
        this.categoryObj[item.id] = item;
      });
    });
    this.getTableData();
  },
};
</script>

<style lang="less">
.search-area {
  padding-left: 50px;
}
</style>
