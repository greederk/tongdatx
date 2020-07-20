
####这部分是项目css细节########

####sidebar
一级菜单高度 ， 固定为45px
二级菜单高度 ，固定为34px
控制收缩https://blog.csdn.net/wk15038187622/article/details/103168608

###选项栏 背景色  #f1f2f4

###表格改造
stripe  添加斑马纹

###复选框改造
    //guoneiweicp/index.vue
  .el-checkbox__label{
        padding-left:0px;
    }
    .el-checkbox__label{
        margin-right:10px;
    }

####element响应式布局
https://www.jianshu.com/p/ff03b969b724
大  medium
小  small
超小 mini



###3路由切换速度
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.1s;
}

###解决日历样式自定义（缩小），将包含了修改样式的出票导单组件从懒加载改为热重载，每次都会加载样式。