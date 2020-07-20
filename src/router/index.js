import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

 import Chupiaodaodan from '@/views/orders/chupiaodaodan';
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '订单出票',  icon: 'table' },
    children: [
      {
        path: '/chupiaodaodan',
        name: 'chupiaodaodan',
        // component: () => import('@/views/orders/chupiaodaodan'),
        component: Chupiaodaodan,
        meta: { title: '出票导单监控' }
      },
      {
        path: '/guoneizd',
        name: 'guoneizd',
        component: () => import('@/views/orders/guoneizd'),
        meta: { title: '国内自动订单'}
      },
      {
        path: '/guoneisxr',
        name: 'guoneisxr',
        component: () => import('@/views/orders/guoneisxr'),
        meta: { title: '国内失信人订单'}
      },
      {
        path: '/toubaoyc',
        name: 'toubaoyc',
        component: () => import('@/views/orders/toubaoyc'),
        meta: { title: '投保异常订单'}
      },
      {
        path: '/chongfucg',
        name: 'chongfucg',
        component: () => import('@/views/orders/chongfucg'),
        meta: { title: '重复采购'}
      },
      {
        path: '/guoneijj',
        name: 'guoneijj',
        component: () => import('@/views/orders/guoneijj'),
        meta: { title: '国内紧急订单'}
      },
      {
        path: '/guojijj',
        name: 'guojijj',
        component: () => import('@/views/orders/guojijj'),
        meta: { title: '国际紧急订单'}
      },
      {
        path: '/jiangcangcj',
        name: 'jiangcangcj',
        component: () => import('@/views/orders/jiangcangsj'),
        meta: { title: '降舱数据上传'}
      },
      {
        path: '/guojijc',
        name: 'guojijc',
        component: () => import('@/views/orders/guojijc'),
        meta: { title: '国际降舱'}
      },
      {
        path: '/dingdandqr',
        name: 'dingdandqr',
        component: () => import('@/views/orders/dingdandqr'),
        meta: { title: '订单待确认'}
      },
      {
        path: '/dingdancx',
        name: 'dingdancx',
        component: () => import('@/views/orders/dingdancx'),
        meta: { title: '订单查询'}
      },
      {
        path: 'guoneiweicp',
        name: 'guoneiweicp',
        component: () => import('@/views/orders/guoneiweicp'),
        meta: { title: '国内未出票'}
      },
      {
        path: '/tongcangdcl',
        name: 'tongcangdcl',
        component: () => import('@/views/orders/tongcangdcl'),
        meta: { title: '同舱待处理'}
      },
      {
        path: '/guoneicpz',
        name: 'guoneicpz',
        component: () => import('@/views/orders/guoneicpz'),
        meta: { title: '国内出票中'}
      },
      {
        path: '/guoneiycp',
        name: 'guoneiycp',
        component: () => import('@/views/orders/guoneiycp'),
        meta: { title: '国内已出票'}
      },
      {
        path: '/guoneijc',
        name: 'guoneijc',
        component: () => import('@/views/orders/guoneijc'),
        meta: { title: '国内降舱'}
      },
      {
        path: '/tongcangcx',
        name: 'tongcangcx',
        component: () => import('@/views/orders/tongcangcx'),
        meta: { title: '同舱查询'}
      },
      {
        path: '/pnrlx',
        name: 'pnrlx',
        component: () => import('@/views/orders/pnrlx'),
        meta: { title: 'PNR连续补位'}
      },
      {
        path: '/yichangdd',
        name: 'yichangdd',
        component: () => import('@/views/orders/yichangdd'),
        meta: { title: '异常订单'}
      },
      {
        path: '/shougongdd',
        name: 'shougongdd',
        component: () => import('@/views/orders/shougongdd'),
        meta: { title: '手工导单'}
      },
      {
        path: '/huitianrw',
        name: 'huitianrw',
        component: () => import('@/views/orders/huitianrw'),
        meta: { title: '回填任务'}
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '个人中心',
      icon: 'nested'
    },
    children: [
      {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '消息订阅' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '已锁订单'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '个性配置' }
      }
    ]
  },
  // 订单助手
  {
    path: '/assistant',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '订单助手',
      icon: 'nested'
    },
    children: [
      {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '黑屏服务' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国内低价扫描'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '京东线下退票' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国际低价扫描' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '接受短信列表'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'DETRNI详情列表' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '京东线下退票' }
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '国际低价扫描' }
       },
       {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '接受短信列表'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'DETRNI详情列表' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国际订单编码' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '淘宝国际扫线'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'PNR入库' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '会员管理' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '白屏操作'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国内待邮寄订单' }
      }
    ]
  },
  // 退改签处理  Endorse the back  // Airticket change
  {
    path: '/AirticketChange',
    component: Layout,
    redirect: '/AirticketChange/menu1',
    name: 'Nested',
    meta: {
      title: '退改签处理',
      icon: 'nested'
    },
    children: [
      {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '改签导单监控' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '退票导单监控'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '退改补录' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国内未提交退票订单' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '重出查询'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '改签查询' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国内航变订单列表' }
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '退票查询' }
       },
       {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '国内申请改签订单'}
      }
    ]
  },
  // 统计报表   Statistical reports
  {
    path: '/Statistical',
    component: Layout,
    redirect: '/Statistical/menu1',
    name: 'Nested',
    meta: {
      title: '统计报表',
      icon: 'nested'
    },
    children: [
      {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '利润汇总' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '订单来源及出票地'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '出票平台' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '财务报表' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '销售报表'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '退款明细' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '出票明细' }
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '个人业绩' }
       },
       {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '销售统计'}
        },
       {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '导单统计'}
      }
    ]
  },
  // System management
  {
    path: '/System',
    component: Layout,
    redirect: '/Statistical/menu1',
    name: 'Nested',
    meta: {
      title: '系统管理',
      icon: 'nested'
    },
    children: [
      {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '出票机器人配置' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '职位管理'}
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '角色管理' }
      },
      {
        path: 'menu2',
        name: 'Table',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '数据维护' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history',
   // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
