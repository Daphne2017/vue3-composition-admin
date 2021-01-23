/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-11 15:13:20
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-21 17:12:40
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'Components',
    meta: {
      title: 'components',
      icon: '#iconcomponent'
    },
    children: [
      {
        path: 'tinymce',
        component: () => import(/* webpackChunkName: "tinymce" */ '@/views/components/TinymceModulesDemo.vue'),
        name: 'TinymceDemo',
        meta: { title: 'tinymce' }
      },
      {
        path: 'back-to-top',
        component: () =>
          import(
            /* webpackChunkName: "BackToTop" */ '@/views/components/BackToTopDemo.vue'
          ),
        name: 'BackToTopDemo',
        meta: {
          title: 'backToTop',
          noCache: true
        }
      },
      // {
      //   path: 'avatar-upload',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "AvatarUpload" */ '@/views/components/AvatarUploadDemo.vue'
      //     ),
      //   name: 'AvatarUploadDemo',
      //   meta: {
      //     title: 'avatarUpload',
      //     noCache: true
      //   }
      // },
      // {
      //   path: 'dropzone',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "AvatarUpload" */ '@/views/components/DropzoneDemo.vue'
      //     ),
      //   name: 'DropzoneDemo',
      //   meta: {
      //     title: 'dropzone',
      //     noCache: true
      //   }
      // },
      {
        path: 'count-to',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/CountToDemo.vue'
          ),
        name: 'CountToDemo',
        meta: {
          title: 'countTo',
          noCache: true
        }
      },
      {
        path: 'sticky',
        component: () =>
          import(
            /* webpackChunkName: "sticky" */ '@/views/components/StickyDemo.vue'
          ),
        name: 'StickyDemo',
        meta: {
          title: 'sticky',
          noCache: true
        }
      },
      {
        path: 'draggable-dialog',
        component: () => import(/* webpackChunkName: "draggable-dialog" */ '@/views/components/DraggableDialogDemo.vue'),
        name: 'DraggableDialogDemo',
        meta: { title: 'draggableDialog' }
      },
      {
        path: 'draggable-kanban',
        component: () => import(/* webpackChunkName: "draggable-kanban" */ '@/views/components/DraggableKanBanDemo.vue'),
        name: 'DraggableKanbanDemo',
        meta: { title: 'draggableKanban' }
      },
      {
        path: 'draggable-list',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/DraggableListDemo.vue'
          ),
        name: 'DraggableListDemo',
        meta: {
          title: 'draggableList',
          noCache: true
        }
      },
      {
        path: 'draggable-select',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/DraggableSelectDemo.vue'
          ),
        name: 'DraggableSelectDemo',
        meta: {
          title: 'draggableSelect',
          noCache: true
        }
      }
    ]
  }
]

export default componentsRouter