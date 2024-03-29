import { createRouter, createWebHistory } from 'vue-router'

import PkIndexView from "@/views/pk/PkIndexView"
import RanklistIndexView from "@/views/ranklist/RanklistIndexView"
import RecordIndexView from "@/views/record/RecordIndexView"
import UserBotIndexView from "@/views/user/bot/UserBotIndexView"
import NotFound from "@/views/error/NotFound"
import UserAccountLoginView from "@/views/user/account/UserAccountLoginView"
import UserAccountRegisterView from "@/views/user/account/UserAccountRegisterView"

const routes = [
  {
    path: "/",
    redirect: "/pk/"
  },

  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView
  },

  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },

  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },

  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView
  },

  {
    path: "/404/",
    name: "404",
    component: NotFound
  },

  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView
  },

  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView,
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
