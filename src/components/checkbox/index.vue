<template>
    <div name="复选框插件">
         <el-row>  
            <el-col class='guoneizd-check' >  
                <el-checkbox v-model="checked">按来源优先排序</el-checkbox>
                <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
               
            </el-col> 
           
        </el-row>
    </div>
</template>
<script>
const cityOptions = ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'];
export default {
    data(){
        return{
            // 多选框
            checkAll: true,
            checkedCities: ['XC1', 'TDL', 'TN', 'TC','FGS','LHC','TB','BSX','TC1','XC2'],
            cities: cityOptions,
            isIndeterminate: true,
            // 多选框
        }
    },
    methods:{
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
    }
}
</script>
<style lang="scss" scoped>
    .el-checkbox{
    margin-right:0px;
}
</style>
<style lang="scss">
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