import { app } from './main'

app({
  App1: () => import(/* webpackPrefetch: true, webpackChunkName: "App1" */ './App.vue')
});