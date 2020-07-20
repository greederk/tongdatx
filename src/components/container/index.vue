// 容器组件
<template>
  <div>
      <div class="container-top">
         

            <div class="container-date">
               
              
                <template>
                        <div class="block">
                            <!-- <span class="demonstration">默认</span> -->
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div class="block">
                            <span class="demonstration">-</span>
                            <el-date-picker
                            v-model="value2"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                        
                            >
                            </el-date-picker>
                        </div>

                       
             </template>

            </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'container',
  data(){
      return{
          radio:'',
          input:'',
          pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: []
        },
        value1: '',
        value2: '',
      }
  },
  methods: {
           
  }
    
}
</script>
<style lang="scss" style lang="scss" scoped>
.container-top{
    // width:100%;
    // display:flex;
    // background-color: #f1f2f4;
    // margin-left:10px;
    // margin-right: 10px;
    // margin-top:10px;
    // padding:5px 20px;
    // line-height: height;
    // flex-wrap:wrap;
    // // flex-direction:column;
    // // flex-wrap:nowrap;
    // // justify-content:center;
    // align-items:center;
    
}
.container-date{
    display: flex;
    align-items:center;
    button{
        margin-left:20px;
    }
}
.container-title{
    margin-right:10px;
}
</style>
<style lang="scss">
.container-inputddh{
        // width:130px;
        // .el-input__inner{
        //     height:30px;
        //     line-height: height;
        // }
    }
    // 设置输入框的宽度
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:180px;
}
// // 日期插件
.el-picker-panel{
    border-radius: 10px;
    line-height: 9px;
}
.el-date-table td div{
    padding:0 0 ;
    height:21px;
}
.el-date-table td span{
    transform: translateX(-64%);
    line-height: 25px;
}
.el-picker-panel__sidebar{
    display: hidden;
}
</style>

