<template>
  <div class='chongfucg-contant'>
       <el-row >
            <el-col :span="2">
                <div class="">订单号:</div>
                <el-input
                        v-model="input"
                        class="guoneiwcp-inputddh"
                        size="mini"
                    >
                </el-input>
            </el-col>
            <p>来源:</p>
            <el-dropdown @command="handleCommand" size="small">
                <el-button type="primary" size="small">
                    {{flytype1}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="全部">全部</el-dropdown-item>
                    <el-dropdown-item command="OTA">OTA</el-dropdown-item>
                    <el-dropdown-item command="B2B">B2B</el-dropdown-item>
                    <!-- <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown size="small">
                <el-button type="primary" size="small">
                    {{flytype2}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                
                <el-dropdown-menu slot="dropdown" v-if="flytype1==='全部'">
                    
                    <el-dropdown-item v-for="item in otaandb2b" :key="item" command=this.key>{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" v-else-if="flytype1=='OTA'">
                    
                    <el-dropdown-item v-for="item in otachl" :key="item">{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" v-else>
                    
                    <el-dropdown-item v-for="item in b2bchl" :key="item">{{item}}</el-dropdown-item>
                  
                </el-dropdown-menu>
            </el-dropdown>


            <div  class="chongfucg-data">
               <container></container>
             </div>
            <el-button type="primary" round size="medium" >查询</el-button>
        </el-row>
  </div>
</template>
<script>
import Container from '@/components/container/index.vue';
export default {
  name:'chongfucg',
  components:{
      Container
  },
  data(){
      return{
          flytype1:'全部',
          flytype2:'全部',
          otachl:['TC','TC1','就旅行','XC','TB','TTS','TN'],
          b2bchl:['天地行','自由飞越','517','BAITUO','51BK','8000YI','LIANHE800','19E','JINRI'],
          otaandb2b:['TC','TC1','就旅行','XC','TB','TTS','TN','天地行','自由飞越','517','BAITUO','51BK','8000YI','LIANHE800','19E','JINRI']
      }
  },
  watch:{
    //   flytype1:function(){

    //   }
  },
  created(){
      console.log(this.flytype1)
  },
   methods: {
      handleClick() {
        alert('button click');
      },
    //  下拉框 
     handleCommand(command){
         this.flytype1 = command
     }
    }
}
</script>
<style lang="scss" scoped>

.chongfucg-data{
    button{
          margin-left:20px;
    }
}
</style>
