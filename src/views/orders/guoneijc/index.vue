<template>
  <div name="国内降舱">
      <el-button type="primary" round size="medium" @click="handleopen">跳转新页面</el-button> 
  </div>
</template>
<script>
export default {
  name:'guoneijc',
  data(){
    return{

    }
  },
  methods: {
    handleopen(){
      window.open('https://element.eleme.cn/#/zh-CN/component/checkbox')
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
