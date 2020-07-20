<template>
<!--国内自动订单 -->
  <div class="guoneizd-content">
    <div class="guoneizd-top1"> 
        <el-row >
            <el-col :span="3">
                <div class="">订单号:</div>
                <el-input
                        v-model="input"
                        class="guoneizd-inputddh"
                        size="mini"
                    >
                </el-input>
            </el-col>
          
            <el-col :span="4">
                <div class="">平台订单号:</div>
                <el-input
                        v-model="input"
                        class="guoneizd-inputpt"
                        size="mini"
                    >
                </el-input>
            </el-col>
     
            <!-- <el-col :span="4">
                <div class="">政策关键字:</div>
                <el-input
                        v-model="input"
                        class="guoneiwcp-inputcode"
                        size="mini"
                    >
                </el-input>
            </el-col> -->
        
            <el-col :span="3">
                <div class="">航司:</div>
                <el-input
                        v-model="input"
                        class="guoneizd-inpuths"
                        size="mini"
                    >
                </el-input>
            </el-col>
     
            <el-col :span="4" class="guoneizd-chd">
                <div class="">是否携带儿童:</div>
                <template >
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                         
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-col>

            <el-col :span="5">
                 <el-button type="primary" round size="small" >查询</el-button> 
                 <el-button type="primary" round size="small" >刷新</el-button>  
            </el-col>
           
            </el-row>
         </div>
         <div class="guonerzd-top1"></div>


        <check-box></check-box>
   
    <div class="guoneizd-ff"></div>
    <div class="guoneizd-main">
        <div class="block">
            <!-- <span class="demonstration">显示总数</span> -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
        <template>
        <el-table
            :data="tableData"
           
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
  name:'guoneizd',
  components:{
      CheckBox
  },
  data(){
      return{
        checked:true,
        options: [{
                    value: '选项1',
                    label: '全部'
                }, {
                    value: '选项2',
                    label: '是'
                }, {
                    value: '选项3',
                    label: '否'
                }],
        value: '',
        // 多选框
        checkAll: true,
        checkedCities: ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'],
        cities: cityOptions,
        isIndeterminate: true,
        // 多选框
         currentPage1: 5,
      }
  },
  methods:{
    //   分页
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },


   
    
  }
}
</script>
<style lang="scss" scoped>
.guoneizd-content{
     width:100%;
    // display:flex;
    background-color: #f1f2f4;
    margin-left:10px;
    margin-right: 10px;
    margin-top:10px;
    padding:5px 20px;
    .guoneizd-top1{
        display: flex;
        justify-content: flex-start;
        .guoneizd-chd{
            
        }
    }
}
// 添加下边框
.guonerzd-top1{
    border-bottom: 0.5px solid #ccc;
    margin-top:5px;
    margin-bottom: 5px;
}
// top
.el-col{
    display: flex;
    font-size: 13px;
    height: 36px;
    line-height: 36px;
    white-space:nowrap;
    margin-right: 20px;
}
.guoneizd-ff{
    width:120%;
    height:20px;
    background-color: #fff;
    margin-left:-20px;
    // margin-right:-20px;
}


</style>
<style lang="scss">

</style>
