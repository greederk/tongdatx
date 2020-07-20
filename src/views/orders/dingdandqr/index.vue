<template>
  <div name="订单待确认" class="dingdandqr-content">
    <div class="dingdandqr-top">
   
          <div class="dingdandqr-t1">
                <el-row>  
                  <el-col class='dingdandqr-check' >  
                      <el-checkbox v-model="checked">按来源优先排序</el-checkbox>
                      <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                      </el-checkbox-group>
                 
                  </el-col> 
           
                </el-row>
          </div>
          <div  class="dingdandqr-t2">
               <el-button type="primary" round size="medium">刷新数据</el-button> 
          </div>
    </div>
  </div>
</template>
<script>
const cityOptions = ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'];
export default {
  name:"dingdandqr",
  data(){
    return{
      checked:false,
        // 多选框
        checkAll: true,
        checkedCities: ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'],
        cities: cityOptions,
        isIndeterminate: true,
        // 多选框
    }
  },
  methods: {
     // 多选框
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    // 多选框
  },
}
</script>
<style lang="scss" scoped>
.dingdandqr-content{
  padding:10px;
  .dingdandqr-top{
    background-color:#f1f2f4;
    .dingdandqr-t1{
      padding:10px;
      display:flex;
      align-items:baseline;
      // margin-bottom:20px;
    }
    .dingdandqr-t2{
      padding:5px 0 10px 10px;
    }
  }
}
// 复选框
.el-checkbox{
    margin-right:0px;
}
</style>

<style lang="scss">
// 复选框
.dingdandqr-check{
    .el-checkbox .is-checked{
      
    }
    display: flex;
    flex-wrap:nowrap;
    .el-checkbox__label{
        padding-left:0px;
    }
    .el-checkbox__label{
        margin-right:10px;
    }
}
</style>