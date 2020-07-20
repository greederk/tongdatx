<template>
  <div name="国内紧急订单"   class="guoneijj-content">
  <div class="guoneijj-top1">
      
          <check-box></check-box>
          <el-button type="primary" round size="medium" >刷新余座</el-button> 
  </div>
   
  <div class="guoneijj-table">
     <template>
        <el-table
            :data="tableData"
        height="800"
            border
            stripe
            style="width: 100%">

                <el-table-column
                    prop="laiyuan"
                    label="来源"
                     align="center">
                </el-table-column>

                <el-table-column
                    prop="dingdanhao"
                    label="订单号"
                  >
                </el-table-column>

                <el-table-column
                    prop="ptdingdanhao"
                    label="平台订单号">
                </el-table-column>

                <el-table-column
                    prop="people"
                    label="成人PNR | 儿童PNR">
                </el-table-column>

                <el-table-column
                    prop="paytime"
                    label="支付时间">
                </el-table-column>

                <el-table-column
                    prop="endtime"
                    label="出票时限">
                </el-table-column>

                <el-table-column
                    prop="flytime"
                    label="起飞时间">
                </el-table-column>

                <el-table-column
                    prop="code"
                    label="政策">
                </el-table-column>

                <el-table-column
                    prop="peolength"
                    label="人数(成人/儿童)">
                </el-table-column>

                <el-table-column
                    prop="price"
                    label="总价">
                </el-table-column>

                <el-table-column
                    prop="status"
                    label="订单状态">
                </el-table-column>

                <el-table-column
                    prop="seats"
                    label="余座">
                </el-table-column>

                <el-table-column
                    prop="handle"
                    label="操作">
                </el-table-column>

                 <el-table-column
                    prop="buwei"
                    label="补位">
                </el-table-column>

        </el-table>
    </template>
  </div>
    
  </div>
</template>
<script>
import CheckBox from '@/components/checkbox/index.vue';
export default {
    name:'guoneijj',
    components:{
        CheckBox
    },
  data(){
    return{
      name:'guoneijj',
      checked:true,
      checkAll: true,
      checkedCities: ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'],
      cities: cityOptions,
      isIndeterminate: true,
    }
  },
  methods:{
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  }
}
</script>
<style lang="scss" scoped>

.guoneijj-content{
    .guoneijj-top1{
        display:flex;
        background-color:#f1f2f4;
    }
}
.el-checkbox{
    margin-right:3px;
}

</style>
<style lang="scss" >
.guoneizd-check{
  
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