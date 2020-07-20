<template>
  <div name="订单查询" class='dingdancx-content'>
      <div class="dingdancx-top">
        <div class="dingdancx-t1">
            <span>快速查询:</span>
            <el-input v-model="input" class="guoneizd-inpuths" size="mini"></el-input>
            <span>订单号:</span>
            <el-input v-model="input1" class="guoneizd-inpuths" size="mini"></el-input>

             <div class="">航程类型:</div>
                <template >
                    <el-select v-model="value" placeholder="全部" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                         
                        >
                        </el-option>
                    </el-select>
                </template>
              </div>

              <p>来源:</p>
              <el-dropdown @command="handleCommand" size="small">
                  <el-button type="primary" size="small">
                      {{flytype1}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="OTA">OTA</el-dropdown-item>
                      <el-dropdown-item command="B2B">B2B</el-dropdown-item>
                  
                  </el-dropdown-menu>
              </el-dropdown>
               <el-dropdown  @command="handleCommandf2" size="small">
                <el-button type="primary" size="small">
                    {{flytype2}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                
                <el-dropdown-menu slot="dropdown" v-if="flytype1==='全部'">
                    
                    <el-dropdown-item v-for="item in otaandb2b" :key="item" command='item'>{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" v-else-if="flytype1=='OTA'">
                    
                    <el-dropdown-item v-for="item in otachl" :key="item">{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" v-else>
                    
                    <el-dropdown-item v-for="item in b2bchl" :key="item">{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
              </el-dropdown>

              <p>订单状态:</p>
              <el-dropdown @command="handleCommandzt" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanzt}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="订单取消">订单取消</el-dropdown-item>
                      <el-dropdown-item command="收款完成">收款完成</el-dropdown-item>
                      <el-dropdown-item command="部分支付">部分支付</el-dropdown-item>
                      <el-dropdown-item command="支付完成">支付完成</el-dropdown-item>
                      <el-dropdown-item command="部分支付部分出票">部分支付部分出票</el-dropdown-item>
                      <el-dropdown-item command="支付完成部分出票">支付完成部分出票</el-dropdown-item>
                      <el-dropdown-item command="出票完成">出票完成</el-dropdown-item>
                      <el-dropdown-item command="待验证">待验证</el-dropdown-item>
                      <el-dropdown-item command="订单待确认">订单待确认</el-dropdown-item>
                      <el-dropdown-item command="出票审核">出票审核</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>

              <p>航空公司:</p>
              <el-input v-model="input2" class="guoneizd-inpuths" size="mini"></el-input>
               <el-dropdown @command="handleCommandgs" size="small">
                  <el-button type="primary" size="small">
                      {{dingdangs}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="四川航空">四川航空</el-dropdown-item>
                      <el-dropdown-item command="东星航空">东星航空</el-dropdown-item>
                      <el-dropdown-item command="祥鹏航空">祥鹏航空</el-dropdown-item>
                      <el-dropdown-item command="春秋航空">春秋航空</el-dropdown-item>
                      <el-dropdown-item command="意大利航空">意大利航空</el-dropdown-item>
                      <el-dropdown-item command="英国航空">英国航空</el-dropdown-item>
                      <el-dropdown-item command="汶莱王家航空">汶莱王家航空</el-dropdown-item>
                      <el-dropdown-item command="奥凯航空">奥凯航空</el-dropdown-item>
                      <el-dropdown-item command="台湾长荣航空">台湾长荣航空</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">釜山航空</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>

            <p>订单标签:</p>
               <el-dropdown @command="handleCommandbq" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanbq}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="特殊订单">特殊订单</el-dropdown-item>
                      <el-dropdown-item command="加急订单">加急订单</el-dropdown-item>
                      <el-dropdown-item command="疑难订单">疑难订单</el-dropdown-item>
                      <el-dropdown-item command="金牌订单">金牌订单</el-dropdown-item>
                      <el-dropdown-item command="急速出票">急速出票</el-dropdown-item>
                      <el-dropdown-item command="商旅套餐">商旅套餐</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>

            <span>票号:</span>
            <el-input v-model="input3" class="guoneizd-inpuths" size="mini"></el-input>

            <Container />

            <span>起飞-到达:</span>
            <el-input v-model="input4" class="guoneizd-inpuths" size="mini"></el-input><span>-</span>
            <el-input v-model="input5" class="guoneizd-inpuths" size="mini"></el-input>
            
            <span>舱位:</span>
            <el-input v-model="input6" class="guoneizd-inpuths" size="mini"></el-input>

            <span>对账标识:</span>
            <el-input v-model="input7" class="guoneizd-inpuths" size="mini"></el-input>

            <p>出票平台:</p>
               <el-dropdown @command="handleCommandpt" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanpt}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="四川航空">517NA</el-dropdown-item>
                      <el-dropdown-item command="东星航空">去哪儿</el-dropdown-item>
                      <el-dropdown-item command="祥鹏航空">携程</el-dropdown-item>
                      <el-dropdown-item command="春秋航空">同程</el-dropdown-item>
                      <el-dropdown-item command="意大利航空">就旅行</el-dropdown-item>
                      <el-dropdown-item command="英国航空">途牛</el-dropdown-item>
                      <el-dropdown-item command="汶莱王家航空">马蜂窝</el-dropdown-item>
                      <el-dropdown-item command="奥凯航空">MUB2C</el-dropdown-item>
                      <el-dropdown-item command="台湾长荣航空">HUB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">SCB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">ZHB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">9HB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">UQB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">JDB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">8LB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">GXB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">FUB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">Y8B2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">KYB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">BKB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">EUB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">A6B2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">腾邦</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">DZB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">淘宝旗舰店</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">去哪儿旗舰店</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">DZ</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">ZH</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">RY</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">SC</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">JR</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">KNB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">567黑屏</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">八千翼</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">DZB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">HOB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">MFB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">B2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">3UB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">NSB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">MUB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">MUB2T</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">ZHB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">CZB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">3UB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">PNB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">山航掌上飞</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">SCB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">美亚</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">CZB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">QWB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">HUB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">AQB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">今日天下通</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">51BOOK</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">鹏鹏</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">航司服务中心</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">GTB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">同城客户端</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">JRB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">GJB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">MFB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">RYB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">HOB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">G5B2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">SCM网</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">CAB2C</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">旗舰店</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">TVB2B</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">国航APP</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">蜗牛分销</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">CZAPP</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">东航APP</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">HO积分</el-dropdown-item>
                      <el-dropdown-item command="釜山航空">吉祥APP</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>

            <span>成人PNR:</span>
            <el-input v-model="input8" class="guoneizd-inpuths" size="mini"></el-input>

            <span>儿童PNR:</span>
            <el-input v-model="input9" class="guoneizd-inpuths" size="mini"></el-input>

            <span>是否携带儿童:</span>
              <el-dropdown @command="handleCommandet" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanet}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="是">是</el-dropdown-item>
                      <el-dropdown-item command="否">否</el-dropdown-item>
                  </el-dropdown-menu>
            </el-dropdown>

            <span>乘机人:</span>
            <el-input v-model="input10" class="guoneizd-inpuths" size="mini"></el-input>

            <el-dropdown @command="handleCommandbh" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanbh}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="原航班号">原航班号</el-dropdown-item>
                      <el-dropdown-item command="改签航班号">改签航班号</el-dropdown-item>
                     
                  </el-dropdown-menu>
            </el-dropdown>
            <el-input v-model="input11" class="guoneizd-inpuths" size="mini"></el-input>

            <el-dropdown @command="handleCommandrq" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanrq}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="原航班号日期">原航班号日期</el-dropdown-item>
                      <el-dropdown-item command="改签航班号日期">改签航班号日期</el-dropdown-item>
                  </el-dropdown-menu>
            </el-dropdown>
            <Container />

            <el-dropdown @command="handleCommandzl" size="small">
                  <el-button type="primary" size="small">
                      {{dingdanzl}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                      <el-dropdown-item command="国内">国内</el-dropdown-item>
                      <el-dropdown-item command="国际">国际</el-dropdown-item>
                  </el-dropdown-menu>
            </el-dropdown>


             <el-button type="primary" round size="small" >查询</el-button> 
             <el-button type="primary" round size="medium" >刷新</el-button>  
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
      </div>
    
  </div>
</template>
<script>
import Container from '@/components/container/index.vue';
export default {
  name:'dingdancx',
  components:{
    Container
  },
  data(){
    return{
      input:'',
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:'',
      input8:'',
      input9:'',
      input10:'',
      input11:'',
      options: [{
                value: '选项1',
                label: '全部'
                }, {
                value: '选项2',
                label: '单程'
                }, {
                value: '选项3',
                label: '往返'
                },{
                value: '选项4',
                label: '多程'
                },{
                value: '选项5',
                label: '联程'
                }],
      value:'',
      flytype1:'全部',
      flytype2:'全部',
      dingdanzt:'全部',
      dingdangs:'全部',
      dingdanbq:'全部',
      dingdanpt:'全部',
      dingdanet:'全部',
      dingdanbh:'原航班号',
      dingdanrq:'原航班号日期',
      dingdanzl:'全部',
      otachl:['TC','TC1','就旅行','XC','TB','TTS','TN'],
      b2bchl:['天地行','自由飞越','517','BAITUO','51BK','8000YI','LIANHE800','19E','JINRI'],
      otaandb2b:['TC','TC1','就旅行','XC','TB','TTS','TN','天地行','自由飞越','517','BAITUO','51BK','8000YI','LIANHE800','19E','JINRI']
    }
  },
  methods: {
    //  下拉框 
     handleCommand(command){
         this.flytype1 = command
        
     },
     handleCommandf2(command){
        
         this.flytype2 = command
     },
     handleCommandzt(command){
         this.dingdanzt = command
     },
     handleCommandgs(command){
         this.dingdangs = command
     },
     handleCommandbq(command){
         this.dingdanbq = command
     },
     handleCommandpt(command){
         this.dingdanpt = command
     },
     handleCommandet(command){
         this.dingdanet = command
     },
     handleCommandbh(command){
         this.dingdanbh = command
     },
     handleCommandrq(command){
         this.dingdanrq = command
     },
     handleCommandzl(command){
         this.dingdanzl = command
     }
  },
}
</script>
<style lang="scss" scoped>

</style>
