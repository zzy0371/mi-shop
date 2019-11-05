import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
		meta:{
			show:true
		}
  },
	{
		path: '/product/:id',
		name: 'product',
		component: Product,
		meta:{
			show:false
		}
	},
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
		meta:{
			show:true
		}
  }
]

const router = new VueRouter({
  routes
})

export default router
