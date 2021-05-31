/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 21:26:26
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
import chartsRouter12 from './caseReview'

const chartsRouter: Array<RouteRecordRaw> = [
  {
    path: '/testManage',
    component: Layout,
    redirect: 'noredirect',
    name: 'TestManage',
    meta: {
      title: 'testManage',
      icon: '#iconchart1'
    },
    children: [
      ...chartsRouter12
    ]
  }
]

export default chartsRouter
