import { BusinessPo } from '@/entity/common/base'
import { AccountDept } from '@/entity/account/account-dept'
import { AccountOrg } from '@/entity/account/account-org'
import { AccountRole } from '@/entity/account/account-role'
import { AccountThirdParty } from '@/entity/account/account-thirdParty'
export interface AccountUserVo extends AccountUser {
	// 用户扩展信息
	userInfo: AccountUserInfo
	// 所属角色信息
	roleList: AccountRole[]
	// 所属部门信息
	deptList: AccountDept[]
	// 所属单位信息
	orgList: AccountOrg[]
	// 用户权限
	permissionMap: { [key: string]: string }
	// 第三方认证账户
	thirdPartyAccountList: AccountThirdParty[]
	// 身份认证票据
	authToken: string
	// 所属单位名称
	orgNames: string
	// 所属部门名称
	deptNames: string
	// 头像路径
	headPath: string
	// 角色名称
	roleNames: string
}
export interface AccountUser extends BusinessPo {
	// 用户激活状态 0禁用 1激活 2待审核 3锁定
	activeStatus: 0 | 1 | 2 | 3
	// 注册ip
	regIp: string
	// 站点/终端
	siteCode: string
	// 用户账户
	userAccount: string
	// 用户姓名
	userName: string
	// 用户密码
	userPassword: string
	// 0普通用户 1超级管理员
	userType: 0 | 1
}
export interface AccountUserInfo extends BusinessPo {
	// 地址，区域权限
	address: string
	// 邮箱
	email: string
	// 图标/投下给附件id
	fkHeadId: string
	// 数据字典项id（前端配置数据字典编号选择）：职务id
	fkPositionDictId: string
	// 用户id
	fkUserId: string
	// 头像附件路径
	headPath: string
	// 身份证号
	idCard: string
	// 关联账户id
	openId: string
	// 联系电话
	phone: string
	// qq
	qq: string
	// 数据字典项值：职务名称
	rfPositionDictName: string
	// 性别：0默认 1男 2女
	sex: 0 | 1 | 2
	// 排序
	sortCode: number
	// 用户信息编号
	userInfoCode: string
	// 用户姓名（冗余）
	userInfoName: string
	// 微信
	wechat: string
	// 员工号
	workNumber: string
	// 开始工作时间
	workingDate: string
}
