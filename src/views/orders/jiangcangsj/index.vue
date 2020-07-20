
<template>
  <div name="降舱数据上传" class="jiangcangsj">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>扫低舱</span>
      </div>
      <div class="jiangcangsj-body">
        <div class="sj-page1">
          <p>循环次数:</p>
          <el-input v-model="inputpage" placeholder="1" class="sj-pageinput" size="small"></el-input>
        </div>
        <div class="sj-page2">
          <p>订单种类:</p>
          <template>
            <el-radio v-model="radio" label="1">国内</el-radio>
            <el-radio v-model="radio" label="2">国际</el-radio>
          </template>
        </div>
        <div class="sj-page3">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name:'jiangcangsj',
  data () {
      return {
        radio: '1',
        inputpage:'',
         fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
  },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>
<style lang="scss" scoped>
.jiangcangsj{
  padding:20px;
}
.box-card{
  width:50vh;
  padding:10px;
  border:1px solid #ccc;
}
.jiangcangsj-body{
  border-left:1px solid #001528;
  padding:10px;
}
.sj-page1{
  display:flex;
  align-items:baseline;
  border-bottom:2px dashed #ccc;
  .sj-pageinput{
    width:100px;
  }
}
.sj-page2{
  display:flex;
  align-items:baseline;
  border-bottom:2px dashed #ccc;
}
.sj-page3{
  display:flex;
  // align-items:baseline;
  padding:5px 0 5px 0;
  border-bottom:2px dashed #ccc;
}
</style>
