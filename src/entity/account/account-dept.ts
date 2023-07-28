import { BusinessPo } from '@/entity/common/base'

export interface AccountDept extends BusinessPo {
	// 部门地址
	address: string
	// 部门联系人
	contacts: string
	// 部门编号
	deptCode: string
	// 部门领导
	deptLeader: string
	// 部门级别
	deptLevel: number
	// 部门名称
	deptName: string
	// 部门类型
	deptType: string
	// 部门邮箱
	email: string
	// 部门传真
	fax: string
	// 所属单位ID
	fkOrgId: string
	// 上级部门编号
	fkParentCode: string
	// 上级部门ID
	fkParentId: string
	// 部门联系电话
	phone: string
	// 电话短号
	phoneCornet: string
	// 排序
	sortCode: number
}
