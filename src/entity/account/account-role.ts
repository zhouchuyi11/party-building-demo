import { BusinessPo } from '@/entity/common/base'

export interface AccountRole extends BusinessPo {
	// 所属部门id
	fkDeptId: string
	// 所属单位id
	fkOrgId: string
	// 上级角色
	fkParentIds: string
	// 角色级别
	roleLevel: number
	// 角色名称
	roleName: string
	// 角色类型
	roleType: number
	// 排序
	sortCode: number
}
