<template>
  <div class="product-list-container">
    <!-- 搜索区域 -->
    <div class="search-area">
      <Search @submit="searchList" :data='categoryList'/>
    </div>
    <!-- 添加商品 -->
    <div class="search-btn">
      <a-button
        type="primary"
        html-type="submit">
        <router-link :to="{name:'ProductAdd'}">
          添加商品
        </router-link>
      </a-button>
    </div>
    <!-- 产品列表 -->
    <div class="product-list">
      <List
      :data="tableData"
      :page="page"
      @changePages="changePage"
      :categoryList="categoryList"
      @edit="editProduct"
      @remove="removeProduct"
      />
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
      this.getTableData();
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
    editProduct(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      });
    },
    removeProduct(record) {
      api.removeProduct(record.id).then((res) => {
        this.$message.success(res.msg);
        this.getTableData();
      });
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
.product-list-container{
  position: relative;
}
.search-area {
  padding-left: 50px;
  margin: 10px 0;
}
.search-btn{
  position: absolute;
  right: 200px;
  top: 5px;
}
</style>
