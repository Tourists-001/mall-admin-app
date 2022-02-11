<template>
  <a-table :columns="columns" :data-source="tableData" :pagination="page" @change="changePage">
    <div slot="operation" slot-scope="text, cored">
     <a-button @click="handleEdit(cored)">编辑</a-button>
     <a-popconfirm
    title= "确定删除?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm(cored)"
    @cancel="cancel"
  >
    <a-button @click="handleRemove(cored)">删除</a-button>
  </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
// import api from '@/api/product';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    align: 'center',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    align: 'center',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    customRender(text, record) {
      return record.status === 1 ? '上架' : '下架';
    },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
    width: 200,
    align: 'center',
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ['data', 'page', 'categoryList'],
  computed: {
    tableData() {
      return this.data.map((item) => ({
        ...item,
        key: item.id,
      }));
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changePages', page);
      // console.log(this.categoryList);
    },
    handleEdit(cared) {
      this.$emit('edit', cared);
    },
    handleRemove() {},
    confirm(cored) {
      this.$emit('remove', cored);
    },
    cancel() {
      this.$message.error('取消删除');
    },
  },
};
</script>
