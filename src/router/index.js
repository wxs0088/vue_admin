import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Reg from '@/components/Reg'
import Order from '@/components/WorkOrder/order'
import Addorder from '@/components/WorkOrder/Addorder'


Vue.use(Router)

const router = new Router({
	routes: [
		// 首页
		{
			path: '/Index',
			name: 'Index',
			component: Index,
			children:[
				,{path:'/order',component:Order},{path:'/addorder',component:Addorder}
			// 	,{path:'/goodstype',component:Goodstype},{path:'/addtype',component:Addequip}
			// 	,{path:'/upequip',component:Upequip},{path:'/labelinfo',component:Labels}
			// 	,{path:'/uplabel',component:Uplabel}
			]
		},
		// 登录页面
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		// 注册页面
		{
			path: '/reg',
			name: 'Reg',
			component: Reg
		},
		// 开启项目，重定向到登录页面
		{
			path: '/',
			redirect: '/Login'
		},
	],
	// 设置成history时，路由中的#号消失(默认为hash)
	mode: 'history' /*hash*/
})


// 路由拦截
// router.beforeEach((to, from, next) => {
// 	// to 将要访问的路径
// 	// from 从哪个路径跳转而来
// 	// next 是一个函数，表示放行
// 	// next放行的两种方式：1、直接放行next()  2、跳转放行next('/login')
// 	// 判断是否登录
// 	const token = localStorage.getItem('token')

// 	if (to.path === '/login') return next();
// 	if (to.path === '/reg') return next();
// 	if (to.path === '/reverse') return next();
// 	if (to.path === '/reverpass') return next();
// 	if (!token) return next('/login')
// 	next()
// })

export default router