import { BusinessPo } from '@/entity/common/base'

export interface AccountOrg extends BusinessPo {
	// 单位地址
	address: string
	// 银行帐号
	bankAccount: string
	// 开户银行名称
	bankName: string
	// 联系人
	contacts: string
	// 企业邮箱
	email: string
	// 传真
	fax: string
	//单位logo附件id
	fkLogoId: string
	// 数据字典-单位类型id
	fkOrgTypeDictId: string
	// 上级单位id
	fkParentId: string
	// 维度
	latitude: number
	// 法人
	legalPerson: string
	// logo路径
	logoPath: string
	// 经度
	longitude: number
	// 单位编号
	orgCode: string
	// 单位名称
	orgName: string
	// 联系电话
	phone: string
	// 数据字典-单位类型名称
	rfOrgTypeDictName: string
	// 统一社会信用代码
	socialCreditCode: string
	// 排序
	sortCode: number
	// 职工人数
	workForce: number
}
