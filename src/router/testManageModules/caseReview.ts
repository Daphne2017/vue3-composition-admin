/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 21:26:26
 */
import { RouteRecordRaw } from 'vue-router'

const chartsRouter12: Array<RouteRecordRaw> = [

  {
    path: 'caseManage',
    component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/testManage/caseManage/index.vue'
          ),
    name: 'CaseManage',
    meta: {
      title: 'caseManage',
      noCache: true
    }
  },
  {
    path: 'executePlan',
    component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/testManage/executePlan/index.vue'
          ),
    name: 'ExecutePlan',
    meta: {
      title: 'executePlan',
      noCache: true
    }
  }
  // {
  //   path: 'line-chart',
  //   component: () =>
  //         import(
  //           /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo.vue'
  //         ),
  //   name: 'LineChartDemo',
  //   meta: {
  //     title: 'lineChart',
  //     noCache: true
  //   }
  // },
  // {
  //   path: 'mixed-chart',
  //   component: () =>
  //         import(
  //           /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChatDemo.vue'
  //         ),
  //   name: 'MixedChartDemo',
  //   meta: {
  //     title: 'mixedChart',
  //     noCache: true
  //   }
  // }

]

export default chartsRouter12
