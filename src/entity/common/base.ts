export interface BasePo {
	// 主键id
	id: string
	// 创建时间
	gmtCreate?: string
	// 修改时间
	gmtModified?: string
}
export interface BusinessPo extends BasePo {
	// 创建id
	createUserId?: string
	// 创建人姓名
	createUserName?: string
	// 修改人id
	updateUserId?: string
	// 修改人姓名
	updateUserName?: string
	// 状态 0默认 1删除
	isDeleted: 0 | 1
	// 乐观锁（版本号）
	version?: number
	// 备注
	memo?: string
}
