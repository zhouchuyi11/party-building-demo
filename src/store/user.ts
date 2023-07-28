import { acceptHMRUpdate, defineStore } from 'pinia'
import { AccountUser, AccountUserInfo, AccountUserVo } from '@/entity/account/account-use'
import { AccountRole } from '@/entity/account/account-role'
import { AccountOrg } from '@/entity/account/account-org'
import { AccountDept } from '@/entity/account/account-dept'
import { BaseUtil } from '@/utils/base-util'

interface RequestStore {
	// 用户账号信息
	user: AccountUser | undefined
	// 用户基本信息
	info: AccountUserInfo | undefined
	// 所属角色信息
	roleList: Array<AccountRole>
	// 所属单位信息
	orgList: Array<AccountOrg>
	// 所属部门信息
	deptList: Array<AccountDept>
	// 权限
	permissionMap: { [key: string]: string[] }
}

const STORE_KEY = 'user-store'
export const useUserStore = defineStore(STORE_KEY, {
	state: () =>
		<RequestStore>{
			user: undefined,
			info: undefined,
			roleList: [],
			orgList: [],
			deptList: [],
			permissionMap: {}
		},
	getters: {
		/**
		 * 获取用户头像
		 * @params state
		 */
		avater: state => {
			const headPath = state.info?.headPath
			if (headPath) {
				return BaseUtil.getUploadPath(headPath)
			} else {
				return false
			}
		},
		/**
		 * 获取用户名称
		 * @params state
		 */
		userName: state => {
			return state.user?.userName || '请登录'
		}
	},
	actions: {
		setInfo(userVo: AccountUserVo) {
			const permissionMap: { [key: string]: string[] } = {}
			Object.entries(userVo.permissionMap).forEach(([key, value]) => {
				permissionMap[key] = value.split(',')
			})
			this.$patch({
				user: {
					...userVo
				},
				//info: userVo.userInfo,
				roleList: userVo.roleList,
				deptList: userVo.deptList,
				orgList: userVo.orgList,
				permissionMap: permissionMap
			})
		},
		/**
		 * 清除用户信息
		 */
		clearInfo() {
			this.$patch({
				user: undefined,
				info: undefined,
				roleList: [],
				orgList: [],
				deptList: [],
				permissionMap: {}
			})
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: localStorage
			}
		]
	}
})
// 热更新实现
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
