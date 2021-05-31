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
    path: 'bar-chart',
    component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/charts/BarChartDemo.vue'
          ),
    name: 'BarChartDemo',
    meta: {
      title: 'barChart',
      noCache: true
    }
  },
  {
    path: 'line-chart',
    component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo.vue'
          ),
    name: 'LineChartDemo',
    meta: {
      title: 'lineChart',
      noCache: true
    }
  },
  {
    path: 'mixed-chart',
    component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChatDemo.vue'
          ),
    name: 'MixedChartDemo',
    meta: {
      title: 'mixedChart',
      noCache: true
    }
  }

]

export default chartsRouter12
