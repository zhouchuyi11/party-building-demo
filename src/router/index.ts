import { createRouter, createWebHistory, RouteRecordRaw, Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

//动态导入所有modules下的路由信息
const modelsFile = import.meta.glob('./modules/*.ts', { eager: true })
//路由去中心化
const children =
	/**
	 * a:{
	 *     name:'zhangsan',
	 *     account:'zs'
	 * }
	 * Object.keys(a) =>['name','account']
	 * Object.values(a) =>['zhangsan','zs']
	 *
	 * map forEach for in
	 *
	 * Record<key,value> => {}
	 *
	 * flat深度循环遍历，一般用于二维数组转一维数组 e.g. string[][] => string[]
	 * [{ name:'1月', data:[60,70]},{ name:'2月', data:[80,90] }]
	 * ['1月','2月']=>xAxis
	 * b:[[60,70],[80,90]] => b.flat()=>[60,70,80,90] 默认深度为1
	 */
	Object.keys(modelsFile)
		.map((key: string) => (modelsFile[key] as Record<any, any>).default)
		.flat(1) || []

const routes: RouteRecordRaw[] = [
	{
		path: '/', //只能有一个路径
		name: 'home',
		component: () => import('@/views/home/Index2.vue'),
		children: children
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})
export const defaultBeforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	if (['/404', '/403', '/500'].includes(to.path)) {
		next()
		return
	} else {
		next()
	}
}
/**
 * 路由守卫
 */
router.beforeEach(defaultBeforeEach)
/**
 * 获取路由信息
 */
export const getRouter = (): Router => {
	return router
}
export default router
