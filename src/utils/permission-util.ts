import { usePermissionStore } from '../store/permission'
import { useRoute } from 'vue-router'

/**
 * 验证是否存在该权限按钮
 * @param name 权限按钮名称
 * @param path 路由路径
 */
export const checkPermission = (name: string, path?: string): boolean => {
	const permission = usePermissionStore()
	return permission.hasPermission(name, getPath(path))
}

/**
 * 获取当前的路径
 * @param path
 */
const getPath = (path?: string): string => {
	if (path) {
		return path
	}
	const route = useRoute()
	return route.path
}
