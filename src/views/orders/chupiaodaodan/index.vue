

<template>
  <div>
        <div class="chupiaodaodan-top">
          <div>官网订单号:</div>
          <el-input
            v-model="orderId"
            class="container-inputddh"
            size="mini"
            
          >
          </el-input>
          <p>处理状态:</p>
            <el-radio v-model="radio" label="1">已处理</el-radio>
            <el-radio v-model="radio" label="2">待处理</el-radio>
        <p class="container-title">订单创建日期:</p>
        <Container/> 
         <el-button type="primary" round size="medium" >查询</el-button>
         </div>
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
</template>
<script>
import Axios from 'axios'
// 出票导单监控
import Container from '@/components/container/index.vue';
export default {
    name:'chupiaodaodan',
    components:{
        Container
    },
    data(){
        return{
              orderId:'',
              tableData: [
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                }, 
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },

                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                },
                {
                    laiyuan: 'BSX',
                    dingdanhao: '713898',
                    ptdingdanhao: 'bsx200521133716504001',
                    people:'KVCWMS | ',
                    paytime:'2020-05-21 14:06',
                    endtime:'2020-05-22 10:35:00',
                    flytime:'2020-05-22 13:05:00    PVG-LYI    MU5599  S',
                    code:'TDTX-HUIFU-S-420-PAT',
                    peolength:'1 【 1/0 】',
                    price:"463.00",
                    status:'收款完成',
                    seats:"3",
                    handle:'郭华初',
                    buwei:'补位'
                }
             ]
        }
    },
    created:{
        
    },
    methods:{
       handledata(){
           Axios.get('view-source:http://szxtongdatx.qlv88.com/OrderList/GuoNei_TicketOutUndo')
       }
    }
}
</script>
<style lang="scss" scoped>
.chupiaodaodan-top{
   width:100%;
    display:flex;
    background-color: #f1f2f4;
    margin-left:10px;
    margin-right: 10px;
    margin-top:10px;
    padding:5px 20px;
    line-height: height;
    flex-wrap:wrap;
    // flex-direction:column;
    // flex-wrap:nowrap;
    // justify-content:center;
    align-items:center;
    .container-inputddh{
        width:150px;
        margin-left:10px;
        margin-right:40px;
        font-size: 16px;
    }
}
.el-table--border{
    margin-top:30px;
    margin-left:10px;
}
// 表头
.el-table__header{
    background-color: #ccc;
}
.tl-table tr{
    
        background-color: #ccc;
    
   
}
</style>
<style lang='scss'>
.has-gutter{
    tr{
         background-color: #ccc;
    }
}
.tl-table tr{
        background-color: #ccc;
}

.el-table th.is-leaf{
  background:#F9F9F9; 
  border-bottom: none;
}
</style>
